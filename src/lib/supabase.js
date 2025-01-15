import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vvcztvpiouemnmujjjma.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2Y3p0dnBpb3VlbW5tdWpqam1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2OTkwMDEsImV4cCI6MjA1MjI3NTAwMX0.O0vrTDx0mwUReoOyMuZJfLbkIjtpRQBvrAijwFRk06U";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
