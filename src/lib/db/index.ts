import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

/** Neon HTTP driver can fail with channel_binding=require — strip it. */
function normalizeDatabaseUrl(url: string) {
  try {
    const u = new URL(url);
    u.searchParams.delete("channel_binding");
    return u.toString();
  } catch {
    return url.replace(/[&?]channel_binding=[^&]*/g, "");
  }
}

export function getDb() {
  const raw = process.env.DATABASE_URL;
  if (!raw) return null;
  const url = normalizeDatabaseUrl(raw);
  const sql = neon(url);
  return drizzle(sql, { schema });
}
