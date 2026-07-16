import { desc, eq } from "drizzle-orm";
import { getDb } from "./index";
import { blogPosts, type BlogPostRow, type NewBlogPostRow } from "./schema";
import { BLOGS, type BlogPost } from "@/lib/blogs";

export type AdminBlog = BlogPost & {
  id?: number;
  published: boolean;
  publishedAt?: Date;
  updatedAt?: Date;
  metaDescription?: string | null;
  metaKeywords?: string | null;
};

function rowToBlogPost(row: BlogPostRow): AdminBlog {
  const date = row.publishedAt.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  return {
    id: row.id,
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
    published: row.published,
    publishedAt: row.publishedAt,
    updatedAt: row.updatedAt,
    metaDescription: row.metaDescription,
    metaKeywords: row.metaKeywords,
  };
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

function estimateReadTime(content: string): string {
  const text = content.replace(/<[^>]+>/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min read`;
}

/** Public: published blogs only. Uses Neon when DATABASE_URL is set. */
export async function getAllBlogs(): Promise<AdminBlog[]> {
  const db = getDb();
  if (!db) {
    return BLOGS.map((b) => ({ ...b, published: true }));
  }

  try {
    const rows = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.published, true))
      .orderBy(desc(blogPosts.publishedAt));
    return rows.map(rowToBlogPost);
  } catch (e) {
    console.error("getAllBlogs error", e);
    return BLOGS.map((b) => ({ ...b, published: true }));
  }
}

export async function getBlogBySlug(slug: string): Promise<AdminBlog | undefined> {
  const db = getDb();
  if (!db) return BLOGS.find((b) => b.slug === slug)
    ? { ...BLOGS.find((b) => b.slug === slug)!, published: true }
    : undefined;

  try {
    const rows = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug))
      .limit(1);
    if (rows.length === 0) return undefined;
    const post = rowToBlogPost(rows[0]);
    if (!post.published) return undefined;
    return post;
  } catch (e) {
    console.error("getBlogBySlug error", e);
    const fallback = BLOGS.find((b) => b.slug === slug);
    return fallback ? { ...fallback, published: true } : undefined;
  }
}

export async function getBlogSlugs(): Promise<string[]> {
  const blogs = await getAllBlogs();
  return blogs.map((b) => b.slug);
}

/** Admin: all blogs including drafts */
export async function getAllBlogsAdmin(): Promise<AdminBlog[]> {
  const db = getDb();
  if (!db) throw new Error("DATABASE_URL is not configured");

  const rows = await db
    .select()
    .from(blogPosts)
    .orderBy(desc(blogPosts.updatedAt));
  return rows.map(rowToBlogPost);
}

export async function getBlogBySlugAdmin(slug: string): Promise<AdminBlog | undefined> {
  const db = getDb();
  if (!db) throw new Error("DATABASE_URL is not configured");

  const rows = await db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.slug, slug))
    .limit(1);
  return rows[0] ? rowToBlogPost(rows[0]) : undefined;
}

export type BlogInput = {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  category?: string;
  author?: string;
  tags?: string[];
  emoji?: string;
  color?: string;
  published?: boolean;
  metaDescription?: string;
  metaKeywords?: string;
  readTime?: string;
};

export async function createBlog(input: BlogInput): Promise<AdminBlog> {
  const db = getDb();
  if (!db) throw new Error("DATABASE_URL is not configured");

  const slug = (input.slug?.trim() || slugify(input.title)).toLowerCase();
  if (!slug) throw new Error("Slug is required");

  const existing = await getBlogBySlugAdmin(slug);
  if (existing) throw new Error("A blog with this slug already exists");

  const now = new Date();
  const values: NewBlogPostRow = {
    slug,
    title: input.title.trim(),
    excerpt: input.excerpt.trim(),
    content: input.content.trim(),
    category: input.category?.trim() || "Education",
    author: input.author?.trim() || "Yavix Team",
    tags: input.tags ?? [],
    emoji: input.emoji || "☀️",
    color: input.color || "from-blue-500 to-primary-600",
    published: input.published ?? true,
    readTime: input.readTime || estimateReadTime(input.content),
    metaDescription: input.metaDescription || input.excerpt.trim(),
    metaKeywords: input.metaKeywords || (input.tags ?? []).join(", "),
    publishedAt: now,
    updatedAt: now,
    createdAt: now,
  };

  const inserted = await db.insert(blogPosts).values(values).returning();
  return rowToBlogPost(inserted[0]);
}

export async function updateBlog(
  slug: string,
  input: Partial<BlogInput> & { newSlug?: string },
): Promise<AdminBlog> {
  const db = getDb();
  if (!db) throw new Error("DATABASE_URL is not configured");

  const existing = await getBlogBySlugAdmin(slug);
  if (!existing) throw new Error("Blog not found");

  const nextSlug = input.newSlug?.trim() || input.slug?.trim() || slug;
  if (nextSlug !== slug) {
    const conflict = await getBlogBySlugAdmin(nextSlug);
    if (conflict) throw new Error("A blog with this slug already exists");
  }

  const content = input.content ?? existing.content;
  const updated = await db
    .update(blogPosts)
    .set({
      slug: nextSlug,
      title: input.title?.trim() ?? existing.title,
      excerpt: input.excerpt?.trim() ?? existing.excerpt,
      content,
      category: input.category?.trim() ?? existing.category,
      author: input.author?.trim() ?? existing.author,
      tags: input.tags ?? existing.tags,
      emoji: input.emoji ?? existing.emoji,
      color: input.color ?? existing.color,
      published: input.published ?? existing.published,
      readTime: input.readTime || estimateReadTime(content),
      metaDescription:
        input.metaDescription ?? existing.metaDescription ?? existing.excerpt,
      metaKeywords:
        input.metaKeywords ??
        existing.metaKeywords ??
        existing.tags.join(", "),
      updatedAt: new Date(),
    })
    .where(eq(blogPosts.slug, slug))
    .returning();

  return rowToBlogPost(updated[0]);
}

export async function deleteBlog(slug: string): Promise<void> {
  const db = getDb();
  if (!db) throw new Error("DATABASE_URL is not configured");

  const deleted = await db
    .delete(blogPosts)
    .where(eq(blogPosts.slug, slug))
    .returning();
  if (deleted.length === 0) throw new Error("Blog not found");
}
