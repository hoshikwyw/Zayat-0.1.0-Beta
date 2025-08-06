import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseApiKey = import.meta.env.VITE_API_KEY;

if (!supabaseUrl || !supabaseApiKey) {
  throw new Error("Supabase environment variables are missing");
}

export const supabase = createClient(supabaseUrl, supabaseApiKey);
