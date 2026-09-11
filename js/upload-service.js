(function (global) {
  "use strict";

  const MAX_DIMENSION = 1600;
  const JPEG_QUALITY = 0.82;
  const MAX_FILE_SIZE_BYTES = 12 * 1024 * 1024;

  let cachedSupabaseConfig = null;

  async function getSupabaseConfig() {
    if (cachedSupabaseConfig) return cachedSupabaseConfig;

    const winUrl = global.VITE_SUPABASE_URL || global.SUPABASE_URL || "";
    const winKey = global.VITE_SUPABASE_ANON_KEY || global.SUPABASE_ANON_KEY || global.SUPABASE_KEY || "";

    if (winUrl && winKey) {
      cachedSupabaseConfig = { url: winUrl.replace(/\/+$/, ""), key: winKey };
      return cachedSupabaseConfig;
    }

    try {
      const res = await fetch("/.netlify/functions/supabase-config");
      if (res.ok) {
        const data = await res.json();
        if (data && data.url && data.key) {
          global.VITE_SUPABASE_URL = data.url;
          global.VITE_SUPABASE_ANON_KEY = data.key;
          cachedSupabaseConfig = { url: data.url.replace(/\/+$/, ""), key: data.key };
          return cachedSupabaseConfig;
        }
      }
    } catch (e) {
    }

    return null;
  }

  function compressImage(file) {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject(new Error("No image file provided."));
        return;
      }
      const looksLikeImage =
        /^image\//i.test(file.type || "") ||
        /\.(jpe?g|png|webp|heic|heif|gif|bmp|tiff?)$/i.test(file.name || "");
      if (!looksLikeImage) {
        reject(new Error("Please select a valid photo (JPG, PNG, WebP, or a phone photo like HEIC)."));
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
          canvas.toBlob(
            (blob) => {
              resolve({
                dataUrl,
                blob: blob || null,
                width: w,
                height: h,
              });
            },
            "image/jpeg",
            JPEG_QUALITY
          );
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  async function uploadToSupabase({ name, caption, compressed }) {
    const config = await getSupabaseConfig();
    if (!config || !config.url || !config.key) {
      throw new Error("Supabase connection configuration is not available.");
    }

    const fileName = `memory_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.jpg`;

    let blob = compressed.blob;
    if (!blob && compressed.dataUrl) {
      const res = await fetch(compressed.dataUrl);
      blob = await res.blob();
    }

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
      throw new Error(errJson.message || errJson.error || "Failed to upload photo to Supabase Storage.");
    }

    const publicUrl = `${config.url}/storage/v1/object/public/memories/${fileName}`;

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
        name: name,
        message: caption,
        image_url: publicUrl,
        created_at: new Date().toISOString(),
      }),
    });

    if (!dbRes.ok) {
      const errJson = await dbRes.json().catch(() => ({}));
      throw new Error(errJson.message || errJson.error || "Failed to save memory record to Supabase Database.");
    }

    const inserted = await dbRes.json();
    const record = Array.isArray(inserted) ? inserted[0] : (inserted || {});

    return {
      id: record.id || Date.now(),
      name: record.name || name,
      caption: record.message || record.caption || caption,
      image: record.image_url || publicUrl,
      created_at: record.created_at || new Date().toISOString(),
    };
  }

  async function fetchMemories() {
    const config = await getSupabaseConfig();
    if (!config || !config.url || !config.key) {
      return null;
    }

    try {
      const dbEndpoint = `${config.url}/rest/v1/memories?select=*&order=created_at.desc`;
      const res = await fetch(dbEndpoint, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${config.key}`,
          "apikey": config.key,
        },
      });

      if (!res.ok) return null;

      const data = await res.json();
      if (!Array.isArray(data)) return [];

      return data.map((item) => ({
        id: item.id,
        name: item.name || "Guest",
        caption: item.message || item.caption || "",
        image: item.image_url || item.image || "",
        created_at: item.created_at,
      }));
    } catch (e) {
      console.error("Failed to fetch memories from Supabase:", e);
      return null;
    }
  }

  async function uploadMemory({ name, caption, file }) {
    if (!name || !name.trim()) throw new Error("Please enter your name.");
    if (!caption || !caption.trim()) throw new Error("Please enter a description or message.");
    if (!file) throw new Error("Please select a photo.");

    const compressed = await compressImage(file);
    const memory = await uploadToSupabase({ name, caption, compressed });

    return { success: true, mode: "supabase", memory };
  }
  async function insertRow(table, row) {
    const config = await getSupabaseConfig();
    if (!config || !config.url || !config.key) {
      throw new Error("Supabase connection configuration is not available.");
    }

    const res = await fetch(`${config.url}/rest/v1/${table}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${config.key}`,
        "apikey": config.key,
        "Content-Type": "application/json",
        "Prefer": "return=representation",
      },
      body: JSON.stringify(row),
    });

    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}));
      throw new Error(errJson.message || errJson.error || `Failed to save to ${table}.`);
    }

    const inserted = await res.json();
    return Array.isArray(inserted) ? inserted[0] : inserted;
  }

  async function selectRows(table, { order } = {}) {
    const config = await getSupabaseConfig();
    if (!config || !config.url || !config.key) return null;

    try {
      let endpoint = `${config.url}/rest/v1/${table}?select=*`;
      if (order) endpoint += `&order=${encodeURIComponent(order)}`;

      const res = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${config.key}`,
          "apikey": config.key,
        },
      });

      if (!res.ok) return null;
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    } catch (e) {
      console.error(`Failed to fetch rows from ${table}:`, e);
      return null;
    }
  }

  global.MemoryUploadService = {
    compressImage,
    uploadMemory,
    fetchMemories,
    getSupabaseConfig,
  };

  global.SupabaseData = {
    insertRow,
    selectRows,
    getSupabaseConfig,
  };
})(window);
