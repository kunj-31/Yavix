import { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { getAllBlogs } from "@/lib/db/blogs";
import { getServiceSlugs } from "@/lib/seo/services";
import {
  SEO_LOCATIONS,
  locationPageSlug,
} from "@/lib/seo/locations";
import { SITE_URL } from "@/lib/seo/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;
  const now = new Date();

  // Core pages
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

  // All service pages (residential, commercial, industrial, AMC, etc.)
  const serviceRoutes: MetadataRoute.Sitemap = getServiceSlugs().map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: slug === "solar-panel-cleaning-ahmedabad" ? 0.95 : 0.85,
  }));

  // All location pages — Ahmedabad + every locality + nearby cities
  // e.g. /solar-panel-cleaning-ahmedabad, /solar-panel-cleaning-naroda, etc.
  const locationRoutes: MetadataRoute.Sitemap = SEO_LOCATIONS.map((location) => {
    const pageSlug = locationPageSlug(location.slug);
    let priority = 0.8;

    if (location.slug === "ahmedabad") {
      priority = 0.95; // main city page
    } else if (location.type === "ahmedabad") {
      priority = 0.85; // Ahmedabad localities (Naroda, Nikol, Satellite, etc.)
    } else {
      priority = 0.75; // nearby cities (Gandhinagar, Kalol, Sanand, etc.)
    }

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

  const blogs = await getAllBlogs();
  const blogRoutes: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: `${baseUrl}/blogs/${b.slug}`,
    lastModified: new Date(b.updatedAt ?? b.publishedAt ?? now),
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
}
