(function (global) {
  "use strict";

  const STORAGE_KEY = "aj-debut-lang";

  const TRANSLATIONS = {
    en: {
      "nav.invitation": "Invitation",
      "nav.celebration": "Celebration",
      "nav.candles": "18 Roses",
      "nav.treasures": "18 Treasures",
      "nav.wishes": "18 Wishes & Prayers",
      "nav.bills": "18 Bills",
      "nav.memories": "Memories",
      "nav.messages": "Messages",
      "nav.goodbye": "Goodbye",
      "nav.menuAria": "Open navigation menu",
      "nav.menuCloseAria": "Close navigation menu",

      "hero.turns": "turns",
      "hero.eighteen": "eighteen",
      "invite.line": "Join us to celebrate as Aliyah Jasmine turns eighteen.",
      "invite.time": "Six o'clock in the evening",
      "invite.venue": "Baytown Clubhouse — Habay 1, Bacoor, Cavite",
      "invite.cordial": "You are cordially invited",
      "invite.tapHint": "Open the Invitation",

      "letter.kicker": "Dear Guest,",
      "letter.body1": "Some birthdays are simply celebrated. Others mark the beginning of something new — a little more poise, a little more grace, and the woman she is becoming.",
      "letter.body2": "On the fifth of September, we open our doors and our hearts as Aliyah Jasmine turns eighteen. There will be candlelight, laughter, treasured company, and a great deal of joy.",
      "letter.body3": "We would be so glad if you could be part of it.",
      "letter.thankyou": "Thank you for the invitation.",

      "rsvp.continueBtn": "Continue to the Celebration →",

      "celebration.eyebrow": "02 — The Celebration",
      "celebration.title": "Details of the Evening",
      "detail.dateLabel": "Date",
      "detail.dateValue": "September 5, 2026",
      "detail.timeLabel": "Time",
      "detail.timeValue": "Six in the Evening",
      "detail.locationLabel": "Location",
      "detail.locationValue": "Baytown Clubhouse\nHabay 1, Bacoor, Cavite",
      "detail.viewLocation": "View Location",

      "countdown.label": "The Celebration Begins In",
      "countdown.days": "Days",
      "countdown.hours": "Hours",
      "countdown.mins": "Minutes",
      "countdown.secs": "Seconds",

      "dresscode.eyebrow": "Dress Code",
      "dresscode.sub": "Semi-Formal Attire",
      "dresscode.color1Title": "Baby Pink",
      "dresscode.color1Desc": "Blush, rose, or soft pink tones",
      "dresscode.color2Title": "Beige",
      "dresscode.color2Desc": "Cream, sand, or warm neutral tones",
      "celebration.continueBtn": "Continue to 18 Roses →",
      "candles.continueBtn": "Continue to 18 Treasures →",
      "treasures.continueBtn": "Continue to 18 Wishes & Prayers →",
      "wishes.continueBtn": "Continue to 18 Bills →",
      "bills.continueBtn": "Continue to Memories →",
      "memories.continueBtn": "Continue to Messages →",
      "messages.continueBtn": "Continue to Goodbye →",

      "gift.eyebrow": "A Gift From The Heart",
      "gift.sub": "Your presence is the most treasured gift of all. If you wish to bring something more, here are a few ideas.",
      "gift.bags": "Bags",
      "gift.dresses": "Dresses",
      "gift.makeup": "Makeup",
      "gift.necklaces": "Necklaces",
      "gift.lipstick": "Lipstick\n(Nude Shades)",
      "gift.note": "Monetary gifts are also received with gratitude and love.",

      "candles.eyebrow": "18 Roses",
      "candles.title": "A Rose For Every Year",
      "candles.hint": "Tap a rose to read who it's for.",
      "candles.captionName": "Tap or click a rose",
      "candles.captionMsg": "to read who it's for.",

      "treasures.eyebrow": "04 — Eighteen Treasures",
      "treasures.title": "Gifts From Loved Ones",
      "treasures.hint": "Tap a treasure to see who it's from.",

      "wishes.eyebrow": "05 — Eighteen Wishes & Prayers",
      "wishes.title": "A Candle For Each Blessing",
      "wishes.hint": "Tap a candle to read a wish or prayer.",

      "bills.eyebrow": "06 — Eighteen Bills",
      "bills.title": "A Toast to Prosperity",
      "bills.hint": "Tap a bill to reveal a name.",

      "memories.eyebrow": "07 — Memories",
      "memories.title": "A Wall of Moments",
      "memories.taglineA": "Collect Moments,",
      "memories.taglineB": "Not Things",
      "memories.addBtn": "Add Your Memory",
      "memories.loading": "Gathering memories…",
      "memories.empty": "Be the first to add a memory.",
      "memories.modalTitle": "Add Your Memory",
      "memories.nameLabel": "Your Name",
      "memories.captionLabel": "Description",
      "memories.photoLabel": "Photo",
      "memories.uploadBtn": "Upload Photo",
      "memories.cancelBtn": "Cancel",
      "memories.submitBtn": "Add Memory",
      "memories.photoNote": "Required — under 8MB, JPG, PNG, or WebP.",
      "memories.savingMsg": "Adding your memory…",
      "memories.successMsg": "Memory added — thank you!",
      "memories.savedLocalMsg": "Saved for this visit (couldn't reach shared storage).",
      "memories.prevBtn": "← Previous",
      "memories.nextBtn": "Next →",
      "memories.pageStatus": "Page {current} of {total}",
      "memories.qrLabel": "Scan to share from your phone",
      "memories.saveAllBtn": "Save All Photos",
      "memories.downloadCollageBtn": "Save Collage",
      "memories.downloadPreparing": "Preparing photos…",
      "memories.downloadFetching": "Downloading photo {current} of {total}…",
      "memories.downloadZipping": "Packing everything into a ZIP…",
      "memories.downloadBuildingCollage": "Building your collage…",
      "memories.downloadShareReady": "Choose where to save batch {current} of {total}…",
      "memories.downloadShareReadySingle": "Choose where to save your collage…",
      "memories.downloadShareAllDone": "Sent to save — finish up in the app you chose.",
      "memories.downloadCancelled": "Cancelled — nothing else was sent.",
      "memories.downloadNotSupported": "Your browser can't share photos directly — try again for a ZIP download instead.",
      "memories.downloadDone": "Done — check your downloads.",
      "memories.downloadEmpty": "No memories to download yet.",
      "memories.downloadError": "Something went wrong. Please try again.",
      "memories.downloadPartial": "Done — {count} photo(s) couldn't be included.",
      "memories.downloadBatchComplete": "{processed} of {total} photos processed.",
      "memories.downloadShareNextBtn": "Share Next {count} Photos",
      "memories.downloadUnsupportedRemaining": "{processed} of {total} photos processed. The remaining {remaining} photos can't be shared by this browser.",
      "memories.downloadRemainingZipBtn": "Download Remaining Photos as ZIP",
      "memories.downloadCancelledPartial": "Sharing cancelled. {processed} of {total} photos were processed. {remaining} photos remain.",
      "memories.downloadContinueBtn": "Continue Sharing",
      "memories.downloadRetryBtn": "Try Again",

      "guest.eyebrow": "A Wall of Moments",
      "guest.title": "Share a memory with us",
      "guest.nameLabel": "Your Name",
      "guest.messageLabel": "Your Message",
      "guest.messagePlaceholder": "Write something about this memory…",
      "guest.photoLabel": "Photo",
      "guest.addPhotoBtn": "📷 Add Photo",
      "guest.photoNote": "Under 8MB — JPG, PNG, or WebP.",
      "guest.submitBtn": "Submit Memory",
      "guest.savingMsg": "Sharing your memory…",
      "guest.successMsg": "Memory shared — thank you!",
      "guest.savedLocalMsg": "Saved on this device, but we couldn't reach the shared photo wall — please let the family know so they can check the connection.",
      "guest.errorName": "Please enter your name.",
      "guest.errorMessage": "Please write a short message.",
      "guest.errorPhoto": "Please add a photo.",
      "guest.errorPhotoType": "Choose a JPG, PNG, or WebP image.",
      "guest.errorPhotoSize": "Photo must be 8MB or smaller.",
      "guest.errorGeneric": "Please complete all fields.",
      "guest.thankYouTitle": "Thank you for sharing a memory with us",
      "guest.addAnotherBtn": "Share another memory",

      "messages.eyebrow": "08 — Messages",
      "messages.title": "A Message For Aliyah",
      "messages.nameLabel": "Your Name",
      "messages.textLabel": "Your Message",
      "messages.submitBtn": "Leave A Message",
      "messages.loading": "Gathering messages…",
      "messages.empty": "Be the first to leave a message.",
      "messages.prevBtn": "← Previous",
      "messages.nextBtn": "Next →",
      "messages.pageStatus": "Page {current} of {total}",

      "goodbye.thanks": "Thank You For Celebrating With Us",
      "goodbye.msg": "Thank you for being part of this special chapter. Every candle, every treasure, every wish, every message — it all means more than words can hold.",
      "goodbye.replayBtn": "Replay the Invitation",

      "langgate.mark": "Aliyah Jasmine",
      "langgate.title": "Choose Your Language",
      "langgate.sub": "Piliin ang iyong wika para sa paanyaya",
      "langgate.english": "English",
      "langgate.filipino": "Filipino",
      "langgate.foot": "You can change this anytime from the top menu.",

      "preloader.label": "Preparing your invitation…",

      "music.playAria": "Play background music",
      "music.pauseAria": "Pause background music",

      "lightbox.viewAria": "View photo from",
      "lightbox.saveAria": "Save Photo",
      "lightbox.saveBtn": "Save Photo",
      "lightbox.shareAria": "Share",
      "lightbox.shareBtn": "Share",
      "lightbox.closeAria": "Close lightbox",
      "lightbox.closeBtn": "✕",
      "lightbox.savedMsg": "Photo saved to your device.",
      "lightbox.shareFallbackMsg": "Photo saved to your device — open Instagram or Facebook and upload it from your gallery."
    },

    fil: {
      "nav.invitation": "Paanyaya",
      "nav.celebration": "Pagdiriwang",
      "nav.candles": "18 Rosas",
      "nav.treasures": "18 Kayamanan",
      "nav.wishes": "18 Hiling at Panalangin",
      "nav.bills": "18 Piso",
      "nav.memories": "Alaala",
      "nav.messages": "Mensahe",
      "nav.goodbye": "Paalam",
      "nav.menuAria": "Buksan ang menu",
      "nav.menuCloseAria": "Isara ang menu",

      "hero.turns": "sumasapit sa",
      "hero.eighteen": "kabataang labingwalo",
      "invite.line": "Sumama sa amin sa pagdiriwang habang si Aliyah Jasmine ay sumasapit sa kanyang ika-labingwalong kaarawan.",
      "invite.time": "Alas-sais ng gabi",
      "invite.venue": "Baytown Clubhouse — Habay 1, Bacoor, Cavite",
      "invite.cordial": "Kayo ay lubos na inaanyayahan",
      "invite.tapHint": "Buksan ang Paanyaya",

      "letter.kicker": "Mahal naming Panauhin,",
      "letter.body1": "May mga kaarawang ipinagdiriwang lamang. May mga kaarawan namang tanda ng simula ng bago — mas may dignidad, mas may kagandahang-loob, at ang babaeng kanyang nararapat maging.",
      "letter.body2": "Sa ikalimang araw ng Setyembre, bubuksan namin ang aming pinto at puso habang si Aliyah Jasmine ay sumasapit sa labingwalo. Magkakaroon ng ilaw ng kandila, tawanan, mahalagang kasama, at kasiyahang walang hanggan.",
      "letter.body3": "Ikagagalak naming malaman na kayo ay makakasama.",
      "letter.thankyou": "Salamat sa imbitasyon.",

      "rsvp.continueBtn": "Magpatuloy sa Pagdiriwang →",

      "celebration.eyebrow": "02 — Ang Pagdiriwang",
      "celebration.title": "Mga Detalye ng Gabi",
      "detail.dateLabel": "Petsa",
      "detail.dateValue": "Setyembre 5, 2026",
      "detail.timeLabel": "Oras",
      "detail.timeValue": "Alas-sais ng Gabi",
      "detail.locationLabel": "Lugar",
      "detail.locationValue": "Baytown Clubhouse\nHabay 1, Bacoor, Cavite",
      "detail.viewLocation": "Tingnan ang Lokasyon",

      "countdown.label": "Magsisimula ang Pagdiriwang Sa Loob Ng",
      "countdown.days": "Araw",
      "countdown.hours": "Oras",
      "countdown.mins": "Minuto",
      "countdown.secs": "Segundo",

      "dresscode.eyebrow": "Kasuotan",
      "dresscode.sub": "Semi-Pormal na Kasuotan",
      "dresscode.color1Title": "Baby Pink",
      "dresscode.color1Desc": "Mapusyaw na rosas o malambot na kulay rosas",
      "dresscode.color2Title": "Beige",
      "dresscode.color2Desc": "Cream, buhangin, o mainit na neutral na kulay",
      "celebration.continueBtn": "Magpatuloy sa 18 Rosas →",
      "candles.continueBtn": "Magpatuloy sa 18 Kayamanan →",
      "treasures.continueBtn": "Magpatuloy sa 18 Hiling at Panalangin →",
      "wishes.continueBtn": "Magpatuloy sa 18 Piso →",
      "bills.continueBtn": "Magpatuloy sa Mga Alaala →",
      "memories.continueBtn": "Magpatuloy sa Mga Mensahe →",
      "messages.continueBtn": "Magpatuloy →",

      "gift.eyebrow": "Isang Regalo Mula Sa Puso",
      "gift.sub": "Ang inyong presensya ang pinakamahalagang regalo. Kung nais ninyong magdala pa ng iba, narito ang ilang mungkahi.",
      "gift.bags": "Bag",
      "gift.dresses": "Damit",
      "gift.makeup": "Makeup",
      "gift.necklaces": "Kwintas",
      "gift.lipstick": "Lipstick\n(Nude Shades)",
      "gift.note": "Tinatanggap din nang may pasasalamat at pagmamahal.",

      "candles.eyebrow": "18 Rosas",
      "candles.title": "Isang Rosas Para Sa Bawat Taon",
      "candles.hint": "Pindutin ang isang rosas upang malaman kung para kanino ito.",
      "candles.captionName": "Pindutin o i-click ang isang rosas",
      "candles.captionMsg": "upang malaman kung para kanino ito.",

      "treasures.eyebrow": "04 — Labingwalong Kayamanan",
      "treasures.title": "Mga Regalo Mula Sa Mga Mahal Sa Buhay",
      "treasures.hint": "Pindutin ang isang kayamanan upang malaman kung galing kanino ito.",

      "wishes.eyebrow": "05 — Labingwalong Hiling at Panalangin",
      "wishes.title": "Isang Kandila Para Sa Bawat Pagpapala",
      "wishes.hint": "Pindutin ang isang kandila upang mabasa ang hiling o panalangin.",

      "bills.eyebrow": "06 — Labingwalong Piso",
      "bills.title": "Isang Toast Para Sa Kasaganaan",
      "bills.hint": "Pindutin ang isang piso upang ipakita ang pangalan.",

      "memories.eyebrow": "07 — Mga Alaala",
      "memories.title": "Isang Pader ng Mga Sandali",
      "memories.taglineA": "Mangolekta ng Sandali,",
      "memories.taglineB": "Hindi ng Bagay",
      "memories.addBtn": "Idagdag ang Iyong Alaala",
      "memories.loading": "Kinokolekta ang mga alaala…",
      "memories.empty": "Maging una upang magdagdag ng alaala.",
      "memories.modalTitle": "Idagdag ang Iyong Alaala",
      "memories.nameLabel": "Iyong Pangalan",
      "memories.captionLabel": "Paglalarawan",
      "memories.photoLabel": "Larawan",
      "memories.uploadBtn": "Mag-upload ng Larawan",
      "memories.cancelBtn": "Kanselahin",
      "memories.submitBtn": "Idagdag ang Alaala",
      "memories.photoNote": "Kailangan — mas mababa sa 8MB, JPG, PNG, o WebP.",
      "memories.savingMsg": "Idinaragdag ang iyong alaala…",
      "memories.successMsg": "Alaala ay naidagdag — salamat!",
      "memories.savedLocalMsg": "Nai-save para sa pagbisitang ito (hindi maabot ang shared storage).",
      "memories.prevBtn": "← Nakaraan",
      "memories.nextBtn": "Susunod →",
      "memories.pageStatus": "Pahina {current} ng {total}",
      "memories.qrLabel": "I-scan upang magbahagi mula sa iyong telepono",
      "memories.saveAllBtn": "I-save Lahat ng Larawan",
      "memories.downloadCollageBtn": "I-save ang Collage",
      "memories.downloadPreparing": "Inihahanda ang mga larawan…",
      "memories.downloadFetching": "Dina-download ang larawan {current} ng {total}…",
      "memories.downloadZipping": "Isinasama sa isang ZIP file…",
      "memories.downloadBuildingCollage": "Ginagawa ang iyong collage…",
      "memories.downloadShareReady": "Piliin kung saan i-save ang batch {current} ng {total}…",
      "memories.downloadShareReadySingle": "Piliin kung saan i-save ang collage…",
      "memories.downloadShareAllDone": "Naipadala na para i-save — tapusin sa app na iyong pinili.",
      "memories.downloadCancelled": "Kinansela — wala nang ibang naipadala.",
      "memories.downloadNotSupported": "Hindi direktang ma-share ng iyong browser ang mga larawan — subukan muli para sa ZIP download.",
      "memories.downloadDone": "Tapos na — tingnan ang iyong downloads.",
      "memories.downloadEmpty": "Wala pang mga alaala na pwedeng i-download.",
      "memories.downloadError": "May naganap na error. Subukan muli.",
      "memories.downloadPartial": "Tapos na — {count} larawan ang hindi nasama.",
      "memories.downloadBatchComplete": "{processed} sa {total} na larawan ang naiproseso.",
      "memories.downloadShareNextBtn": "I-share ang Susunod na {count} Larawan",
      "memories.downloadUnsupportedRemaining": "{processed} sa {total} na larawan ang naiproseso. Ang natitirang {remaining} na larawan ay hindi ma-share ng browser na ito.",
      "memories.downloadRemainingZipBtn": "I-download ang Natitirang Larawan bilang ZIP",
      "memories.downloadCancelledPartial": "Kinansela ang pag-share. {processed} sa {total} na larawan ang naiproseso. {remaining} na larawan ang natitira.",
      "memories.downloadContinueBtn": "Ipagpatuloy ang Pag-share",
      "memories.downloadRetryBtn": "Subukan Muli",
      "guest.eyebrow": "Isang Pader ng Mga Sandali",
      "guest.title": "Magbahagi ng alaala sa amin",
      "guest.nameLabel": "Iyong Pangalan",
      "guest.messageLabel": "Iyong Mensahe",
      "guest.messagePlaceholder": "Isulat ang tungkol sa alaalang ito…",
      "guest.photoLabel": "Larawan",
      "guest.addPhotoBtn": "📷 Magdagdag ng Larawan",
      "guest.photoNote": "Mas mababa sa 8MB — JPG, PNG, o WebP.",
      "guest.submitBtn": "Ipadala ang Alaala",
      "guest.savingMsg": "Ibinabahagi ang iyong alaala…",
      "guest.successMsg": "Naibahagi ang alaala — salamat!",
      "guest.savedLocalMsg": "Nai-save sa device na ito, ngunit hindi naabot ang shared na pader ng larawan — paki-abisuhan ang pamilya upang masuri ang koneksyon.",
      "guest.errorName": "Pakilagay ang iyong pangalan.",
      "guest.errorMessage": "Pakisulat ang isang maikling mensahe.",
      "guest.errorPhoto": "Pakidagdag ang isang larawan.",
      "guest.errorPhotoType": "Pumili ng JPG, PNG, o WebP na larawan.",
      "guest.errorPhotoSize": "Ang larawan ay dapat 8MB o mas mababa.",
      "guest.errorGeneric": "Pakikumpleto ang lahat ng patlang.",
      "guest.thankYouTitle": "Salamat sa pagbabahagi ng alaala sa amin",
      "guest.addAnotherBtn": "Magbahagi ng isa pang alaala",

      "messages.eyebrow": "08 — Mga Mensahe",
      "messages.title": "Isang Mensahe Para Kay Aliyah",
      "messages.nameLabel": "Iyong Pangalan",
      "messages.textLabel": "Iyong Mensahe",
      "messages.submitBtn": "Mag-iwan Ng Mensahe",
      "messages.loading": "Kinokolekta ang mga mensahe…",
      "messages.empty": "Maging una upang mag-iwan ng mensahe.",
      "messages.prevBtn": "← Nakaraan",
      "messages.nextBtn": "Susunod →",
      "messages.pageStatus": "Pahina {current} ng {total}",

      "goodbye.thanks": "Salamat Sa Pakikiisa Sa Amin",
      "goodbye.msg": "Salamat sa pagiging bahagi ng natatanging kabanatang ito. Bawat kandila, bawat kayamanan, bawat hiling, bawat mensahe — higit pa ito sa masasabi ng mga salita.",
      "goodbye.replayBtn": "I-replay ang Paanyaya",

      "langgate.mark": "Aliyah Jasmine",
      "langgate.title": "Piliin ang Wika",
      "langgate.sub": "Choose your language for the invitation",
      "langgate.english": "English",
      "langgate.filipino": "Filipino",
      "langgate.foot": "Maaari mo itong palitan anumang oras mula sa itaas na menu.",

      "preloader.label": "Inihahanda ang inyong paanyaya…",

      "music.playAria": "I-play ang background music",
      "music.pauseAria": "I-pause ang background music",

      "lightbox.viewAria": "Tingnan ang larawan mula kay",
      "lightbox.saveAria": "I-save ang larawan",
      "lightbox.saveBtn": "I-save ang Larawan",
      "lightbox.shareAria": "I-share",
      "lightbox.shareBtn": "I-share",
      "lightbox.closeAria": "Isara ang lightbox",
      "lightbox.closeBtn": "✕",
      "lightbox.savedMsg": "Na-save ang larawan sa iyong device.",
      "lightbox.shareFallbackMsg": "Na-save ang larawan sa iyong device — buksan ang Instagram o Facebook at i-upload mula sa iyong gallery."
    }
  };

  function getSavedLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function saveLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
    }
  }

  function t(key, lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : (TRANSLATIONS.en[key] || key);
  }

  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = "en";
    document.documentElement.lang = lang === "fil" ? "fil" : "en";
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(key, lang);
      el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", t(key, lang));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      el.setAttribute("aria-label", t(key, lang));
    });

    document.querySelectorAll(".nav-lang button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    saveLanguage(lang);
    global.AJ_LANG = lang;
    document.dispatchEvent(new CustomEvent("aj:languagechange", { detail: { lang } }));
  }

  global.AJ_I18N = {
    t,
    applyLanguage,
    getSavedLanguage,
    TRANSLATIONS
  };
})(window);
