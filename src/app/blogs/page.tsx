import type { Metadata } from "next";
import BlogsClient from "./BlogsClient";
import { getAllBlogs } from "@/lib/db/blogs";
import { SITE_URL, BRAND_NAME } from "@/lib/seo/config";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Solar Cleaning Blog – Tips & Insights | ${BRAND_NAME}`,
  description:
    "Expert solar panel cleaning tips, efficiency guides, and industry insights from Yavix Energy Ahmedabad. 50+ articles on cleaning, savings, maintenance and local SEO.",
  alternates: { canonical: `${SITE_URL}/blogs` },
};

export default async function Page() {
  const rows = await getAllBlogs();
  const blogs = rows.map((b) => ({
    slug: b.slug,
    category: b.category,
    readTime: b.readTime,
    author: b.author,
    date: b.date,
    title: b.title,
    excerpt: b.excerpt,
    color: b.color,
    emoji: b.emoji,
    tags: b.tags,
    content: b.content,
  }));
  return <BlogsClient blogs={blogs} />;
}
