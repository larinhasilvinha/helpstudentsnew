import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wynbrhwuxmxrtfsjkvqb.supabase.co' 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5bmJyaHd1eG14cnRmc2prdnFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MDgxMjEsImV4cCI6MjA2ODE4NDEyMX0.jTcRhSbDPT6oAav9ATVuv_yoGveFGt41M3o0LZMY9wc' 

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
