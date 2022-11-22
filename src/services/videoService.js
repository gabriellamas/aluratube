import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vqgxlnhlgoarjwgqrmsr.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    },
  };
}
