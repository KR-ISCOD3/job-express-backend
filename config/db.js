import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config();

const connection = createClient(
    process.env.SUPERBASE_URL,
    process.env.SUPERBASE_KEY
)

export default connection;