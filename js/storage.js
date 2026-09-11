(function (global) {
  "use strict";

  const REMOTE_STORE_ENDPOINT = "api/store.php";
  const NETLIFY_STORE_ENDPOINT = "/.netlify/functions/store";

  function getActiveEndpoint() {
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

