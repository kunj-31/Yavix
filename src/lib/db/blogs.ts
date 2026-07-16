import { desc, eq } from "drizzle-orm";
import { getDb } from "./index";
import { blogPosts } from "./schema";
import { BLOGS, type BlogPost } from "@/lib/blogs";

function rowToBlogPost(row: {
  slug: string;
  category: string;
  readTime: string;
  author: string;
  publishedAt: Date;
  title: string;
  excerpt: string;
  color: string | null;
  emoji: string | null;
  tags: string[] | null;
  content: string;
  updatedAt?: Date;
}): BlogPost & { publishedAt: Date; updatedAt?: Date } {
  const date = row.publishedAt.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  return {
    slug: row.slug,
    category: row.category,
    readTime: row.readTime,
    author: row.author,
    date,
    title: row.title,
    excerpt: row.excerpt,
    color: row.color ?? "from-blue-500 to-primary-600",
    emoji: row.emoji ?? "☀️",
    tags: row.tags ?? [],
    content: row.content,
    publishedAt: row.publishedAt,
    updatedAt: row.updatedAt,
  };
}

/** Returns blogs from Neon when DATABASE_URL is set, otherwise static fallback */
export async function getAllBlogs(): Promise<
  (BlogPost & { publishedAt?: Date; updatedAt?: Date })[]
> {
  const db = getDb();
  if (!db) return BLOGS;

  try {
    const rows = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.published, true))
      .orderBy(desc(blogPosts.publishedAt));

    if (rows.length === 0) return BLOGS;
    return rows.map(rowToBlogPost);
  } catch {
    return BLOGS;
  }
}

export async function getBlogBySlug(
  slug: string,
): Promise<(BlogPost & { publishedAt?: Date; updatedAt?: Date }) | undefined> {
  const db = getDb();
  if (!db) return BLOGS.find((b) => b.slug === slug);

  try {
    const rows = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug))
      .limit(1);

    if (rows.length === 0) return BLOGS.find((b) => b.slug === slug);
    return rowToBlogPost(rows[0]);
  } catch {
    return BLOGS.find((b) => b.slug === slug);
  }
}

export async function getBlogSlugs(): Promise<string[]> {
  const blogs = await getAllBlogs();
  return blogs.map((b) => b.slug);
}
