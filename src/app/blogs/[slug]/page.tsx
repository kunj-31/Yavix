import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOGS } from "@/lib/blogs";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }> | { slug: string };
}

// Statically generate all blog post paths at build time
export async function generateStaticParams() {
  return BLOGS.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for search engines
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = BLOGS.find((b) => b.slug === slug);
  
  if (!post) {
    return {
      title: "Blog Post Not Found | Yavix Solar Cleaning",
    };
  }

  return {
    title: `${post.title} | Yavix Solar Cleaning Ahmedabad`,
    description: post.excerpt,
    keywords: post.tags.join(", ") + ", solar cleaning Ahmedabad, solar panel cleaning",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "en_IN",
      url: `https://yavix.in/blogs/${post.slug}`,
      siteName: "Yavix Solar Cleaning",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = BLOGS.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  // Generate datePublished in ISO format dynamically
  const year = post.date.split(" ")[1] || "2025";
  const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  const monthStr = post.date.split(" ")[0]?.toLowerCase() || "january";
  const monthIdx = monthNames.indexOf(monthStr);
  const formattedMonth = monthIdx !== -1 ? String(monthIdx + 1).padStart(2, "0") : "01";
  const isoDate = `${year}-${formattedMonth}-01T08:00:00+05:30`;

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://yavix.in/blogs/${post.slug}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://yavix.in/images/logos/Logo.avif`, // fallback logo representation
    "author": {
      "@type": "Organization",
      "name": "Yavix Solar Cleaning",
      "url": "https://yavix.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Yavix Solar Cleaning",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yavix.in/images/logos/Logo.avif"
      }
    },
    "datePublished": isoDate,
    "dateModified": isoDate
  };

  return (
    <>
      {/* Article Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <style>{`
        .blog-content p {
          margin-bottom: 24px;
          font-size: 16px;
          line-height: 1.8;
          color: #475569;
          text-align: justify;
        }
        .blog-content h2 {
          margin-top: 40px;
          margin-bottom: 16px;
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }
        .blog-content h3 {
          margin-top: 32px;
          margin-bottom: 12px;
          font-size: 19px;
          font-weight: 700;
          color: #0f172a;
        }
        .blog-content ul {
          margin-bottom: 24px;
          padding-left: 20px;
          list-style-type: disc;
        }
        .blog-content ol {
          margin-bottom: 24px;
          padding-left: 20px;
          list-style-type: decimal;
        }
        .blog-content li {
          margin-bottom: 8px;
          font-size: 16px;
          line-height: 1.7;
          color: #475569;
        }
        .blog-content strong {
          font-weight: 700;
          color: #0f172a;
        }
      `}</style>

      <main className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Back Button */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0066ff] hover:text-[#004edb] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>

          {/* Article Container */}
          <article className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 md:p-14 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            
            {/* Category Pill */}
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#0066ff] text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl md:text-[40px] font-black text-slate-900 leading-tight tracking-tight mb-6">
              {post.title}
            </h1>

            {/* Meta Card */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-4 border-y border-slate-100 mb-10 text-xs sm:text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#0066ff]" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#0066ff]" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0066ff]" />
                {post.readTime}
              </span>
            </div>

            {/* Article Content */}
            <div
              className="blog-content font-medium"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags footer */}
            <div className="border-t border-slate-100 pt-8 mt-12 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" /> Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </article>
        </div>
      </main>
    </>
  );
}
