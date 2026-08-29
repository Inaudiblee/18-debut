/* ============================================================
   guest.js
   Logic for the standalone QR guest-submission page
   (guest.html). Deliberately self-contained (its own DOMContentLoaded
   listener, its own copies of the small helpers it needs) rather than
   reusing js/main.js, since main.js is written for the full
   scroll-snap invitation (language gate, preloader, chapter nav,
   ballroom scenes, etc.) that this page intentionally skips — see
   STEP5_HANDOFF.md for why. It shares the exact same persistence
   layer (js/storage.js -> window.AJStorage) as the main site, so a
   memory submitted here appears on the same Memories wall.
   ============================================================ */
(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const t = (key) => window.AJ_I18N.t(key, window.AJ_LANG || "en");

  /* ---- Language: no language gate on this page (it's meant to be a
     quick, one-tap-from-camera-scan experience) — just apply whatever
     the visitor last chose on the main site, default to English, and
     offer a small EN/FIL toggle in the corner. ---- */
  function setActiveLangButtons(lang) {
    document.querySelectorAll(".guest-lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }
  function initLanguage() {
    const saved = window.AJ_I18N.getSavedLanguage() || "en";
    window.AJ_I18N.applyLanguage(saved);
    setActiveLangButtons(saved);
    document.querySelectorAll(".guest-lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        window.AJ_I18N.applyLanguage(btn.dataset.lang);
        setActiveLangButtons(btn.dataset.lang);
      });
    });
  }

  /* ---- Same resize/compress approach as the main site's memory
     upload modal (js/main.js resizeImage), duplicated here since this
     page doesn't load main.js. Keeps stored photo sizes consistent
     with what's already on the wall. ---- */
  function resizeImage(file) {
    return new Promise((resolve, reject) => {
      if (!file) { resolve(""); return; }
      if (!/image\/(jpeg|jpg|png|webp)/i.test(file.type)) {
        reject(new Error(t("guest.errorPhotoType")));
        return;
      }
      if (file.size > 8 * 1024 * 1024) {
        reject(new Error(t("guest.errorPhotoSize")));
        return;
      }
      const reader = new FileReader();
      reader.onerror = () => reject(new Error(t("guest.errorPhotoType")));
      reader.onload = () => {
        const img = new Image();
        img.onerror = () => reject(new Error(t("guest.errorPhotoType")));
        img.onload = () => {
          const maxDim = 640;
          let w = img.width, h = img.height;
          if (w > h && w > maxDim) { h = h * (maxDim / w); w = maxDim; }
          else if (h > maxDim) { w = w * (maxDim / h); h = maxDim; }
          const canvas = document.createElement("canvas");
          canvas.width = w; canvas.height = h;
          canvas.getContext("2d").drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL("image/jpeg", 0.75));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function initForm() {
    const form = $("#guestForm");
    const thanks = $("#guestThanks");
    const status = $("#guestStatus");
    const photoInput = $("#gPhoto");
    const photoPreview = $("#gPhotoPreview");
    const photoPreviewImage = $("#gPhotoPreviewImage");
    let previewUrl = "";
    let isSubmitting = false;

    function clearErrors() {
      form.querySelectorAll(".field-error").forEach((el) => (el.textContent = ""));
      form.querySelectorAll("input, textarea").forEach((el) => el.removeAttribute("aria-invalid"));
      status.textContent = "";
    }
    function showFieldError(inputId, message) {
      const input = $("#" + inputId);
      input.setAttribute("aria-invalid", "true");
      $("#" + inputId + "Error").textContent = message;
    }
    function resetForm() {
      form.reset();
      clearErrors();
      isSubmitting = false;
      const submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) submitBtn.disabled = false;
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      previewUrl = "";
      photoPreviewImage.removeAttribute("src");
      photoPreview.hidden = true;
    }

    photoInput.addEventListener("change", () => {
      const file = photoInput.files[0];
      clearErrors();
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      previewUrl = "";
      photoPreviewImage.removeAttribute("src");
      photoPreview.hidden = true;
      if (!file) return;
      if (!/image\/(jpeg|jpg|png|webp)/i.test(file.type)) {
        showFieldError("gPhoto", t("guest.errorPhotoType"));
        return;
      }
      if (file.size > 8 * 1024 * 1024) {
        showFieldError("gPhoto", t("guest.errorPhotoSize"));
        return;
      }
      previewUrl = URL.createObjectURL(file);
      photoPreviewImage.src = previewUrl;
      photoPreview.hidden = false;
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      const submitBtn = form.querySelector('[type="submit"]');
      const name = $("#gName").value.trim();
      const message = $("#gMessage").value.trim();
      const file = photoInput.files[0];

      clearErrors();

      let firstErrorId = null;
      if (!name) { showFieldError("gName", t("guest.errorName")); firstErrorId = firstErrorId || "gName"; }
      if (!message) { showFieldError("gMessage", t("guest.errorMessage")); firstErrorId = firstErrorId || "gMessage"; }
      if (!file) { showFieldError("gPhoto", t("guest.errorPhoto")); firstErrorId = firstErrorId || "gPhoto"; }
      if (firstErrorId) {
        status.textContent = t("guest.errorGeneric");
        $("#" + firstErrorId).focus();
        return;
      }

      isSubmitting = true;
      if (submitBtn) submitBtn.disabled = true;
      status.textContent = t("guest.savingMsg");

      try {
        const image = await resizeImage(file);
        const memory = { id: Date.now(), name, caption: message, image };
        const ok = window.AJStorage
          ? await window.AJStorage.storageAppend("memories", memory, true)
          : false;

        if (!ok) {
          /* Shared storage (window.storage / api/store.php) wasn't
             reachable — e.g. this page was opened straight from the
             filesystem, or the host's PHP isn't set up yet (see
             README.txt). The memory is NOT silently dropped-looking:
             tell the guest plainly so they (or the couple) know to
             check the connection, rather than showing a false
             success. No local-only fallback here, unlike the on-site
             modal — this page has no "wall" of its own to show it on. */
          status.textContent = t("guest.savedLocalMsg");
          isSubmitting = false;
          if (submitBtn) submitBtn.disabled = false;
          return;
        }

        form.hidden = true;
        thanks.hidden = false;
      } catch (err) {
        status.textContent = err.message || t("guest.errorGeneric");
        isSubmitting = false;
        if (submitBtn) submitBtn.disabled = false;
      }
    });

    $("#guestAddAnother").addEventListener("click", () => {
      resetForm();
      thanks.hidden = true;
      form.hidden = false;
      $("#gName").focus();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    initForm();
  });
})();
