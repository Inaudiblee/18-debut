(function () {
  "use strict";

  const candlesGuests = [
    { name: "Ethan Cano", character: "student4", gender: "boy" },
    { name: "Jerry De Guzman", character: "boy4", gender: "boy" },
    { name: "Joey Valente", character: "boy3", gender: "boy" },
    { name: "Adryan Habalo", character: "boy11", gender: "boy" },
    { name: "Gerald Valente", character: "student5", gender: "boy" },
    { name: "Charles Cano", character: "student2", gender: "boy" },
    { name: "Kythim Makayan", character: "boy3", gender: "boy" },
    { name: "Anthony Moreno", character: "boy1", gender: "boy" },
    { name: "Jv Balane", character: "student10", gender: "boy" },
    { name: "Sky Delos Santos", character: "student6", gender: "boy" },
    { name: "Sef Delos Santos", character: "student8", gender: "boy" },
    { name: "Raine Gamboa", character: "girl5", gender: "girl" },
    { name: "Kim Hernandez", character: "boy6", gender: "boy" },
    { name: "Jermaine Bunanig", character: "boy5", gender: "boy" },
    { name: "Miguel Madrozo", character: "boy13", gender: "boy" },
    { name: "Jhun Beto", character: "boy12", gender: "boy" },
    { name: "Kingsley Delos Santos", character: "boy10", gender: "boy" },
    { name: "Eleanor De Guzman", character: "girl9", gender: "girl" }
  ];
  const treasuresGuests = [
    { name: "Leigh Kadowaki", character: "girl1", gender: "girl" },
    { name: "Wendell Surigao", character: "girl8", gender: "girl" },
    { name: "Gwy Neth", character: "girl5", gender: "girl" },
    { name: "Miguel Madrozo", character: "boy10", gender: "boy" },
    { name: "Azy Mendoza", character: "girl6", gender: "girl" },
    { name: "Amiel Punzalan", character: "boy4", gender: "boy" },
    { name: "Jancen Ratonel", character: "student3", gender: "boy" },
    { name: "Jennifer Dorompil", character: "girl9", gender: "girl" },
    { name: "Abegail Baroto", character: "student6", gender: "girl" },
    { name: "Claw Yuree", character: "student7", gender: "girl" },
    { name: "Sabina Balerite", character: "girl1", gender: "girl" },
    { name: "Hannah Martinez", character: "girl2", gender: "girl" },
    { name: "Winlove Mitchao", character: "boy13", gender: "boy" },
    { name: "Rob Galang", character: "boy5", gender: "boy" },
    { name: "Sophia Catimbang", character: "student8", gender: "girl" },
    { name: "Angel Lyka", character: "girl3", gender: "girl" },
    { name: "Kimberly Aleta", character: "student4", gender: "girl" },
    { name: "Angelica Rhain", character: "student1", gender: "girl" }
  ];
  const wishesGuests = [
    { name: "Scarlet Lavine De Guzman", character: "student1", gender: "girl" },
    { name: "Trisha Mae Valente", character: "student3", gender: "girl" },
    { name: "Paris Moreno", character: "student4", gender: "girl" },
    { name: "Jocelyn Ty", character: "girl6", gender: "girl" },
    { name: "Teresita Habalo", character: "girl4", gender: "girl" },
    { name: "Ging Valente", character: "girl8", gender: "girl" },
    { name: "Alfa Espinas", character: "girl4", gender: "girl" },
    { name: "Leigh Kadowaki", character: "girl7", gender: "girl" },
    { name: "Chay Gambao", character: "student8", gender: "girl" },
    { name: "Bethel Martinez", character: "student6", gender: "girl" },
    { name: "Renalyn Reolente", character: "girl2", gender: "girl" },
    { name: "Sally Beto", character: "student7", gender: "girl" },
    { name: "Dra. Sheena Biñas", character: "girl1", gender: "girl" },
    { name: "Gizelle Chan", character: "student5", gender: "girl" },
    { name: "Sophia Torres", character: "student1", gender: "girl" },
    { name: "Yana Bagorio", character: "girl7", gender: "girl" },
    { name: "Samimirah Beto", character: "girl5", gender: "girl" },
    { name: "Angel Lyka", character: "student4", gender: "girl" }
  ];
  const billsGuests = [
    { name: "Carmen Moreno", character: "girl1", gender: "girl" },
    { name: "Lauren Valente", character: "girl7", gender: "girl" },
    { name: "Adryan Habalo", character: "boy2", gender: "boy" },
    { name: "Jerry De Guzman", character: "boy1", gender: "boy" },
    { name: "Joey Valente", character: "boy9", gender: "boy" },
    { name: "Nicolo Salazar", character: "boy8", gender: "boy" },
    { name: "Alfa Espinas", character: "girl6", gender: "girl" },
    { name: "Marilyn Balane", character: "girl3", gender: "girl" },
    { name: "Juvy Abrenica", character: "girl4", gender: "girl" },
    { name: "Sally Beto", character: "girl4", gender: "girl" },
    { name: "Richelle De Los Santos", character: "girl5", gender: "girl" },
    { name: "Florence Deserva", character: "girl2", gender: "girl" },
    { name: "Lovelea Cano", character: "girl9", gender: "girl" },
    { name: "Reyjay Cano", character: "boy6", gender: "boy" },
    { name: "Ellie Valente", character: "girl11", gender: "girl" },
    { name: "Melissa Ty-Francisco", character: "girl8", gender: "girl" },
    { name: "Janice Ty", character: "student6", gender: "girl" },
    { name: "Anne Ty", character: "student5", gender: "girl" }
  ];

  const ROSE_MSGS = [
    "Thank you for the love and light you've brought into my life.",
    "Here's to the laughter we've shared and the memories still to come.",
    "Grateful to have you part of this milestone.",
    "Your friendship means the world to me."
  ];
  const TREASURE_MSGS = [
    "A treasure given with so much love — thank you.",
    "Your gift and your presence mean more than words can say.",
    "Thank you for showering me with love on this special day.",
    "So grateful for your generosity and warmth."
  ];
  const WISH_MSGS = [
    "May every blessing you wished for come true.",
    "Thank you for the prayer you lit for me tonight.",
    "Your wish will stay close to my heart always.",
    "With gratitude for your kindness and prayers."
  ];
  const BILL_MSGS = [
    "Wishing me prosperity — thank you for your generosity.",
    "A toast to the future, thanks to your blessing.",
    "Thank you for helping build my new beginnings.",
    "Grateful for your generosity on this milestone."
  ];

  function buildSet(guests, messages) {
    return guests.map((guest, i) => ({
      number: i + 1,
      name: guest.name,
      character: guest.character,
      gender: guest.gender,
      message: messages[i % messages.length],
      image: ""
    }));
  }
  const candlesData = buildSet(candlesGuests, ROSE_MSGS);
  const treasuresData = buildSet(treasuresGuests, TREASURE_MSGS);
  const wishesData = buildSet(wishesGuests, WISH_MSGS);
  const billsData = buildSet(billsGuests, BILL_MSGS);

  function pixelCharFrames(item, entry) {
    const character = entry.character;
    const folder = entry.gender === "girl" ? "girls" : "boys";
    const base = "pixell/girls-and-boys-by-item/" + folder + "/" + item + "/" + character + "_" + item;
    return {
      a: base + ".png",
      b: base + "_b.png"
    };
  }

  const DESKTOP_ROSE_POSITIONS = [
    { left: 14,   top: 32 }, { left: 27,   top: 32 }, { left: 73,   top: 32 }, { left: 86, top: 32 },
    { left: 13,   top: 56 }, { left: 25.3, top: 56 }, { left: 37.7, top: 56 },
    { left: 50,   top: 56 }, { left: 62.3, top: 56 }, { left: 74.7, top: 56 }, { left: 87, top: 56 },
    { left: 13,   top: 80 }, { left: 25.3, top: 80 }, { left: 37.7, top: 80 },
    { left: 50,   top: 80 }, { left: 62.3, top: 80 }, { left: 74.7, top: 80 }, { left: 87, top: 80 }
  ];

  const DESKTOP_ROSES_POSITIONS_FIXED = [
    { left: 12,   top: 35 }, { left: 25,   top: 35 }, { left: 75,   top: 35 }, { left: 88, top: 35 },
    { left: 13,   top: 61 }, { left: 25.3, top: 61 }, { left: 37.7, top: 61 },
    { left: 50,   top: 61 }, { left: 62.3, top: 61 }, { left: 74.7, top: 61 }, { left: 87, top: 61 },
    { left: 13,   top: 87 }, { left: 25.3, top: 87 }, { left: 37.7, top: 87 },
    { left: 50,   top: 87 }, { left: 62.3, top: 87 }, { left: 74.7, top: 87 }, { left: 87, top: 87 }
  ];

  const MOBILE_SECTIONS = [
    { positions: [
      { left: 22, top: 45 }, { left: 44, top: 42 }, { left: 67, top: 46 },
      { left: 33, top: 83 }, { left: 56, top: 80 }, { left: 78, top: 85 }
    ] },
    { positions: [
      { left: 22, top: 32 }, { left: 44, top: 29 }, { left: 67, top: 33 },
      { left: 33, top: 70 }, { left: 56, top: 67 }, { left: 78, top: 72 }
    ] },
    { positions: [
      { left: 22, top: 16 }, { left: 44, top: 13 }, { left: 67, top: 17 },
      { left: 33, top: 50 }, { left: 56, top: 47 }, { left: 78, top: 52 }
    ] }
  ];

  function buildMobileRosePositions() {
    const bandHeight = 100 / MOBILE_SECTIONS.length;
    const out = [];
    MOBILE_SECTIONS.forEach((section, i) => {
      section.positions.forEach((p) => {
        out.push({ left: p.left, top: i * bandHeight + (p.top / 100) * bandHeight });
      });
    });
    return out;
  }
  const MOBILE_ROSE_POSITIONS = buildMobileRosePositions();
  function isMobileBallroomViewport() {
    return window.matchMedia("(max-width: 700px) and (orientation: portrait)").matches;
  }

  const EVENT_DATE = new Date("2026-09-05T18:00:00+08:00");
  const MAP_QUERY = "Baytown Clubhouse, Habay 1, Bacoor, Cavite";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const noMotion = () => reduceMotion || typeof window.gsap === "undefined";
  const t = (key) => window.AJ_I18N.t(key, window.AJ_LANG || "en");

  function hasArtifactStorage() {
    return window.AJStorage ? window.AJStorage.hasArtifactStorage() : false;
  }
  async function storageGet(key, shared) {
    return window.AJStorage ? window.AJStorage.storageGet(key, shared) : null;
  }
  async function storageSet(key, value, shared) {
    return window.AJStorage ? window.AJStorage.storageSet(key, value, shared) : false;
  }
  async function storageAppend(key, item, shared) {
    return window.AJStorage ? window.AJStorage.storageAppend(key, item, shared) : false;
  }
  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str || "";
    return d.innerHTML;
  }
  document.addEventListener("aj:start", initApp, { once: true });

  function initApp() {
    const chapters = ["invitation", "celebration", "candles", "treasures", "wishes", "bills", "memories", "messages", "goodbye"];
    let currentChapter = "invitation";

    function showChapter(id, opts) {
      opts = opts || {};
      if (!chapters.includes(id)) return;
      currentChapter = id;
      chapters.forEach((c) => {
        const el = document.getElementById("chapter-" + c);
        if (!el) return;
        if (c === id) {
          el.classList.add("is-active");
          el.hidden = false;
          if (!opts.keepScroll) el.scrollTop = 0;
          if (c === "memories" && typeof updateLockedWallHeight === "function") {
            requestAnimationFrame(() => updateLockedWallHeight());
          }
        } else {
          el.classList.remove("is-active");
        }
      });
      $$(".nav-link").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.goto === id);
      });
      if (!reduceMotion && window.gsap) {
        gsap.fromTo("#chapter-" + id, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out" });
      }
    }

    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-goto]");
      if (btn && btn.dataset.goto) {
        showChapter(btn.dataset.goto);
      }
    });

    const navBurger = document.getElementById("navBurger");
    const mobileNav = document.getElementById("mobileNavPanel");
    const mobileNavBackdrop = document.getElementById("mobileNavBackdrop");
    if (navBurger && mobileNav && mobileNavBackdrop) {
      const closeMobileNav = () => {
        navBurger.classList.remove("is-active");
        navBurger.setAttribute("aria-expanded", "false");
        navBurger.setAttribute("data-i18n-aria", "nav.menuAria");
        navBurger.setAttribute("aria-label", t("nav.menuAria"));
        mobileNav.classList.remove("is-open");
        mobileNav.setAttribute("aria-hidden", "true");
        mobileNavBackdrop.classList.remove("is-open");
      };
      const openMobileNav = () => {
        navBurger.classList.add("is-active");
        navBurger.setAttribute("aria-expanded", "true");
        navBurger.setAttribute("data-i18n-aria", "nav.menuCloseAria");
        navBurger.setAttribute("aria-label", t("nav.menuCloseAria"));
        mobileNav.classList.add("is-open");
        mobileNav.setAttribute("aria-hidden", "false");
        mobileNavBackdrop.classList.add("is-open");
      };
      navBurger.addEventListener("click", () => {
        if (mobileNav.classList.contains("is-open")) closeMobileNav();
        else openMobileNav();
      });
      mobileNavBackdrop.addEventListener("click", closeMobileNav);
      mobileNav.addEventListener("click", (e) => {
        if (e.target.closest("[data-goto]")) closeMobileNav();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMobileNav();
      });
    }

    document.getElementById("replayBtn").addEventListener("click", () => {
      showChapter("invitation");
      resetInvitation();
    });

    document.addEventListener("keydown", (e) => {
      if (e.target.closest(".chapter-nav")) {
        const idx = chapters.indexOf(currentChapter);
        if (e.key === "ArrowRight" && idx < chapters.length - 1) showChapter(chapters[idx + 1]);
        if (e.key === "ArrowLeft" && idx > 0) showChapter(chapters[idx - 1]);
      }
    });
    const introStage = $("#introStage");
    const envelopeStage = $("#envelopeStage");
    const letterStage = $("#letterStage");
    const envelopeBtn = $("#envelopeBtn");
    const introContinue = $("#introContinue");
    const introContinueBtn = $("#introContinueBtn");

    function playIntro() {
      letterStage.hidden = true;

      if (noMotion()) {
        introStage.style.opacity = 1;
        introStage.style.visibility = "visible";
        envelopeStage.style.opacity = 0;
        envelopeStage.style.visibility = "hidden";
        letterStage.style.opacity = 0;
        letterStage.style.visibility = "hidden";
        if (introContinue) introContinue.style.opacity = 1;
        $$(".hero-name .line span").forEach((s) => (s.style.transform = "none"));
        $$(".hero-turns, .intro-details").forEach((el) => (el.style.opacity = 1));
        $$(".floral-frame .corner").forEach((c) => (c.style.opacity = 0.65));
        return;
      }

      gsap.set(envelopeStage, { autoAlpha: 0 });
      gsap.set(letterStage, { autoAlpha: 0 });

      const tl = gsap.timeline({ delay: 0.2 });
      tl.set(introStage, { autoAlpha: 1 });
      tl.to(".floral-frame .corner", { opacity: 0.65, duration: 1.1, stagger: 0.12, ease: "power1.out" }, 0);
      tl.to(".hero-name .line span", { y: "0%", duration: 1, stagger: 0.15, ease: "power3.out" }, 0.3);
      tl.to(".hero-turns", { opacity: 1, duration: 0.8, ease: "power1.out" }, 1.1);
      tl.to(".intro-details", { opacity: 1, duration: 0.9, ease: "power1.out" }, 1.7);
      tl.to(introContinue, { opacity: 1, duration: 0.7, ease: "power1.out" }, 2.8);
    }

    function goToEnvelope() {
      if (noMotion()) {
        introStage.style.opacity = 0;
        introStage.style.visibility = "hidden";
        envelopeStage.style.opacity = 1;
        envelopeStage.style.visibility = "visible";
        return;
      }
      gsap.killTweensOf([introStage, envelopeStage, introContinue]);
      gsap.to(introStage, { autoAlpha: 0, duration: 0.5 });
      gsap.to(envelopeStage, { autoAlpha: 1, duration: 0.6 });
    }

    function resetInvitation() {
      if (!noMotion()) {
        gsap.set(".hero-name .line span", { y: "110%" });
        gsap.set(".hero-turns", { opacity: 0 });
        gsap.set(".intro-details", { opacity: 0 });
        gsap.set(introContinue, { opacity: 0 });
      }
      envelopeBtn.classList.remove("is-open");
      letterStage.hidden = true;
      playIntro();
    }
    introContinueBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      goToEnvelope();
    });

    envelopeBtn.addEventListener("click", () => {
      envelopeBtn.classList.add("is-open");
      const openLetter = () => {
        letterStage.hidden = false;
        if (noMotion()) {
          envelopeStage.style.opacity = 0;
          letterStage.style.opacity = 1;
          return;
        }
        gsap.to(envelopeStage, { autoAlpha: 0, duration: 0.5, ease: "power1.inOut" });
        gsap.to(letterStage, { autoAlpha: 1, duration: 0.8, delay: 0.25, ease: "power1.out" });
        gsap.fromTo(".letter-card", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: 0.35, ease: "power3.out" });
      };
      if (noMotion()) {
        openLetter();
      } else {
        setTimeout(openLetter, 750);
      }
    });

    function spawnParticles(x, y, count) {
      const layer = $("#particleLayer");
      if (noMotion()) return;
      for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        const size = 3 + Math.random() * 4;
        p.style.width = size + "px";
        p.style.height = size + "px";
        p.style.left = x + "px";
        p.style.top = y + "px";
        layer.appendChild(p);
        const angle = Math.random() * Math.PI * 2;
        const dist = 60 + Math.random() * 140;
        gsap.to(p, {
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist - 60,
          opacity: 0,
          duration: 1.1 + Math.random() * 0.8,
          ease: "power2.out",
          onComplete: () => p.remove()
        });
      }
    }

    const rsvpContinueBtn = $("#rsvpContinueBtn");
    rsvpContinueBtn.addEventListener("click", () => showChapter("celebration"));

    document.addEventListener("aj:languagechange", () => {
      renderMemories();
      renderMessages();
    });

    $("#mapLink").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(MAP_QUERY);

    function updateCountdown() {
      const now = new Date();
      let diff = EVENT_DATE - now;
      if (diff < 0) diff = 0;
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      const secs = Math.floor((diff % 60000) / 1000);
      $("#cdDays").textContent = String(days).padStart(2, "0");
      $("#cdHours").textContent = String(hours).padStart(2, "0");
      $("#cdMins").textContent = String(mins).padStart(2, "0");
      $("#cdSecs").textContent = String(secs).padStart(2, "0");
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    const detailModal = $("#detailModal");
    function openDetail(kindLabel, item) {
      $("#modalEyebrow").textContent = kindLabel + " " + String(item.number).padStart(2, "0");
      $("#modalName").textContent = item.name;
      $("#modalMsg").textContent = item.message;
      detailModal.hidden = false;
      $("#detailModalClose").focus();
    }
    function closeModal(modal) {
      modal.hidden = true;
    }
    $("#detailModalClose").addEventListener("click", () => closeModal(detailModal));
    detailModal.addEventListener("click", (e) => {
      if (e.target === detailModal) closeModal(detailModal);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (!detailModal.hidden) closeModal(detailModal);
        if (!uploadModal.hidden) closeUploadModal();
        const lb = $("#lightbox");
        if (lb && lb.getAttribute("aria-hidden") === "false") closeLightbox();
      }
    });

    function renderPixelGrid(container, data, kindLabel, itemKey, valueLabel) {
      container.innerHTML = "";
      data.forEach((entry, i) => {
        const frames = pixelCharFrames(itemKey, entry);
        const el = document.createElement("button");
        el.type = "button";
        el.className = "pixel-card";
        el.style.setProperty("--breathe-delay", ((i % 6) * 0.22).toFixed(2) + "s");
        el.setAttribute("aria-label", kindLabel + " " + entry.number + ", " + entry.name);
        el.innerHTML = `
          <span class="pixel-ground" aria-hidden="true"></span>
          <span class="pixel-sprite">
            <img class="frame frame-a" src="${frames.a}" alt="" loading="lazy">
            <img class="frame frame-b" src="${frames.b}" alt="" loading="lazy">
          </span>
          <span class="pixel-num">${String(entry.number).padStart(2, "0")}</span>
          ${valueLabel ? `<span class="pixel-val">${valueLabel}</span>` : ""}
        `;
        el.addEventListener("click", () => {
          if (!reduceMotion && window.gsap) {
            gsap.fromTo(el, { y: 0 }, { y: -10, duration: 0.18, yoyo: true, repeat: 1, ease: "power1.out" });
          }
          openDetail(kindLabel, entry);
        });
        container.appendChild(el);
      });
    }

    function renderBallroomFigures(scene) {
      scene.containerEl.innerHTML = "";
      const isMobile = isMobileBallroomViewport();
      const wrapId = isMobile ? scene.mobileWrapId : scene.desktopWrapId;
      const positions = isMobile ? scene.mobilePositions : scene.desktopPositions;
      const wrapEl = document.getElementById(wrapId);
      if (wrapEl && scene.containerEl.parentElement !== wrapEl) {
        wrapEl.appendChild(scene.containerEl);
      }
      scene.data.forEach((entry, i) => {
        const frames = pixelCharFrames(scene.itemKey, entry);
        const pos = positions[i % positions.length];
        const el = document.createElement("button");
        el.type = "button";
        el.className = "ballroom-figure";
        el.style.left = pos.left + "%";
        el.style.top = pos.top + "%";
        el.style.setProperty("--breathe-delay", ((i % 6) * 0.22).toFixed(2) + "s");
        el.setAttribute("aria-label", scene.kindLabel + " " + entry.number + ", " + entry.name);
        el.innerHTML = `
          <span class="figure-shadow" aria-hidden="true"></span>
          <span class="figure-sprite">
            <img class="frame frame-a" src="${frames.a}" alt="" loading="lazy">
            <img class="frame frame-b" src="${frames.b}" alt="" loading="lazy">
          </span>
          <span class="figure-name">${escapeHtml(entry.name)}</span>
        `;
        el.addEventListener("click", () => {
          const sprite = el.querySelector(".figure-sprite");
          if (!reduceMotion && window.gsap) {
            gsap.fromTo(sprite, { y: 0 }, { y: -10, duration: 0.18, yoyo: true, repeat: 1, ease: "power1.out" });
          }
          openDetail(scene.kindLabel, entry);
        });
        scene.containerEl.appendChild(el);
      });
    }

    const ballroomScenes = [];
    function registerBallroomScene(scene) {
      ballroomScenes.push(scene);
      renderBallroomFigures(scene);
    }

    registerBallroomScene({
      containerEl: $("#candleGrid"),
      desktopWrapId: "ballroomMapwrapDesktop",
      mobileWrapId: "ballroomMapwrapMobile",
      desktopPositions: DESKTOP_ROSES_POSITIONS_FIXED,
      mobilePositions: MOBILE_ROSE_POSITIONS,
      itemKey: "rose",
      kindLabel: "Rose",
      data: candlesData
    });

    registerBallroomScene({
      containerEl: $("#treasureGrid"),
      desktopWrapId: "treasuresMapwrapDesktop",
      mobileWrapId: "treasuresMapwrapMobile",
      desktopPositions: DESKTOP_ROSE_POSITIONS,
      mobilePositions: MOBILE_ROSE_POSITIONS,
      itemKey: "bag",
      kindLabel: "Treasure",
      data: treasuresData
    });

    registerBallroomScene({
      containerEl: $("#wishGrid"),
      desktopWrapId: "wishesMapwrapDesktop",
      mobileWrapId: "wishesMapwrapMobile",
      desktopPositions: DESKTOP_ROSE_POSITIONS,
      mobilePositions: MOBILE_ROSE_POSITIONS,
      itemKey: "candle",
      kindLabel: "Wish",
      data: wishesData
    });

    registerBallroomScene({
      containerEl: $("#billGrid"),
      desktopWrapId: "billsMapwrapDesktop",
      mobileWrapId: "billsMapwrapMobile",
      desktopPositions: DESKTOP_ROSE_POSITIONS,
      mobilePositions: MOBILE_ROSE_POSITIONS,
      itemKey: "cash",
      kindLabel: "Bill",
      data: billsData
    });

    let lastBallroomIsMobile = isMobileBallroomViewport();
    let ballroomResizeTimer = null;
    window.addEventListener("resize", () => {
      clearTimeout(ballroomResizeTimer);
      ballroomResizeTimer = setTimeout(() => {
        const nowMobile = isMobileBallroomViewport();
        if (nowMobile !== lastBallroomIsMobile) {
          lastBallroomIsMobile = nowMobile;
          ballroomScenes.forEach(renderBallroomFigures);
        }
      }, 150);
    });

    const memoryWall = $("#memoryWall");
    let memories = [];
    const MEM_LOCAL_KEY = "aj-memories-local";
    
    function saveMemoriesLocally(arr) {
      try {
        localStorage.setItem(MEM_LOCAL_KEY, JSON.stringify(arr));
      } catch (e) {  }
    }
    function loadMemoriesLocally() {
      try {
        const raw = localStorage.getItem(MEM_LOCAL_KEY);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    }

    const memoryPagination = $("#memoryPagination");
    const memoryPrevBtn = $("#memoryPrevBtn");
    const memoryNextBtn = $("#memoryNextBtn");
    const memoryPageStatus = $("#memoryPageStatus");
    let memoryPage = 1;

    function getMemoryColumns() {
      if (window.matchMedia("(max-width:640px)").matches) return 2;
      if (window.matchMedia("(max-width:900px)").matches) return 4;
      return 5;
    }
    function getMemoryPageSize() {
      if (window.matchMedia("(max-width:640px)").matches) return 6;
      return getMemoryColumns() * 2;
    }
    function getMemoryTotalPages() {
      return Math.max(1, Math.ceil(memories.length / getMemoryPageSize()));
    }
    function clampMemoryPage() {
      const total = getMemoryTotalPages();
      if (memoryPage > total) memoryPage = total;
      if (memoryPage < 1) memoryPage = 1;
    }

    function buildMemoryFigure(m, shouldAnimate) {
      const fig = document.createElement("figure");
      fig.className = "polaroid" + (shouldAnimate ? " polaroid--entering" : "");
      fig.style.setProperty("--rot", (Number(m.id) % 5) - 2 + "deg");
      const captionText = m.caption || m.message || "";
      const img = m.image
        ? `<img class="ph" src="${escapeHtml(m.image)}" alt="${escapeHtml(captionText || "A memory photo")}" onerror="this.onerror=null; this.outerHTML='<div class=&quot;ph-placeholder&quot;>&#10022;</div>';">`
        : `<div class="ph-placeholder">&#10022;</div>`;
      if (m.image) {
        fig.tabIndex = 0;
        fig.setAttribute("role", "button");
        fig.setAttribute("aria-label", (t("lightbox.viewAria") || "View photo from") + " " + m.name);
      }
      fig.innerHTML = `${img}<figcaption><span class="p-name">${escapeHtml(m.name)}</span><span class="p-caption">${escapeHtml(captionText)}</span></figcaption>`;
      return fig;
    }

    const memoryWallWrapper = document.querySelector(".memory-wall-wrapper");
    let currentLockedColumns = 0;
    let maxWallMinHeight = 0;

    function updateLockedWallHeight() {
      if (!memoryWallWrapper || !memoryWall) return;
      const items = memoryWall.querySelectorAll(".polaroid");
      if (items.length === 0) return;

      const cols = getMemoryColumns();

      if (cols !== currentLockedColumns) {
        currentLockedColumns = cols;
        maxWallMinHeight = 0;
        memoryWallWrapper.style.minHeight = "";
      }

      const sampleItem = items[0];
      const itemHeight = sampleItem.getBoundingClientRect().height || sampleItem.offsetHeight;
      if (!itemHeight || itemHeight <= 0) return;

      const gridStyle = window.getComputedStyle(memoryWall);
      const rowGap = parseFloat(gridStyle.rowGap || gridStyle.gap || "16") || 16;
      const padTop = parseFloat(gridStyle.paddingTop || "0") || 0;
      const padBot = parseFloat(gridStyle.paddingBottom || "14") || 14;
      const twoRowHeight = (itemHeight * 2) + rowGap + padTop + padBot + 5;
      const actualHeight = memoryWall.offsetHeight + 5;
      const calculatedHeight = Math.ceil(Math.max(twoRowHeight, actualHeight));

      if (calculatedHeight > maxWallMinHeight) {
        maxWallMinHeight = calculatedHeight;
      }

      memoryWallWrapper.style.minHeight = maxWallMinHeight + "px";
    }

    function paintMemoryPage(highlightNew) {
      memoryWall.innerHTML = "";
      if (memories.length === 0) {
        memoryWall.innerHTML = `<p class="wall-empty">${escapeHtml(t("memories.empty"))}</p>`;
        memoryPagination.hidden = true;
        return;
      }
      clampMemoryPage();
      const pageSize = getMemoryPageSize();
      const total = getMemoryTotalPages();
      const start = (memoryPage - 1) * pageSize;
      const pageItems = memories.slice(start, start + pageSize);
      let enteringFig = null;

      pageItems.forEach((m, i) => {
        const isNew = !!highlightNew && !reduceMotion && (start + i === 0);
        const fig = buildMemoryFigure(m, isNew);
        if (isNew) enteringFig = fig;
        memoryWall.appendChild(fig);
      });

      requestAnimationFrame(() => {
        updateLockedWallHeight();
      });

      if (enteringFig) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => enteringFig.classList.add("is-visible"));
        });
        setTimeout(() => {
          enteringFig.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 120);
      }

      if (total > 1) {
        memoryPagination.hidden = false;
        memoryPrevBtn.hidden = memoryPage <= 1;
        memoryNextBtn.hidden = memoryPage >= total;
        const tpl = t("memories.pageStatus") || "Page {current} of {total}";
        memoryPageStatus.textContent = tpl.replace("{current}", memoryPage).replace("{total}", total);
      } else {
        memoryPagination.hidden = true;
      }
    }

    function renderMemories(opts) {
      opts = opts || {};
      if (opts.gotoFirstPage) {
        memoryPage = 1;
      }
      if (opts.transition && !reduceMotion) {
        memoryWall.classList.add("is-transitioning");
        setTimeout(() => {
          paintMemoryPage(opts.highlightNew);
          requestAnimationFrame(() => memoryWall.classList.remove("is-transitioning"));
        }, 220);
      } else {
        paintMemoryPage(opts.highlightNew);
      }
    }

    memoryPrevBtn.addEventListener("click", () => {
      if (memoryPage <= 1) return;
      memoryPage -= 1;
      renderMemories({ transition: true });
    });
    memoryNextBtn.addEventListener("click", () => {
      if (memoryPage >= getMemoryTotalPages()) return;
      memoryPage += 1;
      renderMemories({ transition: true });
    });

    let lastMemoryColumns = getMemoryColumns();
    let memoryResizeTimer = null;
    window.addEventListener("resize", () => {
      clearTimeout(memoryResizeTimer);
      memoryResizeTimer = setTimeout(() => {
        maxWallMinHeight = 0;
        if (memoryWallWrapper) memoryWallWrapper.style.minHeight = "";
        const cols = getMemoryColumns();
        if (cols !== lastMemoryColumns) {
          lastMemoryColumns = cols;
          renderMemories();
        } else {
          updateLockedWallHeight();
        }
      }, 150);
    });

    async function loadMemories() {
      
      if (window.MemoryUploadService && typeof window.MemoryUploadService.fetchMemories === "function") {
        const remoteData = await window.MemoryUploadService.fetchMemories();
        if (Array.isArray(remoteData)) {
          memories = remoteData;
          renderMemories({ gotoFirstPage: true });
          return;
        }
      }
      const data = await storageGet("memories", true);
      if (Array.isArray(data) && data.length > 0) {
        memories = data;
      } else {
        memories = loadMemoriesLocally();
      }
      renderMemories({ gotoFirstPage: true });
    }
    loadMemories();

    function initMemoryQr() {
      const codeEl = $("#memoryQrCode");
      const linkEl = $("#memoryQrLink");
      if (!codeEl || !linkEl) return;
      const guestUrl = new URL("guest.html", window.location.href).href;
      linkEl.href = guestUrl;
      linkEl.textContent = guestUrl.replace(/^https?:\/\//, "");
      if (typeof QRCode === "function") {
        try {
          new QRCode(codeEl, {
            text: guestUrl,
            width: 104,
            height: 104,
            colorDark: "#26060c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.M
          });
          return;
        } catch (e) {  }
      }
    
      codeEl.hidden = true;
    }
    initMemoryQr();

    const uploadModal = $("#uploadModal");
    const uploadForm = $("#uploadForm");
    const photoPreview = $("#photoPreview");
    const photoPreviewImage = $("#photoPreviewImage");
    let previewUrl = "";

    let isSubmittingMemory = false;
    let uploadTimer = null;

    function clearUploadErrors() {
      $$(".field-error", uploadForm).forEach((el) => (el.textContent = ""));
      $$("input, textarea", uploadForm).forEach((el) => el.removeAttribute("aria-invalid"));
      $("#uploadStatus").textContent = "";
    }
    function resetUploadForm() {
      if (uploadTimer) {
        clearTimeout(uploadTimer);
        uploadTimer = null;
      }
      uploadForm.reset();
      clearUploadErrors();
      isSubmittingMemory = false;
      const fileInput = $("#memImage");
      if (fileInput) fileInput.value = "";
      const submitBtn = uploadForm.querySelector('[type="submit"]');
      if (submitBtn) submitBtn.disabled = false;
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      previewUrl = "";
      photoPreviewImage.removeAttribute("src");
      photoPreview.hidden = true;
    }
    function closeUploadModal() {
      closeModal(uploadModal);
      resetUploadForm();
    }
    function showFieldError(inputId, message) {
      const input = $("#" + inputId);
      input.setAttribute("aria-invalid", "true");
      $("#" + inputId + "Error").textContent = message;
    }

    $("#openMemoryUpload").addEventListener("click", () => {
      resetUploadForm();
      uploadModal.hidden = false;
      $("#memName").focus();
    });
    $("#uploadModalClose").addEventListener("click", closeUploadModal);
    $("#uploadCancel").addEventListener("click", closeUploadModal);
    uploadModal.addEventListener("click", (e) => {
      if (e.target === uploadModal) closeUploadModal();
    });

    function resizeImage(file) {
      return new Promise((resolve, reject) => {
        if (!file) { resolve(""); return; }
        if (!/image\/(jpeg|jpg|png|webp)/i.test(file.type)) {
          reject(new Error("Choose a JPG, PNG, or WebP image."));
          return;
        }
        if (file.size > 8 * 1024 * 1024) {
          reject(new Error("Image is too large (max 8MB)."));
          return;
        }
        const reader = new FileReader();
        reader.onerror = () => reject(new Error("Could not read the image."));
        reader.onload = () => {
          const img = new Image();
          img.onerror = () => reject(new Error("Could not process the image."));
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

    $("#memImage").addEventListener("change", async () => {
      const file = $("#memImage").files[0];
      clearUploadErrors();
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      previewUrl = "";
      photoPreviewImage.removeAttribute("src");
      photoPreview.hidden = true;
      if (!file) return;
      const isImg = (file.type || "").startsWith("image/") || /\.(jpe?g|png|webp|heic|heif|gif|bmp|tiff)$/i.test(file.name || "");
      if (!isImg) {
        showFieldError("memImage", "Please select a valid photo (JPG, PNG, WebP, HEIC/HEIF).");
        return;
      }
      if (file.size > 12 * 1024 * 1024) {
        showFieldError("memImage", "Photo must be 12MB or smaller.");
        return;
      }
      try {
        previewUrl = URL.createObjectURL(file);
        photoPreviewImage.src = previewUrl;
        photoPreview.hidden = false;
      } catch (e) {
        
      }
    });

    uploadForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (isSubmittingMemory) return;

      const status = $("#uploadStatus");
      const submitBtn = uploadForm.querySelector("[type=\"submit\"]");
      const name = $("#memName").value.trim();
      const caption = $("#memCaption").value.trim();
      const fileInput = $("#memImage");
      const file = fileInput ? fileInput.files[0] : null;

      clearUploadErrors();

      let firstErrorId = null;
      if (!name) { showFieldError("memName", "Please enter your name."); firstErrorId = firstErrorId || "memName"; }
      if (!caption) { showFieldError("memCaption", "Please write a description for this memory."); firstErrorId = firstErrorId || "memCaption"; }
      if (!file) { showFieldError("memImage", "Please upload a photo."); firstErrorId = firstErrorId || "memImage"; }
      if (firstErrorId) {
        status.textContent = "Please complete all required fields.";
        if (firstErrorId) $("#" + firstErrorId).focus();
        return;
      }

      isSubmittingMemory = true;
      if (submitBtn) submitBtn.disabled = true;
      status.textContent = t("memories.savingMsg") || "Adding your memory\u2026";

      try {
        if (!window.MemoryUploadService || typeof window.MemoryUploadService.uploadMemory !== "function") {
          throw new Error("Upload service is unavailable.");
        }
        const res = await window.MemoryUploadService.uploadMemory({ name, caption, file });
        if (res && res.success && res.memory) {
          memories = [res.memory].concat(memories);
          renderMemories({ gotoFirstPage: true, transition: true, highlightNew: true });
          status.textContent = t("memories.successMsg") || "Memory added \u2014 thank you!";
          uploadTimer = setTimeout(() => {
            uploadTimer = null;
            closeUploadModal();
          }, 1400);
        } else {
          throw new Error("Upload failed. Please try again.");
        }
      } catch (err) {
        status.textContent = err.message || "Something went wrong. Please try again.";
        isSubmittingMemory = false;
        if (submitBtn) submitBtn.disabled = false;
      }
    });

    const messageWall = $("#messageWall");
    const messagePagination = $("#messagePagination");
    const msgPrevBtn = $("#msgPrevBtn");
    const msgNextBtn = $("#msgNextBtn");
    const msgPageStatus = $("#msgPageStatus");
    let messages = [];
    let messagePage = 1;
    const MSG_PAGE_SIZE = 6; 

    function getMsgTotalPages() {
      return Math.max(1, Math.ceil(messages.length / MSG_PAGE_SIZE));
    }
    function clampMsgPage() {
      const total = getMsgTotalPages();
      if (messagePage > total) messagePage = total;
      if (messagePage < 1) messagePage = 1;
    }

    function renderMessages() {
      messageWall.innerHTML = "";
      if (messages.length === 0) {
        messageWall.innerHTML = `<p class="wall-empty">${escapeHtml(t("messages.empty"))}</p>`;
        messagePagination.hidden = true;
        return;
      }
      clampMsgPage();
      const start = (messagePage - 1) * MSG_PAGE_SIZE;
      const pageItems = messages.slice(start, start + MSG_PAGE_SIZE);

      pageItems.forEach((m) => {
        const card = document.createElement("div");
        card.className = "message-card";
        card.style.setProperty("--mrot", ((m.id % 5) - 2) * 0.4 + "deg");
        card.innerHTML =
          `<p class="m-name">${escapeHtml(m.name)}</p>` +
          `<p class="m-text">${escapeHtml(m.text)}</p>`;
        messageWall.appendChild(card);
      });

      const total = getMsgTotalPages();
      if (total > 1) {
        messagePagination.hidden = false;
        msgPrevBtn.hidden = messagePage <= 1;
        msgNextBtn.hidden = messagePage >= total;
        const tpl = t("messages.pageStatus") || "Page {current} of {total}";
        msgPageStatus.textContent = tpl.replace("{current}", messagePage).replace("{total}", total);
      } else {
        messagePagination.hidden = true;
      }
    }

    msgPrevBtn && msgPrevBtn.addEventListener("click", () => {
      if (messagePage <= 1) return;
      messagePage -= 1;
      renderMessages();
    });
    msgNextBtn && msgNextBtn.addEventListener("click", () => {
      if (messagePage >= getMsgTotalPages()) return;
      messagePage += 1;
      renderMessages();
    });

    async function loadMessages() {
      if (window.SupabaseData) {
        const rows = await window.SupabaseData.selectRows("messages", { order: "created_at.desc" });
        if (Array.isArray(rows)) {
          messages = rows.map((r) => ({ id: r.id, name: r.name, text: r.text }));
          renderMessages();
          return;
        }
      }
      
      const data = await storageGet("messages", true);
      messages = Array.isArray(data) ? data : [];
      renderMessages();
    }
    loadMessages();

    
    const messageModal = $("#messageModal");
    const openMessageModalBtn = $("#openMessageModal");
    const messageModalClose = $("#messageModalClose");
    const messageModalCancel = $("#messageModalCancel");

    function openMessageModal() {
      if (!messageModal) return;
      messageModal.hidden = false;
      requestAnimationFrame(() => messageModal.classList.add("is-open"));
      const inp = $("#msgName");
      if (inp) inp.focus();
    }
    function closeMessageModal() {
      if (!messageModal) return;
      messageModal.classList.remove("is-open");
      setTimeout(() => { messageModal.hidden = true; }, 260);
      const form = $("#messageForm");
      if (form) form.reset();
      const status = $("#msgStatus");
      if (status) status.textContent = "";
    }

    openMessageModalBtn && openMessageModalBtn.addEventListener("click", openMessageModal);
    messageModalClose && messageModalClose.addEventListener("click", closeMessageModal);
    messageModalCancel && messageModalCancel.addEventListener("click", closeMessageModal);
    messageModal && messageModal.addEventListener("click", (e) => {
      if (e.target === messageModal) closeMessageModal();
    });

    $("#messageForm") && $("#messageForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const status = $("#msgStatus");
      const name = $("#msgName").value.trim();
      const text = $("#msgText").value.trim();
      if (!name || !text) {
        status.textContent = "Please fill in both fields.";
        return;
      }
      status.textContent = "Sending\u2026";
      let ok = false;
      try {
        if (window.SupabaseData) {
          const row = await window.SupabaseData.insertRow("messages", { name, text });
          messages.unshift({ id: row.id, name: row.name, text: row.text });
          ok = true;
        }
      } catch (e) {
        ok = false;
      }
      if (!ok) {
        
        
        messages.unshift({ id: Date.now(), name, text });
        await storageSet("messages", messages, true);
      }
      if (messages.length > 100) messages = messages.slice(0, 100);
      messagePage = 1;
      renderMessages();
      status.textContent = ok ? "Thank you for your message." : "Saved for this visit (couldn\u2019t reach shared storage).";
      setTimeout(() => closeMessageModal(), 1400);
    });

    const bgMusic = $("#bgMusic");
    const musicToggle = $("#musicToggle");
    const MUSIC_PREF_KEY = "aj-music-pref";

    function getMusicPref() {
      try {
        return sessionStorage.getItem(MUSIC_PREF_KEY) || localStorage.getItem(MUSIC_PREF_KEY);
      } catch (e) {
        return null;
      }
    }
    function setMusicPref(val) {
      try {
        sessionStorage.setItem(MUSIC_PREF_KEY, val);
        localStorage.setItem(MUSIC_PREF_KEY, val);
      } catch (e) {}
    }
    function setMusicIcon(playing) {
      if (!musicToggle) return;
      musicToggle.classList.toggle("is-muted", !playing);
      musicToggle.setAttribute("data-i18n-aria", playing ? "music.pauseAria" : "music.playAria");
      musicToggle.setAttribute("aria-label", t(playing ? "music.pauseAria" : "music.playAria"));
    }

    function tryPlayMusic() {
      if (!bgMusic || !bgMusic.querySelector("source")) return;
      if (getMusicPref() === "off") {
        setMusicIcon(false);
        return;
      }
      bgMusic.volume = 0.45;
      const p = bgMusic.play();
      if (p && p.catch) {
        p.then(() => {
          setMusicIcon(true);
          removeUserGestureListeners();
        }).catch(() => {
          setMusicIcon(false);
        });
      }
    }

    function onUserGesture() {
      if (getMusicPref() !== "off" && bgMusic && bgMusic.paused) {
        tryPlayMusic();
      }
    }

    function removeUserGestureListeners() {
      document.removeEventListener("click", onUserGesture);
      document.removeEventListener("touchstart", onUserGesture);
      document.removeEventListener("keydown", onUserGesture);
    }

    if (musicToggle && bgMusic) {
      setMusicIcon(false);
      if (getMusicPref() !== "off") {
        tryPlayMusic();
      }
      document.addEventListener("click", onUserGesture);
      document.addEventListener("touchstart", onUserGesture);
      document.addEventListener("keydown", onUserGesture);

      document.addEventListener("aj:start", () => {
        if (getMusicPref() !== "off" && bgMusic.paused) {
          tryPlayMusic();
        }
      });
      musicToggle.addEventListener("click", (e) => {
        e.stopPropagation(); 
        if (bgMusic.paused) {
          bgMusic.play().then(() => {
            setMusicIcon(true);
            setMusicPref("on");
            removeUserGestureListeners();
          }).catch(() => setMusicIcon(false));
        } else {
          bgMusic.pause();
          setMusicIcon(false);
          setMusicPref("off");
          removeUserGestureListeners();
        }
      });
    }

    let currentLightboxPhoto = null;
    let lightboxStatusTimer = null;
    let lastFocusedBeforeLightbox = null;
    let bodyScrollY = 0;

    function safeFileName(name) {
      return (name || "memory").trim().replace(/[^a-z0-9]+/gi, "_").replace(/^_+|_+$/g, "") || "memory";
    }

    function setLightboxStatus(msg) {
      const statusEl = $("#lightbox-status");
      if (!statusEl) return;
      if (lightboxStatusTimer) { clearTimeout(lightboxStatusTimer); lightboxStatusTimer = null; }
      statusEl.textContent = msg || "";
      if (msg) {
        lightboxStatusTimer = setTimeout(() => { statusEl.textContent = ""; }, 6000);
      }
    }

    function lockBodyScroll() {
      bodyScrollY = window.scrollY || window.pageYOffset || 0;
      document.body.classList.add("lightbox-open");
      document.body.style.top = "-" + bodyScrollY + "px";
    }
    function unlockBodyScroll() {
      document.body.classList.remove("lightbox-open");
      document.body.style.top = "";
      window.scrollTo(0, bodyScrollY);
    }

    function openLightbox(m) {
      currentLightboxPhoto = m;
      const lb = $("#lightbox");
      const ph = $("#lightbox-photo");
      const nameEl = $("#lightbox-name");
      const captionEl = $("#lightbox-caption");
      setLightboxStatus("");
      ph.src = m.image;
      ph.alt = m.caption || "A memory photo";
      nameEl.textContent = m.name;
      captionEl.textContent = m.caption || "";
      lastFocusedBeforeLightbox = document.activeElement;
      lb.setAttribute("aria-hidden", "false");
      lockBodyScroll();
      const closeBtn = $(".lightbox-close");
      if (closeBtn) closeBtn.focus();
      if (!noMotion() && window.gsap) {
        gsap.fromTo(lb, {opacity:0}, {opacity:1, duration:.6, ease:"power2.out"});
        gsap.fromTo(".lightbox-content", {scale:0.6, opacity:0}, {scale:1, opacity:1, duration:.6, ease:"power3.out", delay:.1});
      }
    }
    function closeLightbox() {
      const lb = $("#lightbox");
      if (lb.getAttribute("aria-hidden") === "true") return;
      lb.setAttribute("aria-hidden", "true");
      unlockBodyScroll();
      setLightboxStatus("");
      if (!noMotion() && window.gsap) {
        gsap.to(".lightbox-content", {scale:0.8, opacity:0, duration:.4, ease:"power2.in"});
        gsap.to(lb, {opacity:0, duration:.4, ease:"power2.in"});
      }
      currentLightboxPhoto = null;
      if (lastFocusedBeforeLightbox && typeof lastFocusedBeforeLightbox.focus === "function") {
        lastFocusedBeforeLightbox.focus();
      }
      lastFocusedBeforeLightbox = null;
    }

    async function lightboxPhotoAsFile(m) {
      if (!m || !m.image || !/^data:/.test(m.image)) return null;
      try {
        const res = await fetch(m.image);
        const blob = await res.blob();
        const ext = (blob.type && blob.type.split("/")[1]) || "jpg";
        return new File([blob], safeFileName(m.name) + "." + ext, { type: blob.type || "image/jpeg" });
      } catch (e) {
        return null;
      }
    }

    function saveCurrentPhoto() {
      if (!currentLightboxPhoto) return;
      const a = document.createElement("a");
      a.href = currentLightboxPhoto.image;
      a.download = safeFileName(currentLightboxPhoto.name) + ".jpg";
      a.rel = "noopener";
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    async function shareCurrentPhoto() {
      if (!currentLightboxPhoto) return;
      const m = currentLightboxPhoto;
      const shareTitle = "Aliyah Jasmine — Memory";
      const shareText = m.name + (m.caption ? ": " + m.caption : "");
      const file = await lightboxPhotoAsFile(m);
      if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: shareTitle, text: shareText });
          return;
        } catch (err) {
          if (err && err.name === "AbortError") return;
          
        }
      }

      if (navigator.share) {
        try {
          await navigator.share({ title: shareTitle, text: shareText, url: window.location.href });
          return;
        } catch (err) {
          if (err && err.name === "AbortError") return;
          
        }
      }
      saveCurrentPhoto();
      setLightboxStatus(t("lightbox.shareFallbackMsg") || "Photo saved to your device \u2014 open Instagram or Facebook and upload it from your gallery.");
    }

    function initLightbox() {
      const lb = $("#lightbox");
      if (!lb) return;
      const overlay = $(".lightbox-overlay");
      const closeBtn = $(".lightbox-close");
      const saveBtn = $(".save-photo");
      const shareBtn = $(".share-photo");
      if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
      if (overlay) overlay.addEventListener("click", (e) => { if (e.target === overlay) closeLightbox(); });
      if (saveBtn) saveBtn.addEventListener("click", () => {
        saveCurrentPhoto();
        setLightboxStatus(t("lightbox.savedMsg") || "Photo saved to your device.");
      });
      if (shareBtn) shareBtn.addEventListener("click", shareCurrentPhoto);
      const photo = $("#lightbox-photo");
      if (photo) {
        photo.addEventListener("click", (e) => {
          const rect = lb.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const contentRect = $(".lightbox-content").getBoundingClientRect();
          if (x < contentRect.left || x > contentRect.right || y < contentRect.top || y > contentRect.bottom) {
            closeLightbox();
          }
        });
      }
      if (memoryWall) {
        const activatePolaroid = (fig) => {
          const img = fig.querySelector(".ph");
          if (!img || !img.src) return;
          const nameEl = fig.querySelector(".p-name");
          const captionEl = fig.querySelector(".p-caption");
          openLightbox({
            name: nameEl ? nameEl.textContent : "",
            caption: captionEl ? captionEl.textContent : "",
            image: img.src
          });
        };
        memoryWall.addEventListener("click", (e) => {
          const fig = e.target.closest("figure.polaroid");
          if (!fig || !memoryWall.contains(fig)) return;
          activatePolaroid(fig);
        });
        memoryWall.addEventListener("keydown", (e) => {
          if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
          const fig = e.target.closest("figure.polaroid");
          if (!fig || !memoryWall.contains(fig)) return;
          e.preventDefault();
          activatePolaroid(fig);
        });
      }
    }
    const requestedChapter = new URLSearchParams(window.location.search).get("chapter");
    if (requestedChapter && chapters.includes(requestedChapter)) {
      showChapter(requestedChapter);
    } else {
      showChapter("invitation");
      playIntro();

      setTimeout(() => {
        const introStuck = getComputedStyle(introStage).opacity === "0";
        const envelopeStuck = getComputedStyle(envelopeStage).opacity === "0";
        if (introStuck && envelopeStuck) {
          introStage.style.opacity = 1;
          introStage.style.visibility = "visible";
          $$(".hero-name .line span").forEach((s) => (s.style.transform = "none"));
          $$(".hero-turns, .intro-details").forEach((el) => (el.style.opacity = 1));
          $$(".floral-frame .corner").forEach((c) => (c.style.opacity = 0.65));
          if (introContinue) introContinue.style.opacity = 1;
        }
      }, 4000);
    }
    initLightbox();
  }
})();