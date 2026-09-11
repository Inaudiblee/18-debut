(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const t = (key) => (window.AJ_I18N ? window.AJ_I18N.t(key, window.AJ_LANG || "en") : key);

  const MAX_COLLAGE_PHOTOS = 60; 
  const COLLAGE_CELL = 360; 
  const COLLAGE_MAX_OUTPUT = 2400; 
  const SHARE_BATCH_SIZE = 10; 
  let operationInFlight = false;

  function setStatus(msg) {
    const el = $("#memoryDownloadStatus");
    if (el) el.textContent = msg || "";
  }

  function setButtonsDisabled(disabled) {
    ["#saveAllPhotosBtn", "#downloadCollageBtn"].forEach((sel) => {
      const btn = $(sel);
      if (btn) btn.disabled = disabled;
    });
    const controls = $("#memoryDownloadControls");
    if (controls) {
      controls.querySelectorAll("button").forEach((btn) => {
        btn.disabled = disabled;
      });
    }
  }
  function getControlsContainer() {
    let el = $("#memoryDownloadControls");
    if (!el) {
      el = document.createElement("div");
      el.id = "memoryDownloadControls";
      el.className = "memory-download-controls";
      const status = $("#memoryDownloadStatus");
      if (status && status.parentNode) {
        status.parentNode.insertBefore(el, status.nextSibling);
      } else {
        document.body.appendChild(el);
      }
    }
    return el;
  }

  function clearInlineControls() {
    const el = $("#memoryDownloadControls");
    if (el) el.innerHTML = "";
  }

  function addControlButton(labelKey, fallbackLabel, replacements, onClick) {
    const container = getControlsContainer();
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-ghost small memory-download-btn";
    let label = t(labelKey);
    if (replacements) {
      Object.keys(replacements).forEach((key) => {
        label = label.replace("{" + key + "}", String(replacements[key]));
      });
    }
    btn.textContent = label || fallbackLabel;
    btn.addEventListener(
      "click",
      () => {
        btn.disabled = true;
        onClick();
      },
      { once: true }
    );
    container.appendChild(btn);
    return btn;
  }

  function finishWaiting() {
    operationInFlight = false;
    setButtonsDisabled(false);
  }

  function finishTerminal() {
    operationInFlight = false;
    setButtonsDisabled(false);
    setTimeout(() => setStatus(""), 6000);
  }

  async function getAllMemories() {
    if (window.MemoryUploadService && typeof window.MemoryUploadService.fetchMemories === "function") {
      const remote = await window.MemoryUploadService.fetchMemories();
      if (Array.isArray(remote) && remote.length) return remote;
    }
    if (window.AJStorage && typeof window.AJStorage.storageGet === "function") {
      const local = await window.AJStorage.storageGet("memories", true);
      if (Array.isArray(local)) return local;
    }
    return [];
  }

  function safeFileName(str, fallback) {
    const cleaned = (str || fallback || "photo").replace(/[^a-z0-9_-]+/gi, "_").slice(0, 40);
    return cleaned || fallback || "photo";
  }

  async function fetchAsBlob(url) {
    const res = await fetch(url, { mode: "cors" });
    if (!res.ok) throw new Error("fetch failed: " + res.status);
    return res.blob();
  }

  function extFromUrl(url) {
    const m = /\.(jpe?g|png|webp)$/i.exec(url || "");
    const ext = (m && m[1] && m[1].toLowerCase()) || "jpg";
    return ext === "jpeg" ? "jpg" : ext;
  }
  async function memoryToFile(mem, index) {
    const url = mem.image || mem.image_url;
    if (!url) return null;
    const blob = await fetchAsBlob(url);
    const ext = extFromUrl(url);
    const namePart = safeFileName(mem.name, "guest");
    const fileName = `${String(index + 1).padStart(3, "0")}_${namePart}.${ext}`;
    return new File([blob], fileName, { type: blob.type || "image/jpeg" });
  }

  function isTouchPrimaryDevice() {
    if (typeof window.matchMedia !== "function") return false; 
    return window.matchMedia("(pointer: coarse) and (hover: none)").matches;
  }

  function shouldUseWebShare() {
    return isTouchPrimaryDevice();
  }

  function canShareFiles(files) {
    return (
      typeof navigator.share === "function" &&
      typeof navigator.canShare === "function" &&
      files.length > 0 &&
      navigator.canShare({ files })
    );
  }

  function isCancelledShare(err) {
    if (!err) return false;
    if (err.name === "AbortError") return true;
    const msg = (err.message || "").toLowerCase();
    return msg.includes("abort") || msg.includes("cancel");
  }

  async function saveAllPhotos() {
    if (operationInFlight) return;
    operationInFlight = true;
    clearInlineControls();
    setButtonsDisabled(true);
    setStatus(t("memories.downloadPreparing"));

    try {
      const memories = await getAllMemories();
      if (!memories.length) {
        setStatus(t("memories.downloadEmpty"));
        finishTerminal();
        return;
      }

      const session = {
        memories,
        totalCount: memories.length,
        totalBatches: Math.ceil(memories.length / SHARE_BATCH_SIZE),
        currentBatchIndex: 0,
        processedCount: 0,
        failedCount: 0,
        state: "preparing",
        pendingUnsupportedFiles: null,
        pendingUnsupportedEnd: null,
      };

      await processBatch(session);
    } catch (e) {
      setStatus(t("memories.downloadError"));
      finishTerminal();
    }
  }
  function beginTrackedBatch(session) {
    if (operationInFlight) return;
    operationInFlight = true;
    clearInlineControls();
    setButtonsDisabled(true);
    setStatus(t("memories.downloadPreparing"));
    processBatch(session).catch(() => {
      setStatus(t("memories.downloadError"));
      finishTerminal();
    });
  }
  async function fetchBatchFiles(memories, start, end, onProgress) {
    const files = [];
    let failed = 0;
    for (let i = start; i < end; i++) {
      if (onProgress) onProgress(i + 1, memories.length);
      try {
        const file = await memoryToFile(memories[i], i);
        if (file) files.push(file);
        else failed++;
      } catch (e) {
        failed++;
      }
    }
    return { files, failed };
  }
  async function processBatch(session) {
    session.state = "preparing";
    const start = session.currentBatchIndex * SHARE_BATCH_SIZE;
    const end = Math.min(start + SHARE_BATCH_SIZE, session.totalCount);

    const { files, failed } = await fetchBatchFiles(session.memories, start, end, (cur, total) => {
      setStatus(
        t("memories.downloadFetching")
          .replace("{current}", String(cur))
          .replace("{total}", String(total))
      );
    });
    session.failedCount += failed;

    if (!files.length) {
      session.state = "error";
      setStatus(t("memories.downloadError"));
      addControlButton("memories.downloadRetryBtn", "Try Again", null, () => beginTrackedBatch(session));
      finishWaiting();
      return;
    }

    if (shouldUseWebShare() && canShareFiles(files)) {
      session.state = "sharing";
      setStatus(
        t("memories.downloadShareReady")
          .replace("{current}", String(session.currentBatchIndex + 1))
          .replace("{total}", String(session.totalBatches))
      );

      let shareError = null;
      try {
        await navigator.share({ files, title: "Aliyah Jasmine's Debut — Memories" });
      } catch (err) {
        shareError = err;
      }

      if (shareError) {
        if (isCancelledShare(shareError)) {
          session.state = "cancelled";
          if (session.processedCount > 0) {
            setStatus(
              t("memories.downloadCancelledPartial")
                .replace("{processed}", String(session.processedCount))
                .replace("{total}", String(session.totalCount))
                .replace("{remaining}", String(session.totalCount - session.processedCount))
            );
            addControlButton(
              "memories.downloadContinueBtn",
              "Continue Sharing",
              null,
              () => beginTrackedBatch(session)
            );
            finishWaiting();
          } else {
            setStatus(t("memories.downloadCancelled"));
            finishTerminal();
          }
        } else {
          session.state = "error";
          setStatus(t("memories.downloadError"));
          addControlButton("memories.downloadRetryBtn", "Try Again", null, () => beginTrackedBatch(session));
          finishWaiting();
        }
        return;
      }
      session.processedCount = end;
      session.currentBatchIndex++;

      if (session.currentBatchIndex >= session.totalBatches) {
        session.state = "completed";
        setStatus(
          session.failedCount
            ? t("memories.downloadPartial").replace("{count}", String(session.failedCount))
            : t("memories.downloadShareAllDone")
        );
        finishTerminal();
      } else {
        session.state = "batch_complete";
        setStatus(
          t("memories.downloadBatchComplete")
            .replace("{processed}", String(session.processedCount))
            .replace("{total}", String(session.totalCount))
        );
        const nextSize = Math.min(SHARE_BATCH_SIZE, session.totalCount - session.processedCount);
        addControlButton(
          "memories.downloadShareNextBtn",
          "Share Next Photos",
          { count: nextSize },
          () => beginTrackedBatch(session)
        );
        finishWaiting();
      }
      return;
    }

    if (session.processedCount === 0) {
      session.state = "fallback_available";
      await zipFromPreparedFiles(session.memories, files, session.failedCount);
      session.processedCount = session.totalCount;
      session.state = "completed";
      finishTerminal();
      return;
    }
    session.state = "fallback_available";
    session.pendingUnsupportedFiles = files;
    session.pendingUnsupportedEnd = end;
    setStatus(
      t("memories.downloadUnsupportedRemaining")
        .replace("{processed}", String(session.processedCount))
        .replace("{total}", String(session.totalCount))
        .replace("{remaining}", String(session.totalCount - session.processedCount))
    );
    addControlButton(
      "memories.downloadRemainingZipBtn",
      "Download Remaining Photos as ZIP",
      null,
      () => downloadRemainingAsZip(session)
    );
    finishWaiting();
  }
  async function downloadRemainingAsZip(session) {
    if (operationInFlight) return;
    operationInFlight = true;
    clearInlineControls();
    setButtonsDisabled(true);

    const totalCount = session.totalCount;
    const memories = session.memories;
    const reuseFiles = session.pendingUnsupportedFiles || [];
    const continueFrom =
      session.pendingUnsupportedEnd != null
        ? session.pendingUnsupportedEnd
        : session.currentBatchIndex * SHARE_BATCH_SIZE;
    const alreadyFailed = session.failedCount;

    try {
      if (typeof JSZip === "undefined") {
        throw new Error("JSZip unavailable");
      }

      setStatus(t("memories.downloadZipping"));

      const zip = new JSZip();
      const folder = zip.folder("aliyah-debut-memories-remaining");
      let ok = 0;
      let failed = alreadyFailed;

      reuseFiles.forEach((file) => {
        folder.file(file.name, file);
        ok++;
      });

      for (let i = continueFrom; i < totalCount; i++) {
        setStatus(
          t("memories.downloadFetching")
            .replace("{current}", String(i + 1))
            .replace("{total}", String(totalCount))
        );
        try {
          const file = await memoryToFile(memories[i], i);
          if (file) {
            folder.file(file.name, file);
            ok++;
          } else {
            failed++;
          }
        } catch (e) {
          failed++;
        }
      }

      if (!ok) {
        throw new Error("No remaining photos could be prepared for the ZIP");
      }

      setStatus(t("memories.downloadZipping"));
      const zipBlob = await zip.generateAsync({ type: "blob", compression: "STORE" });
      triggerDownload(zipBlob, "aliyah-debut-memories-remaining.zip");

      session.processedCount = totalCount;
      session.state = "completed";

      setStatus(
        failed
          ? t("memories.downloadPartial").replace("{count}", String(failed))
          : t("memories.downloadDone")
      );
      finishTerminal();
    } catch (error) {
      console.error("Failed to download remaining photos as ZIP:", error);
      session.state = "error";
      setStatus(t("memories.downloadError"));
      addControlButton(
        "memories.downloadRemainingZipBtn",
        "Download Remaining Photos as ZIP",
        null,
        () => downloadRemainingAsZip(session)
      );
      finishWaiting();
    }
  }

  async function zipFromPreparedFiles(memories, preparedFiles, alreadyFailed) {
    if (typeof JSZip === "undefined") {
      setStatus(t("memories.downloadError"));
      return;
    }

    const zip = new JSZip();
    const folder = zip.folder("aliyah-debut-memories");
    let ok = 0;
    let failed = alreadyFailed;

    preparedFiles.forEach((file) => {
      folder.file(file.name, file);
      ok++;
    });

    for (let i = preparedFiles.length > 0 ? SHARE_BATCH_SIZE : 0; i < memories.length; i++) {
      setStatus(
        t("memories.downloadFetching")
          .replace("{current}", String(i + 1))
          .replace("{total}", String(memories.length))
      );
      try {
        const file = await memoryToFile(memories[i], i);
        if (file) {
          folder.file(file.name, file);
          ok++;
        } else {
          failed++;
        }
      } catch (e) {
        failed++;
      }
    }

    if (!ok) {
      setStatus(t("memories.downloadError"));
      return;
    }

    setStatus(t("memories.downloadZipping"));
    const zipBlob = await zip.generateAsync({ type: "blob", compression: "STORE" });
    triggerDownload(zipBlob, "aliyah-debut-memories.zip");

    setStatus(
      failed
        ? t("memories.downloadPartial").replace("{count}", String(failed))
        : t("memories.downloadDone")
    );
  }

  function triggerDownload(blob, fileName) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  }

  function loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
    });
  }

  function drawCoverImage(ctx, img, x, y, w, h) {
    const scale = Math.max(w / img.width, h / img.height);
    const sw = w / scale;
    const sh = h / scale;
    const sx = (img.width - sw) / 2;
    const sy = (img.height - sh) / 2;
    ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
  }

  async function buildCollageBlob(memories, onProgress) {
    const chosen = memories.slice(0, MAX_COLLAGE_PHOTOS);
    const cols = Math.max(1, Math.ceil(Math.sqrt(chosen.length)));
    const rows = Math.max(1, Math.ceil(chosen.length / cols));

    const canvas = document.createElement("canvas");
    canvas.width = cols * COLLAGE_CELL;
    canvas.height = rows * COLLAGE_CELL;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#1a0509";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const gap = 6;
    let placed = 0;
    let failed = 0;

    for (let i = 0; i < chosen.length; i++) {
      const url = chosen[i].image || chosen[i].image_url;
      if (onProgress) onProgress(i + 1, chosen.length);
      if (!url) { failed++; continue; }
      try {
        const blob = await fetchAsBlob(url);
        const objectUrl = URL.createObjectURL(blob);
        try {
          const img = await loadImage(objectUrl);
          const col = i % cols;
          const row = Math.floor(i / cols);
          const x = col * COLLAGE_CELL + gap / 2;
          const y = row * COLLAGE_CELL + gap / 2;
          drawCoverImage(ctx, img, x, y, COLLAGE_CELL - gap, COLLAGE_CELL - gap);
          placed++;
        } finally {
          URL.revokeObjectURL(objectUrl);
        }
      } catch (e) {
        failed++;
      }
    }

    if (!placed) return { blob: null, failed };
    let finalCanvas = canvas;
    const longest = Math.max(canvas.width, canvas.height);
    if (longest > COLLAGE_MAX_OUTPUT) {
      const scale = COLLAGE_MAX_OUTPUT / longest;
      const out = document.createElement("canvas");
      out.width = Math.round(canvas.width * scale);
      out.height = Math.round(canvas.height * scale);
      out.getContext("2d").drawImage(canvas, 0, 0, out.width, out.height);
      finalCanvas = out;
    }

    const blob = await new Promise((resolve) => finalCanvas.toBlob(resolve, "image/jpeg", 0.9));
    return { blob, failed };
  }

  async function downloadCollage() {
    if (operationInFlight) return;
    operationInFlight = true;
    setButtonsDisabled(true);
    setStatus(t("memories.downloadPreparing"));

    try {
      const memories = await getAllMemories();
      if (!memories.length) {
        setStatus(t("memories.downloadEmpty"));
        return;
      }

      setStatus(t("memories.downloadBuildingCollage"));
      const { blob, failed } = await buildCollageBlob(memories, (cur, total) => {
        setStatus(
          t("memories.downloadFetching")
            .replace("{current}", String(cur))
            .replace("{total}", String(total))
        );
      });

      if (!blob) {
        setStatus(t("memories.downloadError"));
        return;
      }

      const fileName = "aliyah-debut-collage.jpg";
      const file = new File([blob], fileName, { type: "image/jpeg" });

      if (shouldUseWebShare() && canShareFiles([file])) {
        setStatus(t("memories.downloadShareReadySingle"));
        try {
          await navigator.share({ files: [file], title: "Aliyah Jasmine's Debut — Memories" });
          setStatus(t("memories.downloadShareAllDone"));
        } catch (shareErr) {
          if (isCancelledShare(shareErr)) {
            setStatus(t("memories.downloadCancelled"));
          } else {
            triggerDownload(blob, fileName);
            setStatus(t("memories.downloadDone"));
          }
        }
      } else {
        triggerDownload(blob, fileName);
        setStatus(
          failed
            ? t("memories.downloadPartial").replace("{count}", String(failed))
            : t("memories.downloadDone")
        );
      }
    } catch (e) {
      setStatus(t("memories.downloadError"));
    } finally {
      setButtonsDisabled(false);
      operationInFlight = false;
      setTimeout(() => setStatus(""), 6000);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const saveAllBtn = $("#saveAllPhotosBtn");
    const collageBtn = $("#downloadCollageBtn");
    if (saveAllBtn) saveAllBtn.addEventListener("click", saveAllPhotos);
    if (collageBtn) collageBtn.addEventListener("click", downloadCollage);
  });
})();
