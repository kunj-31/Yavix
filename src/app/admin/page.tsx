import Link from "next/link";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { redirect } from "next/navigation";
import { getAllBlogsAdmin } from "@/lib/db/blogs";
import AdminBlogList from "@/components/admin/AdminBlogList";
import LogoutButton from "@/components/admin/LogoutButton";
import { Plus } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  let blogs: {
    slug: string;
    title: string;
    category: string;
    published: boolean;
  }[] = [];
  let error = "";
  try {
    const rows = await getAllBlogsAdmin();
    blogs = rows.map((b) => ({
      slug: b.slug,
      title: b.title,
      category: b.category,
      published: b.published,
    }));
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to load blogs";
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Blog Admin</h1>
          <p className="text-slate-500 mt-1">
            Create, edit, and delete blog posts. Changes appear on the public Blogs page.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/createblog"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-500 text-white px-5 py-2.5 text-sm font-semibold hover:bg-primary-600"
          >
            <Plus className="h-4 w-4" />
            Create Blog
          </Link>
          <LogoutButton />
        </div>
      </div>

      {error ? (
        <div className="rounded-2xl bg-red-50 border border-red-100 text-red-700 p-4 text-sm">
          {error}
        </div>
      ) : (
        <AdminBlogList initialBlogs={blogs} />
      )}
    </div>
  );
}
