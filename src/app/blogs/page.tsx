import type { Metadata } from "next";
import BlogsClient from "./BlogsClient";
import { getAllBlogs } from "@/lib/db/blogs";
import { SITE_URL, BRAND_NAME } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: `Solar Cleaning Blog – Tips & Insights | ${BRAND_NAME}`,
  description:
    "Expert solar panel cleaning tips, efficiency guides, and industry insights from Yavix Energy Ahmedabad. 50+ articles on cleaning, savings, maintenance and local SEO.",
  alternates: { canonical: `${SITE_URL}/blogs` },
};

export default async function Page() {
  const blogs = await getAllBlogs();
  return <BlogsClient blogs={blogs} />;
}
