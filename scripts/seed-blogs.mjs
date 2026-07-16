/**
 * Seed static blogs into Neon after setting DATABASE_URL.
 * Usage: node --env-file=.env.local scripts/seed-blogs.mjs
 */
import { neon } from "@neondatabase/serverless";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Read blogs from compiled source via dynamic eval of exported array
// Simpler: parse the TS file's BLOGS export at runtime using a minimal approach
const blogsPath = join(__dirname, "../src/lib/blogs.ts");
const raw = readFileSync(blogsPath, "utf8");
const match = raw.match(/export const BLOGS[^=]*=\s*(\[[\s\S]*\]);/);
if (!match) {
  console.error("Could not parse BLOGS from blogs.ts");
  process.exit(1);
}

// eslint-disable-next-line no-eval
const posts = eval(match[1]);

async function main() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error("Set DATABASE_URL in .env.local first");
    process.exit(1);
  }

  const sql = neon(url);

  for (const post of posts) {
    await sql`
      INSERT INTO blog_posts (slug, title, excerpt, content, category, read_time, author, tags, emoji, color, published)
      VALUES (
        ${post.slug},
        ${post.title},
        ${post.excerpt},
        ${post.content},
        ${post.category},
        ${post.readTime},
        ${post.author},
        ${post.tags},
        ${post.emoji},
        ${post.color},
        true
      )
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        excerpt = EXCLUDED.excerpt,
        content = EXCLUDED.content,
        updated_at = NOW()
    `;
    console.log(`✓ ${post.slug}`);
  }

  console.log(`\nSeeded ${posts.length} blog posts into Neon.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
