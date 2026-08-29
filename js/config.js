/* ============================================================
   js/config.js
   Static Environment Configuration

   Exposes public Supabase credentials to window when deploying static sites without a bundler.
   If running on Netlify with the Netlify Supabase integration,
   /.netlify/functions/supabase-config dynamically supplies these
   if window properties are left empty.
   ============================================================ */

window.VITE_SUPABASE_URL = window.VITE_SUPABASE_URL || "";
window.VITE_SUPABASE_ANON_KEY = window.VITE_SUPABASE_ANON_KEY || "";

