"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

const COLORS = [
  "from-blue-500 to-primary-600",
  "from-cyan-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-green-500 to-cyan-500",
  "from-teal-500 to-blue-500",
  "from-rose-500 to-pink-500",
];

const CATEGORIES = [
  "Education",
  "Tips & Tricks",
  "Research",
  "Guide",
  "Seasonal",
  "Buyer's Guide",
  "Local SEO",
  "Maintenance",
  "Savings",
];

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

type BlogFormInitial = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  tags: string[];
  emoji: string;
  color: string;
  published: boolean;
  date: string;
  readTime: string;
  metaDescription?: string;
  metaKeywords?: string;
};

type Props = {
  mode: "create" | "edit";
  initial?: BlogFormInitial;
};

export default function BlogForm({ mode, initial }: Props) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(!!initial);
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [category, setCategory] = useState(initial?.category ?? "Education");
  const [author, setAuthor] = useState(initial?.author ?? "Yavix Team");
  const [tags, setTags] = useState((initial?.tags ?? []).join(", "));
  const [emoji, setEmoji] = useState(initial?.emoji ?? "☀️");
  const [color, setColor] = useState(initial?.color ?? COLORS[0]);
  const [published, setPublished] = useState(initial?.published ?? true);
  const [metaDescription, setMetaDescription] = useState(
    initial?.metaDescription ?? "",
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const previewSlug = useMemo(
    () => (slugTouched ? slug : slugify(title)),
    [slug, slugTouched, title],
  );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const payload = {
      title,
      slug: previewSlug,
      excerpt,
      content,
      category,
      author,
      tags,
      emoji,
      color,
      published,
      metaDescription: metaDescription || excerpt,
    };

    try {
      const res = await fetch(
        mode === "create"
          ? "/api/admin/blogs"
          : `/api/admin/blogs/${encodeURIComponent(initial!.slug)}`,
        {
          method: mode === "create" ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Save failed");
        return;
      }
      setSuccess(mode === "create" ? "Blog published!" : "Blog updated!");
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Save failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Title *
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
            placeholder="Why Solar Panel Cleaning Matters in Ahmedabad"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            URL Slug
          </label>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">/blogs/</span>
            <input
              value={previewSlug}
              onChange={(e) => {
                setSlugTouched(true);
                setSlug(slugify(e.target.value));
              }}
              className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              placeholder="why-solar-panel-cleaning-matters"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Short Excerpt *
          </label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            required
            rows={3}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 resize-y"
            placeholder="1–2 sentence summary shown on the blogs listing…"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Content (HTML allowed) *
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={16}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-mono outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 resize-y"
            placeholder={`<p>Intro paragraph...</p>\n\n<h2>Section heading</h2>\n<p>More content...</p>\n<ul>\n  <li>Point one</li>\n</ul>`}
          />
          <p className="text-xs text-slate-400 mt-1.5">
            Use HTML tags like &lt;p&gt;, &lt;h2&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary-500"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Author
            </label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Tags (comma separated)
            </label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary-500"
              placeholder="Cleaning, Ahmedabad, Efficiency"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Emoji
            </label>
            <input
              value={emoji}
              onChange={(e) => setEmoji(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary-500"
              placeholder="☀️"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Card Color
          </label>
          <div className="flex flex-wrap gap-2">
            {COLORS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                className={`h-10 w-16 rounded-xl bg-gradient-to-br ${c} ${
                  color === c ? "ring-2 ring-offset-2 ring-primary-500" : ""
                }`}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Meta Description (SEO)
          </label>
          <textarea
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            rows={2}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary-500 resize-y"
            placeholder="Defaults to excerpt if empty"
          />
        </div>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-primary-600"
          />
          <span className="text-sm font-semibold text-slate-700">
            Publish immediately (show on public blogs page)
          </span>
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
      )}
      {success && (
        <p className="text-sm text-green-700 bg-green-50 rounded-lg px-3 py-2">
          {success}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-primary-500 text-white px-6 py-3 text-sm font-semibold hover:bg-primary-600 disabled:opacity-60"
        >
          {loading
            ? "Saving…"
            : mode === "create"
              ? "Create & Publish Blog"
              : "Save Changes"}
        </button>
        <Link
          href="/admin"
          className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
