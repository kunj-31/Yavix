import { neon } from "@neondatabase/serverless";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnv() {
  const envPath = join(__dirname, "../.env.local");
  const raw = readFileSync(envPath, "utf8");
  console.log("raw length", raw.length);
  for (const line of raw.split(/\r?\n/)) {
    if (!line || line.startsWith("#")) continue;
    const i = line.indexOf("=");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    const val = line.slice(i + 1).trim();
    process.env[key] = val;
    console.log("set", key, val.slice(0, 20));
  }
}

loadEnv();

console.log("cwd", process.cwd());
console.log("env path tried", join(__dirname, "../.env.local"));
console.log("has URL", !!process.env.DATABASE_URL);

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL missing");
  process.exit(1);
}

const sql = neon(url);

await sql`
  CREATE TABLE IF NOT EXISTS blog_posts (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'Education',
    read_time TEXT NOT NULL DEFAULT '5 min read',
    author TEXT NOT NULL DEFAULT 'Yavix Team',
    tags TEXT[] NOT NULL DEFAULT '{}',
    emoji TEXT DEFAULT '☀️',
    color TEXT DEFAULT 'from-blue-500 to-primary-600',
    meta_description TEXT,
    meta_keywords TEXT,
    published BOOLEAN NOT NULL DEFAULT true,
    published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )
`;

await sql`CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug)`;
await sql`CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published, published_at DESC)`;

const rows = await sql`SELECT COUNT(*)::int AS c FROM blog_posts`;
console.log("blog_posts ready. Current posts:", rows[0].c);
