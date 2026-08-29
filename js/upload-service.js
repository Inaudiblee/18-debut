/* ============================================================
   js/upload-service.js
   Unified Memory Upload & Compression Service

   ARCHITECTURE:
     1. compressImage(file)
        - Max 1600px width/height while maintaining original aspect ratio.
        - Preserves orientation (portrait stays portrait, landscape stays landscape).
        - Does NOT enlarge small images.
        - Uses JPEG format at 82% quality (optimizes 5-10MB mobile photos down to ~500KB - 1.5MB).

     2. uploadMemory({ name, caption, file })
        - Main service boundary for uploading memories.
        - Step A: Validate image file (type & initial file size up to 12MB).
        - Step B: Compress image via canvas pipeline (max 1600px, quality 0.82).
        - Step C: Route payload:
            * IF Supabase env vars are present -> upload image to Supabase Storage, insert metadata into Supabase Database.
            * ELSE -> save via shared storage layer (Netlify Function / localStorage mock).

   SUPABASE ARCHITECTURE:
     - Bucket: "memories"
     - Table:  "memories" (id, name, caption/message, image_url, created_at)
     - Auth:   Anon public uploads allowed (via RLS policy on bucket and table).
     - NEVER includes SUPABASE_SERVICE_ROLE_KEY.
   ============================================================ */

(function (global) {
  "use strict";

  // Configuration constants
  const MAX_DIMENSION = 1600; // max width or height in pixels
  const JPEG_QUALITY = 0.82;  // 82% quality yields crisp images at ~500KB-1.5MB
  const MAX_FILE_SIZE_BYTES = 12 * 1024 * 1024; // accepts initial camera uploads up to 12MB

  // ------------------------------------------------------------
  // 1. IMAGE COMPRESSION ENGINE
  // ------------------------------------------------------------
  function compressImage(file) {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject(new Error("No image file provided."));
        return;
      }
      if (!/image\/(jpeg|jpg|png|webp)/i.test(file.type)) {
        reject(new Error("Please select a valid image (JPG, PNG, or WebP)."));
        return;
      }
      if (file.size > MAX_FILE_SIZE_BYTES) {
        reject(new Error("File size exceeds 12MB. Please choose a smaller photo."));
        return;
      }

      const reader = new FileReader();
      reader.onerror = () => reject(new Error("Could not read image file."));
      reader.onload = (e) => {
        const img = new Image();
        img.onerror = () => reject(new Error("Failed to load image into memory."));
        img.onload = () => {
          let w = img.width;
          let h = img.height;

          // Downscale only if larger than MAX_DIMENSION; maintain exact aspect ratio
          if (w > MAX_DIMENSION || h > MAX_DIMENSION) {
            if (w > h) {
              h = Math.round(h * (MAX_DIMENSION / w));
              w = MAX_DIMENSION;
            } else {
              w = Math.round(w * (MAX_DIMENSION / h));
              h = MAX_DIMENSION;
            }
          }

          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;

          const ctx = canvas.getContext("2d");
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";
          ctx.drawImage(img, 0, 0, w, h);

          const dataUrl = canvas.toDataURL("image/jpeg", JPEG_QUALITY);
          resolve({
            dataUrl,
            width: w,
            height: h,
            originalSize: file.size,
            compressedSizeEstimate: Math.round((dataUrl.length * 3) / 4),
          });
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  // ------------------------------------------------------------
  // 2. SUPABASE INTEGRATION ENGINE (STUBBED / ENVIRONMENT READY)
  // ------------------------------------------------------------
  function getSupabaseConfig() {
    const url = window.VITE_SUPABASE_URL || (typeof process !== "undefined" && process.env && process.env.VITE_SUPABASE_URL);
    const key = window.VITE_SUPABASE_ANON_KEY || (typeof process !== "undefined" && process.env && process.env.VITE_SUPABASE_ANON_KEY);
    if (url && key && url.length > 5 && key.length > 5) {
      return { url, key };
    }
    return null;
  }

  async function uploadToSupabase({ name, caption, compressed }) {
    const config = getSupabaseConfig();
    if (!config) {
      throw new Error("Supabase credentials not found in environment.");
    }

    const fetchRes = await fetch(compressed.dataUrl);
    const blob = await fetchRes.blob();
    const fileName = `memory_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.jpg`;

    // Upload to Supabase Storage bucket 'memories'
    const storageEndpoint = `${config.url}/storage/v1/object/memories/${fileName}`;
    const uploadRes = await fetch(storageEndpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${config.key}`,
        "apikey": config.key,
        "Content-Type": "image/jpeg",
        "x-upsert": "true",
      },
      body: blob,
    });

    if (!uploadRes.ok) {
      const errJson = await uploadRes.json().catch(() => ({}));
      throw new Error(errJson.message || "Failed to upload photo to Supabase Storage.");
    }

    const publicUrl = `${config.url}/storage/v1/object/public/memories/${fileName}`;

    // Insert record into Supabase Database table 'memories'
    const dbEndpoint = `${config.url}/rest/v1/memories`;
    const dbRes = await fetch(dbEndpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${config.key}`,
        "apikey": config.key,
        "Content-Type": "application/json",
        "Prefer": "return=representation",
      },
      body: JSON.stringify({
        name,
        message: caption,
        image_url: publicUrl,
        created_at: new Date().toISOString(),
      }),
    });

    if (!dbRes.ok) {
      const errJson = await dbRes.json().catch(() => ({}));
      throw new Error(errJson.message || "Failed to save memory record to Supabase Database.");
    }

    const inserted = await dbRes.json();
    const record = Array.isArray(inserted) ? inserted[0] : inserted;

    return {
      id: record.id || Date.now(),
      name: record.name,
      caption: record.message || caption,
      image: record.image_url,
    };
  }

  // ------------------------------------------------------------
  // 3. MOCK / TESTING STORAGE ENGINE (CURRENT PHASE)
  // ------------------------------------------------------------
  async function uploadToMockStorage({ name, caption, compressed }) {
    const memory = {
      id: Date.now(),
      name,
      caption,
      image: compressed.dataUrl,
      created_at: new Date().toISOString(),
    };

    let ok = false;
    if (window.AJStorage && typeof window.AJStorage.storageAppend === "function") {
      ok = await window.AJStorage.storageAppend("memories", memory, true);
    }

    return { ok, memory };
  }

  // ------------------------------------------------------------
  // 4. MAIN PUBLIC UNIFIED UPLOAD FUNCTION
  // ------------------------------------------------------------
  async function uploadMemory({ name, caption, file }) {
    if (!name || !name.trim()) throw new Error("Please enter your name.");
    if (!caption || !caption.trim()) throw new Error("Please enter a description or message.");
    if (!file) throw new Error("Please select a photo.");

    const compressed = await compressImage(file);

    const supabaseConfig = getSupabaseConfig();
    if (supabaseConfig) {
      const memory = await uploadToSupabase({ name, caption, compressed });
      return { success: true, mode: "supabase", memory };
    } else {
      const result = await uploadToMockStorage({ name, caption, compressed });
      return { success: result.ok, mode: "mock", memory: result.memory };
    }
  }

  global.MemoryUploadService = {
    compressImage,
    uploadMemory,
    getSupabaseConfig,
  };
})(window);
