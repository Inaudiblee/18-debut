(function () {
  "use strict";


  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const t = (key) => window.AJ_I18N.t(key, window.AJ_LANG || "en");

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
    let redirectTimer = null;

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

    photoInput.addEventListener("change", async () => {
      const file = photoInput.files[0];
      clearErrors();
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      previewUrl = "";
      photoPreviewImage.removeAttribute("src");
      photoPreview.hidden = true;
      if (!file) return;
      const isImg = (file.type || "").startsWith("image/") || /\.(jpe?g|png|webp|heic|heif|gif|bmp|tiff)$/i.test(file.name || "");
      if (!isImg) {
        showFieldError("gPhoto", t("guest.errorPhotoType"));
        return;
      }
      if (file.size > 12 * 1024 * 1024) {
        showFieldError("gPhoto", t("guest.errorPhotoSize"));
        return;
      }
      try {
        previewUrl = URL.createObjectURL(file);
        photoPreviewImage.src = previewUrl;
        photoPreview.hidden = false;
      } catch (e) {
      }
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
        if (!window.MemoryUploadService || typeof window.MemoryUploadService.uploadMemory !== "function") {
          throw new Error(t("guest.errorGeneric"));
        }
        const res = await window.MemoryUploadService.uploadMemory({ name, caption: message, file });
        if (res && res.success) {
          form.hidden = true;
          thanks.hidden = false;
          redirectTimer = setTimeout(() => {
            window.location.href = "index.html";
          }, 1800);
        } else {
          throw new Error(t("guest.errorGeneric"));
        }
      } catch (err) {
        status.textContent = err.message || t("guest.errorGeneric");
        isSubmitting = false;
        if (submitBtn) submitBtn.disabled = false;
      }
    });

    $("#guestAddAnother").addEventListener("click", () => {
      if (redirectTimer) {
        clearTimeout(redirectTimer);
        redirectTimer = null;
      }
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
