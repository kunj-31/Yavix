import { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { BLOGS } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yavix.in";

  // Static routes
  const staticRoutes = ["", "/about", "/blogs", "/case-study", "/contact", "/products"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // Dynamic products
  const productRoutes = PRODUCTS.map((p) => ({
    url: `${baseUrl}/products/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic blogs
  const blogRoutes = BLOGS.map((b) => ({
    url: `${baseUrl}/blogs/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
