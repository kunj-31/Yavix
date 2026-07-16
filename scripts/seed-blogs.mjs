import { neon } from "@neondatabase/serverless";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnv() {
  const envPath = join(__dirname, "../.env.local");
  const raw = readFileSync(envPath, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    if (!line || line.startsWith("#")) continue;
    const i = line.indexOf("=");
    if (i === -1) continue;
    process.env[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
}

loadEnv();

const posts = [
  {
    slug: "why-solar-cleaning-matters",
    category: "Education",
    readTime: "4 min read",
    author: "Yavix Team",
    title: "Why Solar Cleaning Matters More Than You Think",
    excerpt:
      "Most solar owners never clean their panels — and they're losing up to 30% of their energy output every single day. Here's the science behind why cleaning is critical for every solar installation in Gujarat.",
    color: "from-blue-500 to-primary-600",
    emoji: "☀️",
    tags: ["Cleaning", "Efficiency", "Basics"],
    content: `<p>Investing in solar panels is a major financial decision designed to lower your electricity bills and help the environment. However, many solar owners in Ahmedabad and across Gujarat make a critical mistake: they assume rain or wind is enough to keep their panels clean. In reality, neglecting solar panel cleaning can cause you to lose up to <strong>30% of your energy output</strong>.</p>
      <h2>The Science of Solar Panel Dirt (Soiling)</h2>
      <p>Solar panels function by allowing light particles (photons) to hit silicon cells, which excites electrons and generates electrical current. If dust, pollen, bird droppings, or industrial soot forms a layer over the glass, it blocks sunlight from reaching the photovoltaic cells.</p>
      <h2>How Often Should You Clean Your Panels?</h2>
      <p>For most residential sites in Ahmedabad, we recommend a professional cleaning schedule of <strong>at least twice a month</strong>.</p>`,
  },
  {
    slug: "solar-efficiency-tips",
    category: "Tips & Tricks",
    readTime: "5 min read",
    author: "Yavix Team",
    title: "10 Solar Efficiency Tips to Maximize Your Panel Output",
    excerpt:
      "Beyond cleaning, there are practical steps every solar owner can take to squeeze maximum efficiency from their system — panel orientation, monitoring tools, shade management, and more.",
    color: "from-cyan-500 to-teal-500",
    emoji: "⚡",
    tags: ["Efficiency", "Optimization", "Tips"],
    content: `<p>Installing solar panels is a great start, but getting the absolute most out of your investment requires ongoing attention.</p>
      <h2>1. Get a Regular Professional Cleaning Schedule</h2>
      <p>Keeping your panels clean is the single most effective way to maintain high generation.</p>
      <h2>2. Monitor Shade and Trim Overhanging Branches</h2>
      <p>If even a single panel is partially shaded, the output of the entire string will drop.</p>`,
  },
];

const sql = neon(process.env.DATABASE_URL);

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
  console.log("✓", post.slug);
}

console.log(`\nSeeded ${posts.length} starter posts.`);
