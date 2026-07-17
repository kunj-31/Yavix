import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/favicon.ico", "/favicon.png", "/favicon-192.png", "/apple-touch-icon.png"],
        disallow: ["/admin", "/api/admin"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin", "/api/admin"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
