/**
 * Seeds SEO blog clusters (points 7 & 8) into Neon.
 * Run: node scripts/seed-seo-blogs.mjs
 */
import { neon } from "@neondatabase/serverless";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnv() {
  const raw = readFileSync(join(__dirname, "../.env.local"), "utf8");
  for (const line of raw.split(/\r?\n/)) {
    if (!line || line.startsWith("#")) continue;
    const i = line.indexOf("=");
    if (i === -1) continue;
    process.env[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
}

loadEnv();

const sql = neon(process.env.DATABASE_URL);

const posts = [
  // ── Cluster 1 – Cleaning ──
  {
    slug: "why-solar-panel-cleaning-is-important-in-ahmedabad",
    title: "Why Solar Panel Cleaning is Important in Ahmedabad",
    excerpt:
      "Ahmedabad's dust, pollution and dry climate can cut solar output by 20–35%. Learn why regular solar panel cleaning in Ahmedabad is essential for homes and businesses.",
    category: "Cleaning",
    emoji: "☀️",
    color: "from-blue-500 to-primary-600",
    tags: ["Cleaning", "Ahmedabad", "Efficiency"],
    content: `
<p>If you own a solar system in Ahmedabad, <strong>solar panel cleaning</strong> is not optional — it is one of the highest-ROI maintenance tasks you can do. Gujarat's dry air, construction dust and urban pollution settle on panels every day, blocking sunlight and reducing generation.</p>
<h2>Why Ahmedabad panels get dirty faster</h2>
<p>Ahmedabad sits in a semi-arid climate with long dry seasons. Fine dust from roads, construction sites and nearby industrial zones sticks to the glass. Without professional <strong>solar panel cleaning in Ahmedabad</strong>, homeowners and factories routinely lose a large share of expected output.</p>
<h2>Does cleaning solar panels increase output?</h2>
<p>Yes. Field data from Gujarat sites shows dirty panels can lose <strong>20–35% efficiency</strong>. After a professional wash with demineralized water and soft brushes, generation typically recovers toward rated capacity — which means lower electricity bills and faster payback on your solar investment.</p>
<h2>How often should solar panels be cleaned in Ahmedabad?</h2>
<p>Most residential and commercial sites need cleaning every <strong>10–14 days</strong>. Industrial areas like Naroda, Vatva and Odhav may need weekly cleaning because of heavier soot and particulate matter.</p>
<h2>Book professional cleaning</h2>
<p>Yavix Energy is among the <strong>best solar panel cleaning companies in Ahmedabad</strong>, serving homes, offices and factories city-wide. <a href="/contact">Book a free inspection</a> or WhatsApp us for an instant quote.</p>
`,
  },
  {
    slug: "how-dust-affects-solar-panel-performance",
    title: "How Dust Affects Solar Panel Performance",
    excerpt:
      "How much efficiency is lost due to dust on solar panels? Learn the science of soiling loss and what it costs Ahmedabad solar owners every month.",
    category: "Cleaning",
    emoji: "🌫️",
    color: "from-amber-500 to-orange-500",
    tags: ["Dust", "Efficiency", "Gujarat"],
    content: `
<p><strong>How much efficiency is lost due to dust on solar panels?</strong> In Ahmedabad and Gujarat, soiling loss of <strong>20–35%</strong> within a few weeks without cleaning is common — especially near industrial belts.</p>
<h2>What is soiling loss?</h2>
<p>Dust, pollen, pollution and bird droppings form a film that scatters and blocks sunlight. Less light reaches the silicon cells, so fewer electrons flow — and your inverter reports lower daily kWh.</p>
<h2>Real cost of dirty panels</h2>
<p>A 10 kW home system that should generate ~40 units/day can drop to ~28–32 units when heavily soiled. At ₹8/unit, that is thousands of rupees lost every month — far more than the cost of professional cleaning.</p>
<h2>Does cleaning solar panels increase output?</h2>
<p>Absolutely. Removing dust restores light transmission. Pair cleaning with demineralized water so you do not leave hard water stains that create a second layer of loss.</p>
<p>Book <a href="/services/solar-panel-cleaning-ahmedabad">solar panel cleaning in Ahmedabad</a> with Yavix to recover lost generation.</p>
`,
  },
  {
    slug: "how-often-should-solar-panels-be-cleaned",
    title: "How Often Should Solar Panels Be Cleaned?",
    excerpt:
      "How often should solar panels be cleaned in Ahmedabad? A practical schedule for residential, commercial and industrial systems across Gujarat.",
    category: "Cleaning",
    emoji: "📅",
    color: "from-cyan-500 to-teal-500",
    tags: ["Cleaning Frequency", "Ahmedabad", "AMC"],
    content: `
<p><strong>How often should solar panels be cleaned in Ahmedabad?</strong> For most properties: every <strong>10–14 days</strong>. That single schedule answer is what local searchers need — and what protects your ROI.</p>
<h2>Residential schedule</h2>
<p>Villas and apartments in Satellite, Bopal, Maninagar and similar areas usually do well with bi-weekly professional cleaning. Near construction or highways, move to weekly.</p>
<h2>Commercial & industrial</h2>
<p>Offices and malls: every 10–14 days. Factories in Naroda, Odhav, Vatva and Sanand: often <strong>weekly</strong> due to industrial dust.</p>
<h2>Best solution: Solar AMC</h2>
<p>A <strong>solar panel annual maintenance contract Ahmedabad</strong> plan with Yavix locks in a calendar so you never forget. See our <a href="/services/solar-panel-amc">Solar AMC</a> page for pricing options.</p>
`,
  },
  {
    slug: "signs-your-solar-panels-need-cleaning",
    title: "Signs Your Solar Panels Need Cleaning",
    excerpt:
      "Visible dirt, bird droppings, white stains and sudden drops in inverter output — learn the clear signs your Ahmedabad solar panels need professional cleaning.",
    category: "Cleaning",
    emoji: "🔍",
    color: "from-green-500 to-cyan-500",
    tags: ["Signs", "Maintenance", "Cleaning"],
    content: `
<p>Not sure if it is time to clean? Watch for these signs — common across Ahmedabad rooftops.</p>
<ul>
<li><strong>Visible dust film</strong> or muddy streaks after light rain</li>
<li><strong>Bird droppings</strong> — opaque spots that cause hotspots</li>
<li><strong>White hard water stains</strong> from borewell washing</li>
<li><strong>Sudden drop</strong> in daily generation on clear sunny days</li>
<li><strong>Hotspot warnings</strong> or uneven string performance</li>
</ul>
<h2>Bird droppings & hard water</h2>
<p>Yavix offers dedicated <a href="/services/bird-dropping-removal">bird dropping cleaning</a> and <a href="/services/salt-deposit-removal">hard water stain / salt deposit removal</a> in Ahmedabad.</p>
<p>If you are searching <strong>solar panel cleaning near me</strong>, WhatsApp Yavix for same-day booking across Ahmedabad localities.</p>
`,
  },
  {
    slug: "best-time-to-clean-solar-panels-in-gujarat",
    title: "Best Time To Clean Solar Panels In Gujarat",
    excerpt:
      "Never wash hot panels at noon. Learn the safest morning and evening windows for solar panel cleaning in Gujarat and Ahmedabad.",
    category: "Cleaning",
    emoji: "⏰",
    color: "from-teal-500 to-blue-500",
    tags: ["Timing", "Gujarat", "Safety"],
    content: `
<p>The <strong>best time to clean solar panels in Gujarat</strong> is early morning (before 8 AM) or evening (after 5:30 PM). Midday washing risks thermal shock — cold water on hot glass can crack panels.</p>
<h2>Why timing matters in Ahmedabad</h2>
<p>Summer roof temperatures are extreme. Professional crews schedule around heat and business hours. Yavix never stands on panels and uses soft brushes with purified water.</p>
<h2>Seasonal tips</h2>
<p>After dust storms and after light monsoon rains (mud drying), book an extra wash. For year-round care, choose a <a href="/services/solar-panel-amc">solar AMC in Ahmedabad</a>.</p>
`,
  },

  // ── Cluster 2 – Savings ──
  {
    slug: "how-much-energy-is-lost-due-to-dirty-solar-panels",
    title: "How Much Energy Is Lost Due To Dirty Solar Panels",
    excerpt:
      "How much efficiency is lost due to dust on solar panels in Ahmedabad? See typical soiling loss percentages and monthly rupee impact.",
    category: "Savings",
    emoji: "📉",
    color: "from-rose-500 to-pink-500",
    tags: ["Savings", "Dust", "ROI"],
    content: `
<p><strong>How much energy is lost due to dirty solar panels?</strong> In Ahmedabad, typical soiling loss ranges from <strong>15% to 35%</strong> depending on location and days since last clean.</p>
<h2>Example calculation</h2>
<p>A 50 kW plant generating 200 units/day at ₹9/unit is worth ₹54,000/month clean. At 30% loss, you lose ~₹16,200 every month. Professional cleaning costs a fraction of that.</p>
<p>This is why searching for the <strong>best solar panel cleaning company in Ahmedabad</strong> pays for itself quickly. <a href="/services/solar-panel-cleaning-ahmedabad">Get a quote from Yavix</a>.</p>
`,
  },
  {
    slug: "can-solar-panel-cleaning-reduce-electricity-bills",
    title: "Can Solar Panel Cleaning Reduce Electricity Bills",
    excerpt:
      "Yes — cleaner panels generate more units, so you buy less grid power. See how solar panel cleaning in Ahmedabad cuts monthly electricity costs.",
    category: "Savings",
    emoji: "💡",
    color: "from-amber-500 to-yellow-500",
    tags: ["Bills", "Savings", "Ahmedabad"],
    content: `
<p><strong>Can solar panel cleaning reduce electricity bills?</strong> Yes. More solar generation means fewer units imported from the grid — lower bills for homes and businesses in Ahmedabad.</p>
<h2>Residential impact</h2>
<p>Recovering 20–25% lost output on a 5–10 kW system often saves thousands of rupees per year.</p>
<h2>Commercial impact</h2>
<p>Offices, hospitals and factories with large arrays see even larger savings. Pair cleaning with an AMC for consistent results.</p>
<p>Ask about <strong>solar panel cleaning cost in Ahmedabad</strong> via WhatsApp — pricing depends on kW size and access. <a href="/contact">Contact Yavix</a>.</p>
`,
  },
  {
    slug: "roi-of-solar-panel-cleaning",
    title: "ROI Of Solar Panel Cleaning",
    excerpt:
      "Calculate the return on investment of professional solar panel cleaning in Ahmedabad — cleaning cost vs recovered generation value.",
    category: "Savings",
    emoji: "📊",
    color: "from-blue-500 to-indigo-500",
    tags: ["ROI", "Savings", "AMC"],
    content: `
<p>The <strong>ROI of solar panel cleaning</strong> is usually excellent in dusty cities like Ahmedabad. One or two months of recovered generation often exceeds the cost of a professional wash.</p>
<h2>What drives ROI</h2>
<ul>
<li>Soiling severity (industrial zones = higher ROI)</li>
<li>Tariff rate (commercial tariffs amplify savings)</li>
<li>System size</li>
<li>Cleaning frequency (AMC improves long-term ROI)</li>
</ul>
<p>Yavix helps you maximize ROI with demineralized water cleaning and scheduled AMC plans. Book today for transparent <strong>solar panel cleaning cost in Ahmedabad</strong>.</p>
`,
  },

  // ── Cluster 3 – Maintenance ──
  {
    slug: "solar-panel-amc-explained",
    title: "Solar Panel AMC Explained",
    excerpt:
      "Solar panel annual maintenance contract Ahmedabad explained — what is included, ideal frequency, and why AMC beats one-time cleaning.",
    category: "Maintenance",
    emoji: "📋",
    color: "from-primary-500 to-blue-600",
    tags: ["AMC", "Maintenance", "Ahmedabad"],
    content: `
<p>A <strong>solar panel annual maintenance contract Ahmedabad</strong> (AMC) is a yearly plan for scheduled cleaning and basic inspection — so your system stays efficient without you chasing vendors every fortnight.</p>
<h2>What Yavix AMC includes</h2>
<ul>
<li>Scheduled professional cleans (monthly / bi-weekly / custom)</li>
<li>Visual inspection each visit</li>
<li>Priority booking</li>
<li>Discounted emergency call-outs</li>
</ul>
<p>Learn more on our <a href="/services/solar-panel-amc">Solar Panel AMC</a> service page and request pricing on WhatsApp.</p>
`,
  },
  {
    slug: "residential-solar-maintenance-guide",
    title: "Residential Solar Maintenance Guide",
    excerpt:
      "Complete residential solar maintenance guide for Ahmedabad homes — cleaning frequency, inverter checks, and when to call professionals.",
    category: "Maintenance",
    emoji: "🏠",
    color: "from-green-500 to-emerald-500",
    tags: ["Residential", "Maintenance", "Guide"],
    content: `
<p>This <strong>residential solar maintenance guide</strong> is for Ahmedabad homeowners with rooftop systems on villas, apartments and societies.</p>
<h2>Monthly checklist</h2>
<ul>
<li>Check inverter app for sudden generation drops</li>
<li>Look for bird droppings and heavy dust</li>
<li>Note any cracked glass or loose cables</li>
</ul>
<h2>Professional cleaning</h2>
<p>Book <a href="/services/residential-solar-panel-cleaning">residential solar panel cleaning</a> every 10–14 days. Never use hard borewell water yourself — it causes permanent white stains.</p>
`,
  },
  {
    slug: "industrial-solar-maintenance-checklist",
    title: "Industrial Solar Maintenance Checklist",
    excerpt:
      "Industrial solar maintenance checklist for Ahmedabad GIDC plants — soot, weekly cleaning, safety and AMC recommendations.",
    category: "Maintenance",
    emoji: "🏭",
    color: "from-slate-600 to-slate-800",
    tags: ["Industrial", "Checklist", "GIDC"],
    content: `
<p>Factories in Naroda, Vatva, Odhav and Sanand need a strict <strong>industrial solar maintenance checklist</strong>.</p>
<ul>
<li>Weekly or bi-weekly professional cleaning</li>
<li>Inspect for industrial soot and oil film</li>
<li>Verify earthing and cable integrity quarterly</li>
<li>Thermal / hotspot checks annually</li>
<li>Keep an AMC with documented visit logs</li>
</ul>
<p>Yavix provides <a href="/services/industrial-solar-panel-cleaning">industrial solar panel cleaning in Ahmedabad</a> with safety-compliant crews.</p>
`,
  },

  // ── Cluster 4 – Local SEO ──
  {
    slug: "solar-panel-cleaning-in-naroda",
    title: "Solar Panel Cleaning In Naroda",
    excerpt:
      "Professional solar panel cleaning in Naroda for homes, shops and GIDC industries. Best solar cleaning service near Naroda — book Yavix today.",
    category: "Local SEO",
    emoji: "📍",
    color: "from-blue-500 to-primary-600",
    tags: ["Naroda", "Local", "Cleaning"],
    content: `
<p>Looking for <strong>solar panel cleaning in Naroda</strong>? Yavix Energy serves residential and industrial Naroda with demineralized water cleaning and scratch-free equipment.</p>
<p>Naroda's GIDC dust means panels need frequent washing. We also cover nearby Nikol, Odhav, Vastral and Bapunagar.</p>
<p>Visit our dedicated page: <a href="/solar-panel-cleaning-naroda">Solar Panel Cleaning Naroda</a> or WhatsApp for same-day scheduling.</p>
`,
  },
  {
    slug: "solar-panel-cleaning-in-odhav",
    title: "Solar Panel Cleaning In Odhav",
    excerpt:
      "Solar panel cleaning in Odhav for residential and industrial clients. Affordable, professional solar washing near Odhav, Ahmedabad.",
    category: "Local SEO",
    emoji: "📍",
    color: "from-cyan-500 to-blue-500",
    tags: ["Odhav", "Local", "Cleaning"],
    content: `
<p><strong>Solar panel cleaning in Odhav</strong> is essential because of industrial particulates and urban dust. Yavix cleans homes, warehouses and factories across Odhav with AMC options.</p>
<p>Full service details: <a href="/solar-panel-cleaning-odhav">Solar Panel Cleaning Odhav</a>.</p>
`,
  },
  {
    slug: "solar-panel-cleaning-in-nikol",
    title: "Solar Panel Cleaning In Nikol",
    excerpt:
      "Best solar panel cleaning in Nikol — residential and commercial solar washing by Yavix Energy Ahmedabad.",
    category: "Local SEO",
    emoji: "📍",
    color: "from-teal-500 to-green-500",
    tags: ["Nikol", "Local", "Cleaning"],
    content: `
<p>Choose Yavix for <strong>solar panel cleaning in Nikol</strong>. We remove dust, bird droppings and hard water stains safely — no standing on panels.</p>
<p>Book via <a href="/solar-panel-cleaning-nikol">Solar Panel Cleaning Nikol</a> or WhatsApp.</p>
`,
  },
  {
    slug: "solar-panel-cleaning-in-vastral",
    title: "Solar Panel Cleaning In Vastral",
    excerpt:
      "Solar panel cleaning in Vastral for societies, bungalows and commercial rooftops. Trusted local solar cleaning company.",
    category: "Local SEO",
    emoji: "📍",
    color: "from-indigo-500 to-blue-500",
    tags: ["Vastral", "Local", "Cleaning"],
    content: `
<p><strong>Solar panel cleaning in Vastral</strong> from Yavix covers expanding residential societies and commercial sites. Bi-weekly AMC plans available.</p>
<p>Details: <a href="/solar-panel-cleaning-vastral">Solar Panel Cleaning Vastral</a>.</p>
`,
  },
  {
    slug: "solar-panel-cleaning-in-bapunagar",
    title: "Solar Panel Cleaning In Bapunagar",
    excerpt:
      "Professional solar panel cleaning in Bapunagar — affordable solar washing and maintenance for homes and businesses.",
    category: "Local SEO",
    emoji: "📍",
    color: "from-violet-500 to-purple-500",
    tags: ["Bapunagar", "Local", "Cleaning"],
    content: `
<p>Need <strong>solar panel cleaning in Bapunagar</strong>? Yavix provides professional solar panel cleaning service with purified water and soft brushes.</p>
<p>Open our locality page: <a href="/solar-panel-cleaning-bapunagar">Solar Panel Cleaning Bapunagar</a>.</p>
`,
  },

  // ── Extra long-tail focused posts (point 7) ──
  {
    slug: "solar-panel-cleaning-cost-in-ahmedabad",
    title: "Solar Panel Cleaning Cost in Ahmedabad",
    excerpt:
      "Solar panel cleaning cost in Ahmedabad explained — what affects price, AMC savings, and how to get an instant quote from Yavix.",
    category: "Savings",
    emoji: "💰",
    color: "from-emerald-500 to-teal-500",
    tags: ["Cost", "Pricing", "Ahmedabad"],
    content: `
<p>Searching for <strong>solar panel cleaning cost in Ahmedabad</strong>? Price depends on system size (kW), roof access, soiling level and whether you choose one-time or AMC.</p>
<h2>What affects cost</h2>
<ul>
<li>Residential 3–10 kW vs commercial 50 kW+</li>
<li>Height and access difficulty</li>
<li>Hard water stain / salt treatment needs</li>
<li>Frequency (AMC is cheaper per visit)</li>
</ul>
<p>WhatsApp Yavix for an instant quote — we are a transparent, professional solar panel cleaning company in Ahmedabad.</p>
`,
  },
  {
    slug: "best-solar-panel-cleaning-company-in-ahmedabad",
    title: "Best Solar Panel Cleaning Company in Ahmedabad",
    excerpt:
      "What makes the best solar panel cleaning company in Ahmedabad? Equipment, water quality, safety and proof of results — and why clients choose Yavix.",
    category: "Buyer's Guide",
    emoji: "🏆",
    color: "from-yellow-500 to-orange-500",
    tags: ["Best Company", "Ahmedabad", "Hiring"],
    content: `
<p>Looking for the <strong>best solar panel cleaning company in Ahmedabad</strong>? Check these must-haves:</p>
<ul>
<li>Demineralized / soft water (no hard water stains)</li>
<li>No standing on panels</li>
<li>Safety harnesses and trained crew</li>
<li>Before/after documentation</li>
<li>AMC options across Ahmedabad localities</li>
</ul>
<p>Yavix Energy ticks these boxes for residential, commercial and industrial clients. If you searched <strong>solar panel cleaning near me</strong>, we serve all major Ahmedabad areas — <a href="/locations">see locations</a>.</p>
`,
  },
  {
    slug: "solar-panel-bird-dropping-cleaning-ahmedabad",
    title: "Solar Panel Bird Dropping Cleaning Ahmedabad",
    excerpt:
      "Solar panel bird dropping cleaning in Ahmedabad — remove pigeon mess safely, prevent hotspots, restore output with Yavix.",
    category: "Cleaning",
    emoji: "🐦",
    color: "from-sky-500 to-blue-600",
    tags: ["Bird Droppings", "Ahmedabad", "Hotspots"],
    content: `
<p><strong>Solar panel bird dropping cleaning Ahmedabad</strong> is critical because droppings are opaque and cause hotspots that damage cells.</p>
<p>Yavix uses soft brushes and purified water — never abrasive scrapers. Book our <a href="/services/bird-dropping-removal">bird dropping removal service</a> today.</p>
`,
  },
  {
    slug: "solar-panel-hard-water-stain-removal-ahmedabad",
    title: "Solar Panel Hard Water Stain Removal Ahmedabad",
    excerpt:
      "Solar panel hard water stain removal in Ahmedabad — fix white calcification from borewell water and restore glass clarity.",
    category: "Cleaning",
    emoji: "💧",
    color: "from-cyan-600 to-blue-500",
    tags: ["Hard Water", "Stains", "Ahmedabad"],
    content: `
<p>DIY cleaning with borewell water often leaves white marks. <strong>Solar panel hard water stain removal Ahmedabad</strong> needs professional descaling and a purified-water rinse.</p>
<p>See <a href="/services/salt-deposit-removal">salt & mineral deposit removal</a> — we treat calcification carefully without damaging AR coatings.</p>
`,
  },
];

let ok = 0;
for (const post of posts) {
  const readTime = `${Math.max(3, Math.ceil(post.content.replace(/<[^>]+>/g, " ").split(/\s+/).length / 200))} min read`;
  await sql`
    INSERT INTO blog_posts (
      slug, title, excerpt, content, category, read_time, author, tags, emoji, color,
      meta_description, meta_keywords, published, published_at, updated_at
    ) VALUES (
      ${post.slug},
      ${post.title},
      ${post.excerpt},
      ${post.content},
      ${post.category},
      ${readTime},
      ${"Yavix Team"},
      ${post.tags},
      ${post.emoji},
      ${post.color},
      ${post.excerpt},
      ${post.tags.join(", ")},
      true,
      NOW(),
      NOW()
    )
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title,
      excerpt = EXCLUDED.excerpt,
      content = EXCLUDED.content,
      category = EXCLUDED.category,
      tags = EXCLUDED.tags,
      emoji = EXCLUDED.emoji,
      color = EXCLUDED.color,
      meta_description = EXCLUDED.meta_description,
      meta_keywords = EXCLUDED.meta_keywords,
      published = true,
      updated_at = NOW()
  `;
  ok++;
  console.log("✓", post.slug);
}

const count = await sql`SELECT COUNT(*)::int AS c FROM blog_posts WHERE published = true`;
console.log(`\nUpserted ${ok} SEO blogs. Total published in DB: ${count[0].c}`);
