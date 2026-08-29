/* ============================================================
   netlify/functions/supabase-config.js
   Netlify Serverless Function to expose non-sensitive public
   Supabase credentials (URL and Anon key) to client-side JS
   when deployed with Netlify Supabase Integration.
   ============================================================ */

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Cache-Control": "public, max-age=300",
};

exports.handler = async function (event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  const url =
    process.env.VITE_SUPABASE_URL ||
    process.env.SUPABASE_URL ||
    "";

  const key =
    process.env.VITE_SUPABASE_ANON_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.SUPABASE_KEY ||
    process.env.SUPABASE_PUBLISHABLE_KEY ||
    "";

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({ url, key }),
  };
};
