"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Pencil, Trash2, ExternalLink, Eye, EyeOff } from "lucide-react";

type BlogRow = {
  slug: string;
  title: string;
  category: string;
  published: boolean;
};

export default function AdminBlogList({
  initialBlogs,
}: {
  initialBlogs: BlogRow[];
}) {
  const router = useRouter();
  const [blogs, setBlogs] = useState(initialBlogs);
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState("");

  async function handleDelete(slug: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setBusy(slug);
    setError("");
    try {
      const res = await fetch(`/api/admin/blogs/${encodeURIComponent(slug)}`, {
        method: "DELETE",
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Delete failed");
        return;
      }
      setBlogs((prev) => prev.filter((b) => b.slug !== slug));
      router.refresh();
    } catch {
      setError("Delete failed");
    } finally {
      setBusy(null);
    }
  }

  if (blogs.length === 0) {
    return (
      <div className="rounded-3xl bg-white border border-slate-200 p-10 text-center">
        <p className="text-slate-600 mb-4">No blog posts yet.</p>
        <Link
          href="/admin/createblog"
          className="text-primary-600 font-semibold hover:underline"
        >
          Create your first blog →
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {error && (
        <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
      )}
      <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-100 text-slate-500">
            <tr>
              <th className="px-5 py-3 font-semibold">Title</th>
              <th className="px-5 py-3 font-semibold hidden sm:table-cell">Status</th>
              <th className="px-5 py-3 font-semibold hidden md:table-cell">Category</th>
              <th className="px-5 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.slug} className="border-b border-slate-50 last:border-0">
                <td className="px-5 py-4">
                  <div className="font-semibold text-slate-900">{blog.title}</div>
                  <div className="text-xs text-slate-400 mt-0.5">/{blog.slug}</div>
                </td>
                <td className="px-5 py-4 hidden sm:table-cell">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                      blog.published
                        ? "bg-green-50 text-green-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {blog.published ? (
                      <>
                        <Eye className="h-3 w-3" /> Published
                      </>
                    ) : (
                      <>
                        <EyeOff className="h-3 w-3" /> Draft
                      </>
                    )}
                  </span>
                </td>
                <td className="px-5 py-4 text-slate-500 hidden md:table-cell">
                  {blog.category}
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-2">
                    {blog.published && (
                      <Link
                        href={`/blogs/${blog.slug}`}
                        target="_blank"
                        className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                        title="View"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                    <Link
                      href={`/admin/edit/${blog.slug}`}
                      className="p-2 rounded-lg text-primary-600 hover:bg-primary-50"
                      title="Edit"
                    >
                      <Pencil className="h-4 w-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(blog.slug, blog.title)}
                      disabled={busy === blog.slug}
                      className="p-2 rounded-lg text-red-600 hover:bg-red-50 disabled:opacity-50"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
