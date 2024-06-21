let SUPABASE_URL = 'https://oujobuucjyclhjilvwqm.supabase.co';
let SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91am9idXVjanljbGhqaWx2d3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5OTY2OTAsImV4cCI6MjAzNDU3MjY5MH0.CU2M4aAX4ZOUCWmTGKxYPvCAgRhM0ykrrI2h_WFJZao';

import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const supabase = createClient < Database > (
    SUPABASE_URL,
    SUPABASE_ANON_KEY
)

export { supabase }