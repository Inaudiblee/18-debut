(function () {
  "use strict";

  const PRELOAD_THRESHOLD = 450;
  const PRELOAD_MIN_VISIBLE = 420; 

  const gate = document.getElementById("langGate");
  const preloader = document.getElementById("preloader");
  const body = document.body;

  function whenReady() {
    const fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
    const pageLoaded = document.readyState === "complete"
      ? Promise.resolve()
      : new Promise((resolve) => window.addEventListener("load", resolve, { once: true }));
    return Promise.all([fontsReady, pageLoaded]);
  }

  function startApp() {
    document.dispatchEvent(new CustomEvent("aj:start"));
  }

  function bootWithPreloader() {
    let shown = false;
    let shownAt = 0;

    const revealTimer = setTimeout(() => {
      shown = true;
      shownAt = Date.now();
      preloader.classList.add("is-visible");
      preloader.setAttribute("aria-hidden", "false");
    }, PRELOAD_THRESHOLD);

    whenReady().then(() => {
      clearTimeout(revealTimer);
      if (!shown) {
        startApp();
        return;
      }
      const elapsed = Date.now() - shownAt;
      const wait = Math.max(0, PRELOAD_MIN_VISIBLE - elapsed);
      setTimeout(() => {
        preloader.classList.add("is-leaving");
        setTimeout(() => {
          preloader.classList.remove("is-visible", "is-leaving");
          preloader.setAttribute("aria-hidden", "true");
          startApp();
        }, 400);
      }, wait);
    });
  }

  function leaveGate() {
    gate.classList.add("is-leaving");
    setTimeout(() => {
      gate.hidden = true;
      body.classList.remove("is-gated");
      bootWithPreloader();
    }, 500);
  }

  function chooseLanguage(lang) {
    window.AJ_I18N.applyLanguage(lang);
    leaveGate();
  }

  document.querySelectorAll("[data-lang-choice]").forEach((btn) => {
    btn.addEventListener("click", () => chooseLanguage(btn.getAttribute("data-lang-choice")));
  });

  /* language switcher in the nav — available on every page, any time */
  document.querySelectorAll(".nav-lang [data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => window.AJ_I18N.applyLanguage(btn.getAttribute("data-lang")));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const saved = window.AJ_I18N.getSavedLanguage();
    if (saved) {
      window.AJ_I18N.applyLanguage(saved);
    }
  });
})();

