import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getBlogBySlugAdmin } from "@/lib/db/blogs";
import BlogForm from "@/components/admin/BlogForm";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function EditBlogPage({ params }: Props) {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const { slug } = await params;
  const blog = await getBlogBySlugAdmin(slug);
  if (!blog) notFound();

  // Serialize for client component (no Date objects)
  const initial = {
    slug: blog.slug,
    title: blog.title,
    excerpt: blog.excerpt,
    content: blog.content,
    category: blog.category,
    author: blog.author,
    tags: blog.tags,
    emoji: blog.emoji,
    color: blog.color,
    published: blog.published,
    date: blog.date,
    readTime: blog.readTime,
    metaDescription: blog.metaDescription ?? "",
    metaKeywords: blog.metaKeywords ?? "",
  };

  return (
    <div>
      <Link
        href="/admin"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:underline mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Admin
      </Link>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Edit Blog</h1>
      <p className="text-slate-500 mb-8">
        Editing <span className="font-semibold text-slate-700">/{blog.slug}</span>
      </p>
      <BlogForm mode="edit" initial={initial} />
    </div>
  );
}
