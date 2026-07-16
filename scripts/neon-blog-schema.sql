-- Run this in Neon SQL Editor after creating a project at https://neon.tech

CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Education',
  read_time TEXT NOT NULL DEFAULT '5 min read',
  author TEXT NOT NULL DEFAULT 'Yavix Team',
  tags TEXT[] NOT NULL DEFAULT '{}',
  emoji TEXT DEFAULT '☀️',
  color TEXT DEFAULT 'from-blue-500 to-primary-600',
  meta_description TEXT,
  meta_keywords TEXT,
  published BOOLEAN NOT NULL DEFAULT true,
  published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published, published_at DESC);
