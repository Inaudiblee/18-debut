Aliyah JASMINE — EIGHTEENTH DEBUT
==================================

FOLDER STRUCTURE
-----------------
    aaliyah/
      index.html
      guest.html               <- standalone QR guest-submission page (see below)
      images.jpg              <- the 1000-peso bill photo (18 Bills chapter)
      css/style.css
      css/guest.css            <- styles specific to guest.html
      js/i18n.js
      js/loader.js
      js/main.js
      js/storage.js            <- shared save/load logic used by index.html AND guest.html
      js/guest.js              <- logic for guest.html
      audio/
        README.txt
        background-music.mp3  <- ADD YOUR OWN SONG HERE (see audio/README.txt)
      api/
        store.php             <- saves RSVPs/Memories/Messages on real hosting
        data/                 <- where that saved data lives (auto-created)
      README.txt               <- this file

Keep every file in its place relative to index.html — the paths are
relative, so if you move index.html on its own the styling, scripts,
audio and saving won't work.

WHAT'S IN EACH FILE
--------------------
- index.html      All page markup for all 9 chapters. Look for
                   data-i18n="..." attributes — those are the
                   translatable strings.
- css/style.css    Every visual style, organized in numbered
                   sections (design tokens, navigation, invitation,
                   celebration, candles, treasures, wishes, bills,
                   memories, messages, goodbye, forms, modals,
                   language gate, preloader, responsive, reduced
                   motion).
- js/i18n.js       The English + Filipino dictionary and the
                   function that applies a chosen language to the
                   whole site. Edit the TRANSLATIONS object here to
                   change any wording.
- js/loader.js     The language-gate screen (first thing guests
                   see) and the conditional loading screen (only
                   shows if the site is genuinely slow to be ready).
- js/main.js       All interactivity: chapter navigation, the
                   RSVP flow, countdown, candles/treasures/wishes/
                   bills, background music, and the Memories/
                   Messages walls.
- guest.html       A standalone page guests reach by scanning the QR
                   code shown next to the Memories wall on the main
                   site, so they can share a memory (name/message/
                   photo) from their own phone. Same look, same
                   storage, no scroll-snap chapters — just the form.
- js/storage.js    The save/load logic index.html and guest.html both
                   use, so a memory submitted on either page shows up
                   on the same wall.
- api/store.php    A small PHP script that saves RSVPs, Memories and
                   Messages to plain files once this is hosted on a
                   real server (see "SAVING GUEST INPUT" below).

EDITING GUEST NAMES
--------------------
Open js/main.js and look for the "EDIT YOUR GUEST LIST HERE" comment
near the top. Replace the placeholder names/messages for the 18
Candles, 18 Treasures, 18 Wishes & Prayers, and 18 Bills.

THE 9 CHAPTERS
----------------
01 Invitation · 02 Celebration · 03 18 Candles · 04 18 Treasures ·
05 18 Wishes & Prayers · 06 18 Bills · 07 Memories · 08 Messages ·
09 Goodbye

18 WISHES & PRAYERS (new)
---------------------------
Sits right before 18 Bills. Each of the 18 roses stands for one
person — tap a rose to reveal their wish or prayer for Aliyah
Jasmine, the same way candles and treasures work. Edit the
placeholder text in the wishesData list in js/main.js.

18 BILLS — NOW USES THE REAL PHOTO
------------------------------------
The banknote shown in this chapter is now your actual images.jpg
photo of the 1000-peso bill (framed in css/style.css under
".piso-1000-banknote"), instead of a hand-drawn imitation. To swap
in a different photo, just replace images.jpg with another image of
the same name, or edit the src="images.jpg" reference in index.html.

BACKGROUND MUSIC
------------------
See audio/README.txt — drop a file named background-music.mp3 into
the audio/ folder and the site will offer to play it. A small music
note button sits in the top-right of the navigation bar so guests
can turn it on/off any time (phones usually block music from
starting completely on its own, so that button is the reliable way
in for them).

READABILITY FIXES
--------------------
The short instruction lines above each interactive section (e.g.
"Drag to explore the 18 candles") now render in a bold, higher-
contrast pill so they're easy to read for guests of any age,
including older relatives and children.

MEMORIES WALL — PAGES + QR GUEST SUBMISSION
-----------------------------------------------
The Memories wall shows about 15 photos per page on desktop (5 per
row × 3 rows), 12 on tablet, 6 on mobile, with Previous/Next buttons
that only appear when there's another page to see. New memories
always keep the order they were submitted in.

Next to the "Add Your Memory" button is a QR code guests can scan
with their own phone. It opens guest.html, a simple one-screen form
(name, message, add a photo, submit) that saves straight to the same
wall — handy so guests don't have to queue up at one on-site device.
If guest.html can't reach shared storage (e.g. api/store.php isn't
set up yet on your host, see below), it tells the guest plainly
rather than pretending it worked.

MOBILE / RESPONSIVE
----------------------
The whole site — navigation, buttons, the candle ring, the treasure
and wishes grids, the bill photo and tags, forms, and modals — has
been tuned to resize and reflow cleanly on phone screens, not just
desktop. Buttons stretch to full width and grids drop to fewer
columns as the screen narrows.

SAVING GUEST INPUT (RSVPs / Memories / Messages)
---------------------------------------------------
Inside the Claude preview, guest input is saved automatically using
Claude's built-in storage. On a REAL web host (like InfinityFree)
that isn't available, so this site now also ships with api/store.php
— a tiny PHP script that saves the same data to plain files in
api/data/. The site tries Claude's storage first and automatically
falls back to api/store.php whenever it isn't available, so no
extra setup is needed beyond uploading the files.

DEPLOYING TO INFINITYFREE (FREE HOSTING)
-------------------------------------------
1. Create a free account/hosting plan at infinityfree.net and create
   a new website (any subdomain like yourname.infinityfreeapp.com
   works fine).
2. Open their "Online File Manager" (or connect with an FTP client
   using the credentials they give you).
3. Go into the htdocs folder — this is your site's root.
4. Upload every file and folder from this aaliyah folder into
   htdocs, keeping the same structure (index.html directly inside
   htdocs, with css/, js/, audio/ and api/ as folders next to it).
5. InfinityFree runs PHP automatically, so api/store.php works with
   no extra setup. If RSVPs/Memories/Messages don't seem to save,
   open the File Manager, right-click api/data, choose Permissions/
   CHMOD, and set it to 755 (or 777 if 755 doesn't work — some free
   hosts require it).
6. Visit your site's address — it's now live and guest input will
   be saved on the server.

Optional: InfinityFree also gives you a free MySQL database if you'd
rather store entries there instead of flat files — that would mean
rewriting api/store.php to use MySQL, which isn't included here but
is a natural next step if your guest list grows very large.
