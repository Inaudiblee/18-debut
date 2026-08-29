(function () {
  "use strict";

  /* ============================================================
     GUEST LIST
     Real names for each of the 18 Roses, 18 Treasures, 18 Wishes &
     Prayers, and 18 Bills. Edit the arrays below to update names —
     everything else on the site follows automatically.
     boy 7
     ============================================================ */

     
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
    { name: "Kim Hernandez", character: "girl2", gender: "girl" },
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
    { name: "Chay Gambao", character: "boy8", gender: "boy" },
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

  /* Rotating generic messages per chapter — edit freely, or personalize
     any single entry by editing the arrays these feed into below. */
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

  /* ============================================================
     PIXEL CHARACTERS (assigned per guest in the guest objects)
     Each of the 18 tiles in Roses, Treasures, Wishes and Bills is
     illustrated with one of these pixel-art characters, holding
     the item that matches that chapter (rose / bag / candle / cash).
     Each character has two idle frames (A = default, B = "_b" suffix)
     that cross-fade to read as a gentle breathing loop.
     Character is now defined individually per guest, so you can
     assign any character to any name with full control.
     ============================================================ */
  /* Which of pixell/girls-and-boys-by-item/{boys|girls}/ a given
     character's art lives in is now told to us directly by each
     guest's own "gender" field ("boy" or "girl") instead of being
     guessed from the character code. This matters because codes like
     "student5" or "student6" are ambiguous on disk — the SAME
     filename (e.g. student5_rose.png) exists as a completely
     different drawing under both boys/ and girls/, since the art
     pack numbered its boy and girl avatars independently per item
     rather than sharing one character library. Guessing the wrong
     side either shows a broken image (the file doesn't exist on that
     side for that item) or silently swaps a guest's gender between
     chapters. Setting gender explicitly per guest removes the
     guesswork entirely: to change which side a guest's art comes
     from, just change their "gender" field. */
  function pixelCharFrames(item, entry) {
    const character = entry.character;
    const folder = entry.gender === "girl" ? "girls" : "boys";
    const base = "pixell/girls-and-boys-by-item/" + folder + "/" + item + "/" + character + "_" + item;
    return {
      a: base + ".png",
      b: base + "_b.png"
    };
  }

  /* ============================================================
     BALLROOM POSITIONING RULES (read this before touching numbers
     below)

     Priority order when placing a character + its name:
       1. Character must be visible.
       2. Character's name must be fully visible (not clipped).
       3. Character must not collide with another character.
       4. Character/name must not collide with the nav bar or the
          Continue button.
       5. Character/name should stay inside the usable floor area.
       6. Decorative floor roses may be covered.
       7. Decorative floor patterns/gold lines may be covered.
       8. The central rose is preferred visible but may be covered
          if that gives a better character composition.

     A character + its name are ONE visual unit for collision
     purposes. That unit is allowed to sit on top of the painted
     roses, the parquet pattern, and the gold inlay lines — those
     are low-priority background art, not obstacles. Never move a
     character to a worse spot just to keep a decorative rose clear.

     This layout is intentionally NOT a perfectly even grid — a
     ballroom full of people doesn't look like a spreadsheet. Some
     rows/columns are denser than others; what matters is that every
     character/name stays readable and collision-free.
     ============================================================ */

  /* ============================================================
     DESKTOP — 18 BALLROOM FLOOR POSITIONS
     One fixed spot per character (left/top, percent of the scene
     box; "top" is where the bottom of the name label sits, since
     .ballroom-figure is anchored with translate(-50%,-100%) and the
     name renders below the sprite).

     Three depth rows:
       Row 1 (top 32%) — 4 figures, corners only (left <27% or
       >73%). The 34–66% center band is left empty at this row so
       nothing sits under the chapter title horizontally.
       Row 2 (top 56%) and Row 3 (top 80%) — 7 figures each, evenly
       spaced across the full 13–87% floor width, same columns as
       row 2 so the floor reads as tidy diagonals rather than noise.

     Row-to-row gap (24%) and within-row gap (~12.3%) are sized
     against the WORST-CASE figure+label footprint (sprite + name
     tag, computed from the live clamp() values, not a guess) at
     every one of the five tested resolutions:
       1920x1080, 1600x900, 1440x900, 1366x768, 1280x720
     The tightest case is 1280x720, where the footprint is ~21% of
     viewport height — the 24% row gap keeps a real (not
     theoretical) margin there. Row 1's top (32%) also clears the
     fixed nav bar with margin at 1280x720, and Row 3's top (80%)
     clears the Continue button footer with margin. See
     .ballroom-figure / .ballroom-figure .figure-name in style.css —
     their clamp() values now scale with viewport HEIGHT as well as
     width (min(...vw, ...vh)) specifically so short/wide windows
     (1280x720 being the extreme case in our test matrix) shrink the
     figure+label enough to keep this margin, instead of only
     shrinking for narrow windows.
     Character 01 -> position 1, character 02 -> position 2, etc.
     ============================================================ */
  const DESKTOP_ROSE_POSITIONS = [
    { left: 14,   top: 32 }, { left: 27,   top: 32 }, { left: 73,   top: 32 }, { left: 86, top: 32 },
    { left: 13,   top: 56 }, { left: 25.3, top: 56 }, { left: 37.7, top: 56 },
    { left: 50,   top: 56 }, { left: 62.3, top: 56 }, { left: 74.7, top: 56 }, { left: 87, top: 56 },
    { left: 13,   top: 80 }, { left: 25.3, top: 80 }, { left: 37.7, top: 80 },
    { left: 50,   top: 80 }, { left: 62.3, top: 80 }, { left: 74.7, top: 80 }, { left: 87, top: 80 }
  ];

  /* ============================================================
     DESKTOP — 18 ROSES ONLY: CORRECTED FLOOR POSITIONS
     DESKTOP_ROSE_POSITIONS above is left untouched (Treasures /
     Wishes & Prayers / Bills still use it as-is). This separate set
     is used ONLY by the 18 Roses scene, to fix real overlap risk
     that the original 24% row gap left on the table.

     The gap above was sized against a WORST-CASE footprint that
     assumed every guest name renders on a single line. Several
     actual Roses names are long enough to wrap to a second line at
     the .figure-name max-width (118px) — e.g. "Kingsley Delos
     Santos", "Eleanor De Guzman", "Jermaine Bunanig" — which grows
     that figure's footprint from ~21% to ~22.6% of viewport height
     at the tightest tested size (1280x720 / 1366x768), leaving only
     ~1.4% (≈10px) of real margin. That's the collision risk this
     set removes.

     Fix: row-to-row gap increased from 24% to 26% (~4% margin over
     the true two-line worst case at every one of the five tested
     resolutions: 1920x1080, 1600x900, 1440x900, 1366x768, 1280x720),
     and the top row is dropped from 32% to 35% so its sprites still
     clear the fixed nav bar with margin even with a two-line name
     pulling the sprite upward. The bottom row (87%) keeps clear
     margin above the Continue button footer for the same reason.

     Layout stays the same shape as before — same 4/7/7 row split,
     same corners-only top row (kept out of the 30–70% band so
     nothing sits under the chapter title), same evenly spaced
     13–87% floor width for rows 2 and 3 — only the spacing changed.
     Character 01 -> position 1, character 02 -> position 2, etc.
     Decorative floor roses may still be covered; only actual
     collisions (figure/name vs. another figure/name, or vs. the
     nav bar / Continue button) are being fixed here.
     ============================================================ */
  const DESKTOP_ROSES_POSITIONS_FIXED = [
    { left: 12,   top: 35 }, { left: 25,   top: 35 }, { left: 75,   top: 35 }, { left: 88, top: 35 },
    { left: 13,   top: 61 }, { left: 25.3, top: 61 }, { left: 37.7, top: 61 },
    { left: 50,   top: 61 }, { left: 62.3, top: 61 }, { left: 74.7, top: 61 }, { left: 87, top: 61 },
    { left: 13,   top: 87 }, { left: 25.3, top: 87 }, { left: 37.7, top: 87 },
    { left: 50,   top: 87 }, { left: 62.3, top: 87 }, { left: 74.7, top: 87 }, { left: 87, top: 87 }
  ];

  /* ============================================================
     MOBILE — PORTRAIT BALLROOM (three separate map images —
     map-mobile-top.jpg / -middle.jpg / -bot.jpg — stacked edge to
     edge in the HTML/CSS so they read as one continuous tall
     ballroom; see .ballroom-mapwrap-mobile in the
     "(max-width:700px) and (orientation:portrait)" block in
     style.css). The three images share the same aspect ratio and
     are all rendered at full device width, so each occupies exactly
     one third of the combined wrap's height — that's what lets the
     positions below be authored per-section (0–100% of THAT
     section's own artwork) and then converted to a global
     percentage of the full stacked wrap at render time.

     Each section gets 6 figures, placed on the open floor and clear
     of the chandelier/curtains (top section) and the candle table
     (bottom section). Character 01 -> position 1, character 02 ->
     position 2, etc., same convention as DESKTOP_ROSE_POSITIONS.
     ============================================================ */
  /* Row-to-row vertical gap is intentionally generous (~34–38% of a
     section's own height). A figure + a worst-case two-line guest
     name (long names do happen) together run to roughly 28% of a
     section's height on typical phone widths — an earlier, tighter
     gap (~29%) left only a few px of clearance, so a two-line name
     in one row could visually run into the sprite of the row below
     it. The wider gap here keeps every row clear regardless of name
     length. */
  const MOBILE_SECTIONS = [
    // top.jpg: chandelier/curtains occupy roughly the top fifth —
    // figures sit lower, on the diamond rug/open floor.
    { positions: [
      { left: 22, top: 45 }, { left: 44, top: 42 }, { left: 67, top: 46 },
      { left: 33, top: 83 }, { left: 56, top: 80 }, { left: 78, top: 85 }
    ] },
    // middle.jpg: open floor top to bottom — figures kept a little
    // clear of the top/bottom seams so they never crowd the join.
    { positions: [
      { left: 22, top: 32 }, { left: 44, top: 29 }, { left: 67, top: 33 },
      { left: 33, top: 70 }, { left: 56, top: 67 }, { left: 78, top: 72 }
    ] },
    // bot.jpg: floor only runs to roughly the upper 60%; the candle
    // table below that is furniture, not floor, so figures (and
    // their names) stay clear of it. Row 1 sits high enough that its
    // sprite may render a little above this section's own top edge —
    // harmless, since the floor art is continuous across the seam
    // with the middle section above it.
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

  /* Portrait phones/small tablets get the "mobile" position set +
     map wrap. Landscape desktop/tablet always gets "desktop", per
     the requirement that desktop keeps its existing wide composition
     at a comfortable size instead of being shrunk to fit. Shared by
     every ballroom scene on the page (see BALLROOM SCENE SYSTEM
     below) — the breakpoint itself isn't chapter-specific. */
  function isMobileBallroomViewport() {
    return window.matchMedia("(max-width: 700px) and (orientation: portrait)").matches;
  }

  /* Event date/time — Asia/Manila (UTC+8) */
  const EVENT_DATE = new Date("2026-09-05T18:00:00+08:00");
  const MAP_QUERY = "Baytown Clubhouse, Habay 1, Bacoor, Cavite";

  /* ============================================================
     HELPERS
     ============================================================ */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const noMotion = () => reduceMotion || typeof window.gsap === "undefined";
  const t = (key) => window.AJ_I18N.t(key, window.AJ_LANG || "en");

  /* Falls back to api/store.php (see /api folder) whenever window.storage
     isn't available — e.g. once this site is uploaded to real hosting like
     InfinityFree. Both paths use the same get/set(key, shared) shape. */
  /* storageGet / storageSet / storageAppend now live in js/storage.js
     (loaded before this file) so the exact same persistence layer is
     shared with the standalone QR guest-submission page, guest.html.
     Thin wrappers here keep every existing call site in this file
     unchanged. */
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

  /* Everything below runs once the language gate + preloader are done. */
  document.addEventListener("aj:start", initApp, { once: true });

  function initApp() {
    /* ============================================================
       NAVIGATION / CHAPTERS
       ============================================================ */
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

    /* ============================================================
       MOBILE HAMBURGER MENU
       Only opens/closes the dropdown. Actual navigation is handled
       entirely by the existing document-level [data-goto] listener
       above — this reuses it rather than duplicating routing logic.
       ============================================================ */
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

    /* ============================================================
       INTRO CINEMATIC + ENVELOPE + LETTER
       ============================================================ */
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
      resetRsvp();
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

    /* ============================================================
       RSVP — full name required for "Yes", plus an
       "I'm Already On The List" shortcut. Both paths reveal a
       "Continue to the Celebration" button.
       ============================================================ */
    const nameInput = $("#rsvpName");
    const rsvpYesBtn = $("#rsvpYes");
    const rsvpMaybeBtn = $("#rsvpMaybe");
    const rsvpAlreadyBtn = $("#rsvpAlready");
    const rsvpResponse = $("#rsvpResponse");
    const rsvpContinue = $("#rsvpContinue");
    const rsvpContinueBtn = $("#rsvpContinueBtn");

    function refreshYesState() {
      const hasName = nameInput.value.trim().length > 0;
      rsvpYesBtn.disabled = !hasName;
    }
    nameInput.addEventListener("input", refreshYesState);
    refreshYesState();

    function showRsvpResponse(text) {
      rsvpResponse.hidden = false;
      rsvpResponse.textContent = text;
    }
    function revealContinue() {
      rsvpContinue.hidden = false;
    }
    function resetRsvp() {
      nameInput.value = "";
      refreshYesState();
      rsvpResponse.hidden = true;
      rsvpResponse.textContent = "";
      rsvpContinue.hidden = true;
    }

    rsvpYesBtn.addEventListener("click", (e) => {
      const name = nameInput.value.trim();
      if (!name) return;
      const rect = e.target.getBoundingClientRect();
      spawnParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 26);
      showRsvpResponse(t("rsvp.yesResponse").replace("{name}", name));
      revealContinue();
      storageSet("rsvp:" + Date.now(), { name, status: "yes", at: new Date().toISOString() }, true);
    });

    rsvpMaybeBtn.addEventListener("click", () => {
      const name = nameInput.value.trim();
      showRsvpResponse(t("rsvp.maybeResponse").replace("{name}", name || (window.AJ_LANG === "fil" ? "kaibigan" : "friend")));
    });

    rsvpAlreadyBtn.addEventListener("click", () => {
      showRsvpResponse(t("rsvp.alreadyResponse"));
      revealContinue();
    });

    rsvpContinueBtn.addEventListener("click", () => showChapter("celebration"));

    /* re-render RSVP confirmation + walls if the visitor switches language */
    document.addEventListener("aj:languagechange", () => {
      if (!rsvpResponse.hidden && nameInput.value.trim()) {
        showRsvpResponse(t("rsvp.yesResponse").replace("{name}", nameInput.value.trim()));
      }
      renderMemories();
      renderMessages();
    });

    /* ============================================================
       CELEBRATION — MAP LINK + COUNTDOWN
       ============================================================ */
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

    /* ============================================================
       GENERIC DETAIL MODAL (candles / treasures / bills)
       ============================================================ */
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

    /* ============================================================
       18 ROSES / TREASURES / WISHES / BILLS
       Shared pixel-art card grid. Each card shows one breathing
       pixel character (two idle frames cross-fading via CSS) with
       a number tag; clicking opens the name + message modal.
       ============================================================ */
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

    /* ============================================================
       BALLROOM SCENE SYSTEM (generic, reusable)
       Renders a set of characters as free-standing figures placed
       at fixed spots on a ballroom-style map — a full desktop map
       image or a stacked 3-part mobile portrait map — instead of a
       card grid, with idle breathing + tap-to-reveal via the shared
       detail modal above.

       Only 18 Roses uses this today, but the function itself takes
       every bit of Roses-specific content as a "scene" config
       (which container, which map wraps, which position sets, which
       item art, which label, which dataset) rather than assuming
       any of it — so a future chapter (Treasures / Wishes / Bills)
       can register its own scene here later and get the exact same
       rendering, breathing animation, and resize/orientation
       behavior for free, with its own characters and names, without
       this function itself changing. Nothing about 18 Roses'
       appearance or behavior changes by this refactor alone.
       ============================================================ */
    function renderBallroomFigures(scene) {
      scene.containerEl.innerHTML = "";
      const isMobile = isMobileBallroomViewport();
      const wrapId = isMobile ? scene.mobileWrapId : scene.desktopWrapId;
      const positions = isMobile ? scene.mobilePositions : scene.desktopPositions;
      /* The figures container is shared between a scene's desktop and
         mobile map wraps (they're never both visible at once), so it
         gets moved into whichever wrap is active before positioning
         its children — that's what makes its children's percentage
         left/top resolve against the right image box. */
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

    /* Every ballroom scene on the page registers itself here, so a
       single resize/orientation listener can keep all of them (just
       18 Roses for now) in sync with the current desktop/mobile
       breakpoint instead of each scene wiring up its own listener. */
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

    /* 18 Treasures — same ballroom layout system (same map, same
       position/collision-tested spots, same container + responsive
       structure) as 18 Roses above, reusing DESKTOP_ROSE_POSITIONS /
       MOBILE_ROSE_POSITIONS as the shared position set for both
       scenes. Its characters and names are its own: treasuresData
       and the "bag" item art, not anything from candlesData. */
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

    /* 18 Wishes & Prayers — same ballroom layout system (same map,
       same position/collision-tested spots, same container +
       responsive structure) as 18 Roses / 18 Treasures above, reusing
       DESKTOP_ROSE_POSITIONS / MOBILE_ROSE_POSITIONS as the shared
       position set for all three scenes. Its characters and names are
       its own: wishesData and the "candle" item art, not anything
       from candlesData or treasuresData. */
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

    /* 18 Bills — same ballroom layout system (same map, same
       position/collision-tested spots, same container + responsive
       structure) as 18 Roses / 18 Treasures / 18 Wishes & Prayers
       above, reusing DESKTOP_ROSE_POSITIONS / MOBILE_ROSE_POSITIONS
       as the shared position set for all four scenes. Its characters
       and names are its own: billsData and the "cash" item art, not
       anything from candlesData, treasuresData, or wishesData. */
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

    /* Re-render every registered scene if the viewport crosses the
       desktop/mobile ballroom breakpoint (e.g. rotating a phone, or
       resizing a browser window) so the correct map + position set
       is always applied. Skipped when nothing actually changed, so
       this stays cheap on ordinary resize noise. */
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

    /* ============================================================
       MEMORIES - SHARED STORAGE WALL
       ============================================================ */
    const memoryWall = $("#memoryWall");
    let memories = [];

    /* localStorage key used as a third persistence tier (after
       window.storage / api/store.php) so memories survive a page
       refresh on static hosts where neither is available. */
    const MEM_LOCAL_KEY = "aj-memories-local";

    function saveMemoriesLocally(arr) {
      try {
        localStorage.setItem(MEM_LOCAL_KEY, JSON.stringify(arr));
      } catch (e) { /* quota exceeded or unavailable - silent */ }
    }
    function loadMemoriesLocally() {
      try {
        const raw = localStorage.getItem(MEM_LOCAL_KEY);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    }

    /* --- Pagination: 5 cols x ~3 rows desktop, 4x3 tablet, 2x3 mobile
       (matches the .memory-wall grid breakpoints in css/style.css:
       >900px=5 cols, 641-900px=4 cols, <=640px=2 cols). Ordering is
       always the array's own order (i.e. submission order) — pages
       just slice that array, nothing is ever re-sorted. */
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
      /* Reset locked height if switching device breakpoints (e.g. desktop to cellphone) */
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

      /* 2 full rows height for current device size + rowGap + grid padding + 5px extra */
      const twoRowHeight = (itemHeight * 2) + rowGap + padTop + padBot + 5;
      const actualHeight = memoryWall.offsetHeight + 5;
      const calculatedHeight = Math.ceil(Math.max(twoRowHeight, actualHeight));

      /* Store maximum height for current device size so pagination pages never shrink */
      if (calculatedHeight > maxWallMinHeight) {
        maxWallMinHeight = calculatedHeight;
      }

      memoryWallWrapper.style.minHeight = maxWallMinHeight + "px";
    }

    /* Paints whatever memoryPage currently points at. highlightNew
       animates + scrolls the very last memory in (only meaningful
       when that memory falls on the currently-painted page, i.e.
       right after a fresh submission jumps to the last page). */
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
        const isNew = !!highlightNew && !reduceMotion && (start + i === memories.length - 1);
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

    /* opts.gotoLastPage - jump to the page holding the newest memory
       opts.highlightNew  - animate + scroll that newest memory in
       opts.transition    - crossfade instead of swapping instantly
         (used for Previous/Next; skipped for the very first paint,
         language changes, and resize-driven column changes, all of
         which should update in place without a flourish) */
    function renderMemories(opts) {
      opts = opts || {};
      if (opts.gotoLastPage) {
        memoryPage = Math.max(1, Math.ceil(memories.length / getMemoryPageSize()) || 1);
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

    /* Re-paint (no transition, just a clean re-layout) if the
       viewport crosses a column-count breakpoint, e.g. rotating a
       phone or resizing a window, mirroring the debounced-resize
       pattern already used for the ballroom scenes above. */
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
          renderMemories();
          return;
        }
      }
      const data = await storageGet("memories", true);
      if (Array.isArray(data) && data.length > 0) {
        memories = data;
      } else {
        memories = loadMemoriesLocally();
      }
      renderMemories();
    }
    loadMemories();

    /* QR code linking to the standalone guest-submission page
       (guest.html), which uses this exact same shared storage layer
       (js/storage.js) so anything a guest submits by scanning it
       lands on this wall too. */
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
        } catch (e) { /* fall through to link-only fallback below */ }
      }
      /* QR library didn't load (e.g. offline venue wifi blocking the
         CDN) - the plain tappable link still works, just without a
         scannable code, so hide the empty code box rather than show
         a blank square. */
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

    $("#memImage").addEventListener("change", () => {
      const file = $("#memImage").files[0];
      clearUploadErrors();
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      previewUrl = "";
      photoPreviewImage.removeAttribute("src");
      photoPreview.hidden = true;
      if (!file) return;
      if (!/image\/(jpeg|jpg|png|webp)/i.test(file.type)) {
        showFieldError("memImage", "Choose a JPG, PNG, or WebP image.");
        return;
      }
      if (file.size > 8 * 1024 * 1024) {
        showFieldError("memImage", "Photo must be 8MB or smaller.");
        return;
      }
      previewUrl = URL.createObjectURL(file);
      photoPreviewImage.src = previewUrl;
      photoPreview.hidden = false;
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
          memories = memories.concat(res.memory);
          renderMemories({ gotoLastPage: true, transition: true, highlightNew: true });
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

    /* ============================================================
       MESSAGES - SHARED STORAGE GUESTBOOK (with pagination + notepad modal)
       ============================================================ */
    const messageWall = $("#messageWall");
    const messagePagination = $("#messagePagination");
    const msgPrevBtn = $("#msgPrevBtn");
    const msgNextBtn = $("#msgNextBtn");
    const msgPageStatus = $("#msgPageStatus");
    let messages = [];
    let messagePage = 1;
    const MSG_PAGE_SIZE = 6; /* 2 cols x 3 rows */

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
      const data = await storageGet("messages", true);
      messages = Array.isArray(data) ? data : [];
      renderMessages();
    }
    loadMessages();

    /* ---- Message notepad modal ---- */
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
      messages.unshift({ id: Date.now(), name, text });
      if (messages.length > 100) messages = messages.slice(0, 100);
      const ok = await storageSet("messages", messages, true);
      messagePage = 1;
      renderMessages();
      status.textContent = ok ? "Thank you for your message." : "Saved for this visit (couldn\u2019t reach shared storage).";
      setTimeout(() => closeMessageModal(), 1400);
    });


    /* ============================================================
       BACKGROUND MUSIC - default ON, auto-start on user interaction
       ============================================================ */
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
      
      // Attempt play immediately (if browser policy allows)
      if (getMusicPref() !== "off") {
        tryPlayMusic();
      }

      // Attach user gesture listeners so first tap/click anywhere (including language gate) plays music
      document.addEventListener("click", onUserGesture);
      document.addEventListener("touchstart", onUserGesture);
      document.addEventListener("keydown", onUserGesture);

      document.addEventListener("aj:start", () => {
        if (getMusicPref() !== "off" && bgMusic.paused) {
          tryPlayMusic();
        }
      });

      // User manual toggle (override preference)
      musicToggle.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent document gesture trigger collision
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

    /* ============================================================
       LIGHTBOX
       ============================================================ */
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

    /* Converts the stored data-URL into a real File so the native
       share sheet can attach the actual photo (not just a link). */
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
      /* If the browser ignores the download attribute (notably iOS
         Safari with data: URLs) this opens the photo in a new tab
         instead of navigating away from the site, so the guest can
         still long-press / use the share icon to save it. */
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

      /* 1) Best case: share the actual photo file via the native share
         sheet (this is what lets the guest pick Instagram, Facebook,
         Messages, etc. with the real image attached). */
      const file = await lightboxPhotoAsFile(m);
      if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: shareTitle, text: shareText });
          return;
        } catch (err) {
          if (err && err.name === "AbortError") return;
          /* fall through to next strategy */
        }
      }

      /* 2) Web Share API without file support: share a link instead. */
      if (navigator.share) {
        try {
          await navigator.share({ title: shareTitle, text: shareText, url: window.location.href });
          return;
        } catch (err) {
          if (err && err.name === "AbortError") return;
          /* fall through to fallback */
        }
      }

      /* 3) No Web Share support at all: save the photo locally and
         guide the guest to upload it themselves. Never claim to post
         directly to Instagram/Facebook or control the OS share sheet. */
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
      /* Delegate so newly added polaroids work without re-binding */
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
        /* Keyboard activation (Enter / Space) for accessibility */
        memoryWall.addEventListener("keydown", (e) => {
          if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
          const fig = e.target.closest("figure.polaroid");
          if (!fig || !memoryWall.contains(fig)) return;
          e.preventDefault();
          activatePolaroid(fig);
        });
      }
    }

    /* ============================================================
       INIT
       ============================================================ */
    showChapter("invitation");
    playIntro();
    initLightbox();
  }
})();