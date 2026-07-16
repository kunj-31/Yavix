import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import BlogForm from "@/components/admin/BlogForm";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function CreateBlogPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <div>
      <Link
        href="/admin"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:underline mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Admin
      </Link>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Create Blog</h1>
      <p className="text-slate-500 mb-8">
        Fill in the details below. Published blogs appear instantly on{" "}
        <Link href="/blogs" className="text-primary-600 hover:underline">
          /blogs
        </Link>
        .
      </p>
      <BlogForm mode="create" />
    </div>
  );
}
