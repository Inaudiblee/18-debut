/* ============================================================
   storage.js
   Shared persistence layer used by both the main site
   (js/main.js) and the QR guest-submission page
   (guest.html / js/guest.js), so Memories/Messages/RSVPs are
   read from and written to the exact same place no matter which
   page a guest happens to be looking at.

   Three tiers, tried in order:
     1. window.storage   - Claude's built-in artifact storage,
                            only present inside the Claude
                            preview / Cowork environment.
     2. api/store.php    - the flat-file JSON store that ships
                            with this project, used once the site
                            is deployed to real hosting (see
                            README.txt).
     3. localStorage      - a last-resort per-device fallback so a
                            page never hard-fails even if neither
                            of the above is reachable. Handled by
                            each page's own code (not here), since
                            what to do with a save that didn't
                            reach shared storage is page-specific.

   BACKEND INTEGRATION REQUIREMENTS
   (for anyone replacing api/store.php with a real backend/DB later)
     GET  <endpoint>?action=get&key=<key>
          -> 200, JSON body = the stored value for <key>, or the
             literal `null` if nothing has been stored yet.
     POST <endpoint>  {"action":"set","key":<key>,"value":<any>}
          -> replaces the entire stored value for <key>.
          -> 200 {"ok":true} on success.
     POST <endpoint>  {"action":"append","key":<key>,"value":<item>}
          -> appends a single item to the array stored at <key>
             (creating it as [] first if it doesn't exist yet).
             MUST be atomic server-side (an exclusive file lock, a
             DB transaction, an atomic array-push, etc.) so two
             guests submitting a memory within the same second
             during the event can never overwrite one another.
             This is the endpoint the QR guest-submission flow
             uses (guest.html), since many phones may hit it
             within seconds of each other at a live event.
     Keys currently used by this project: "rsvp:<timestamp>" (one
     per RSVP), "memories" (array), "messages" (array).
   ============================================================ */
(function (global) {
  "use strict";

  const REMOTE_STORE_ENDPOINT = "api/store.php";
  const NETLIFY_STORE_ENDPOINT = "/.netlify/functions/store";

  function getActiveEndpoint() {
    // If running on Netlify or relative environment, try Netlify endpoint first
    return window.location.hostname.includes("netlify.app") ? NETLIFY_STORE_ENDPOINT : REMOTE_STORE_ENDPOINT;
  }

  function hasArtifactStorage() {
    return typeof window.storage !== "undefined" && window.storage && typeof window.storage.get === "function";
  }

  async function storageGet(key, shared) {
    if (hasArtifactStorage()) {
      try {
        const res = await window.storage.get(key, !!shared);
        return res ? JSON.parse(res.value) : null;
      } catch (e) {
        return null;
      }
    }
    try {
      const endpoint = getActiveEndpoint();
      const res = await fetch(endpoint + "?action=get&key=" + encodeURIComponent(key));
      if (!res.ok) return null;
      return await res.json();
    } catch (e) {
      return null;
    }
  }

  async function storageSet(key, value, shared) {
    if (hasArtifactStorage()) {
      try {
        await window.storage.set(key, JSON.stringify(value), !!shared);
        return true;
      } catch (e) {
        return false;
      }
    }
    try {
      const endpoint = getActiveEndpoint();
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "set", key, value })
      });
      if (!res.ok) return false;
      const data = await res.json();
      return !!(data && data.ok);
    } catch (e) {
      return false;
    }
  }

  /* Appends a single item to the array stored at `key`. Prefer this
     over storageGet + storageSet for guest submissions (RSVPs,
     Memories, Messages): api/store.php performs it as one atomic
     file-locked operation on the server, so two guests submitting
     within the same second can't clobber each other. (The
     window.storage tier has no atomic append primitive of its own,
     so it falls back to get-then-set there - fine for light traffic
     inside the Claude preview, but not race-free the way the
     real-hosting path is.) */
  async function storageAppend(key, item, shared) {
    if (hasArtifactStorage()) {
      try {
        const current = await storageGet(key, shared);
        const arr = Array.isArray(current) ? current : [];
        arr.push(item);
        await window.storage.set(key, JSON.stringify(arr), !!shared);
        return true;
      } catch (e) {
        return false;
      }
    }
    try {
      const endpoint = getActiveEndpoint();
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "append", key, value: item })
      });
      if (!res.ok) return false;
      const data = await res.json();
      return !!(data && data.ok);
    } catch (e) {
      return false;
    }
  }

  global.AJStorage = { storageGet, storageSet, storageAppend, hasArtifactStorage };
})(window);
