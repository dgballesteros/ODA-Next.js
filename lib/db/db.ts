// lib/db/pool.ts
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("Missing DATABASE_URL");

export const pool = new Pool({ connectionString });
