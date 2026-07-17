import { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { BLOGS } from "@/lib/blogs";
import { getServiceSlugs } from "@/lib/seo/services";
import { SEO_LOCATIONS, locationPageSlug } from "@/lib/seo/locations";
import { SITE_URL } from "@/lib/seo/config";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/** Known SEO blog slugs (Neon + seed) — used if DB is unavailable */
const SEO_BLOG_SLUGS = [
  ...BLOGS.map((b) => b.slug),
  "why-solar-panel-cleaning-is-important-in-ahmedabad",
  "how-dust-affects-solar-panel-performance",
  "how-often-should-solar-panels-be-cleaned",
  "signs-your-solar-panels-need-cleaning",
  "best-time-to-clean-solar-panels-in-gujarat",
  "how-much-energy-is-lost-due-to-dirty-solar-panels",
  "can-solar-panel-cleaning-reduce-electricity-bills",
  "roi-of-solar-panel-cleaning",
  "solar-panel-amc-explained",
  "residential-solar-maintenance-guide",
  "industrial-solar-maintenance-checklist",
  "solar-panel-cleaning-in-naroda",
  "solar-panel-cleaning-in-odhav",
  "solar-panel-cleaning-in-nikol",
  "solar-panel-cleaning-in-vastral",
  "solar-panel-cleaning-in-bapunagar",
  "solar-panel-cleaning-cost-in-ahmedabad",
  "best-solar-panel-cleaning-company-in-ahmedabad",
  "solar-panel-bird-dropping-cleaning-ahmedabad",
  "solar-panel-hard-water-stain-removal-ahmedabad",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;
  const now = new Date();

  try {
    const staticRoutes: MetadataRoute.Sitemap = [
      { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
      { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${baseUrl}/blogs`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
      { url: `${baseUrl}/case-study`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
      { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
      { url: `${baseUrl}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
      { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
      { url: `${baseUrl}/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
      { url: `${baseUrl}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    ];

    const serviceRoutes: MetadataRoute.Sitemap = getServiceSlugs().map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: slug === "solar-panel-cleaning-ahmedabad" ? 0.95 : 0.85,
    }));

    const locationRoutes: MetadataRoute.Sitemap = SEO_LOCATIONS.map((location) => {
      const pageSlug = locationPageSlug(location.slug);
      let priority = 0.8;
      if (location.slug === "ahmedabad") priority = 0.95;
      else if (location.type === "ahmedabad") priority = 0.85;
      else priority = 0.75;

      return {
        url: `${baseUrl}/${pageSlug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority,
      };
    });

    const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
      url: `${baseUrl}/products/${p.id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

    // Prefer live DB blogs; fall back to known SEO slugs (never crash sitemap)
    let blogSlugs = [...new Set(SEO_BLOG_SLUGS)];
    try {
      const { getAllBlogs } = await import("@/lib/db/blogs");
      const blogs = await getAllBlogs();
      if (blogs.length > 0) {
        blogSlugs = [...new Set([...blogSlugs, ...blogs.map((b) => b.slug)])];
      }
    } catch (e) {
      console.error("sitemap: blog DB unavailable, using static slugs", e);
    }

    const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
      url: `${baseUrl}/blogs/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    return [
      ...staticRoutes,
      ...serviceRoutes,
      ...locationRoutes,
      ...productRoutes,
      ...blogRoutes,
    ];
  } catch (e) {
    console.error("sitemap fatal error", e);
    // Absolute minimum so Google never gets a 500
    return [
      { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
      { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
      { url: `${baseUrl}/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
      { url: `${baseUrl}/blogs`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ];
  }
}
