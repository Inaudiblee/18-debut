/* ============================================================
   netlify/functions/store.js
   Netlify Serverless Function replacement for api/store.php

   Matches the exact API contract used by js/storage.js:
     GET  ?action=get&key=<key>
          -> returns stored JSON value (or null)
     POST {"action":"set","key":<key>,"value":<value>}
          -> replaces the value
     POST {"action":"append","key":<key>,"value":<item>}
          -> appends to array, capped at 1000 items

   For local/Netlify testing before Supabase is connected:
   Uses an in-memory store (persists for the duration of the lambda container)
   backed by response payload mirroring.

   When Supabase is connected, this function can be swapped or bypassed.
   ============================================================ */

// In-memory fallback cache across warm lambda invocations
const store = {};

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

exports.handler = async function (event) {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  const method = event.httpMethod;

  let action = "";
  let key = "";
  let value = null;

  if (method === "GET") {
    const params = event.queryStringParameters || {};
    action = params.action || "";
    key = params.key || "";
  } else if (method === "POST") {
    try {
      const body = JSON.parse(event.body || "{}");
      action = body.action || "";
      key = body.key || "";
      value = body.value !== undefined ? body.value : null;
    } catch (e) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Invalid JSON body" }),
      };
    }
  }

  if (!key) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Missing key parameter" }),
    };
  }

  // Safe key sanitization
  const safeKey = String(key).replace(/[^A-Za-z0-9_\-:]/g, "_");

  // GET ACTION
  if (action === "get") {
    const data = store[safeKey] !== undefined ? store[safeKey] : null;
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data),
    };
  }

  // SET ACTION
  if (action === "set") {
    store[safeKey] = value;
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true }),
    };
  }

  // APPEND ACTION
  if (action === "append") {
    const existing = store[safeKey];
    const arr = Array.isArray(existing) ? existing : [];
    arr.unshift(value); // Newest first
    if (arr.length > 1000) arr.length = 1000;
    store[safeKey] = arr;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true, total: arr.length }),
    };
  }

  return {
    statusCode: 400,
    headers,
    body: JSON.stringify({ error: 'Action must be "get", "set", or "append"' }),
  };
};
