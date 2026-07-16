import { pgTable, text, timestamp, boolean, serial } from "drizzle-orm/pg-core";

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull().default("Education"),
  readTime: text("read_time").notNull().default("5 min read"),
  author: text("author").notNull().default("Yavix Team"),
  tags: text("tags").array().notNull().default([]),
  emoji: text("emoji").default("☀️"),
  color: text("color").default("from-blue-500 to-primary-600"),
  metaDescription: text("meta_description"),
  metaKeywords: text("meta_keywords"),
  published: boolean("published").notNull().default(true),
  publishedAt: timestamp("published_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type BlogPostRow = typeof blogPosts.$inferSelect;
export type NewBlogPostRow = typeof blogPosts.$inferInsert;
