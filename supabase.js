import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = 'https://tmpwyafejmhyrjcfyhtn.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtcHd5YWZlam1oeXJqY2Z5aHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NDgyODgsImV4cCI6MjA1NTUyNDI4OH0.2lkdOU4v8rrZXDhTx8b4Wdlf0R4JjPOhXLUdCgACUVM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
