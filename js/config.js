/* ============================================================
   js/config.js
   Static Environment Configuration

   Exposes Supabase credentials to window when deploying static sites without a bundler.

   Instructions for deployment:
   - For Netlify build with env vars, replace empty strings below with actual keys,
     OR define window.VITE_SUPABASE_URL and window.VITE_SUPABASE_ANON_KEY in your hosting dashboard/script.
   ============================================================ */

window.VITE_SUPABASE_URL = window.VITE_SUPABASE_URL || "";
window.VITE_SUPABASE_ANON_KEY = window.VITE_SUPABASE_ANON_KEY || "";
