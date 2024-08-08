import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xjsrlgjamddpckeeqlvp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhqc3JsZ2phbWRkcGNrZWVxbHZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwMzk5MTUsImV4cCI6MjAzODYxNTkxNX0.KxlTScALxk22jmfGve_HaYboaAk5BVFSqiBJbIXNELg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
