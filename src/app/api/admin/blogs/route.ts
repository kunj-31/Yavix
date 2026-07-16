import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated, requireAdminJson } from "@/lib/admin-auth";
import { createBlog, getAllBlogsAdmin } from "@/lib/db/blogs";
import { revalidatePath } from "next/cache";

export async function GET() {
  if (!(await isAdminAuthenticated())) return requireAdminJson();

  try {
    const blogs = await getAllBlogsAdmin();
    return NextResponse.json({ blogs });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to load blogs";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!(await isAdminAuthenticated())) return requireAdminJson();

  try {
    const body = await req.json();
    if (!body.title?.trim() || !body.excerpt?.trim() || !body.content?.trim()) {
      return NextResponse.json(
        { error: "Title, excerpt and content are required" },
        { status: 400 },
      );
    }

    const tags = Array.isArray(body.tags)
      ? body.tags.map(String)
      : String(body.tags || "")
          .split(",")
          .map((t: string) => t.trim())
          .filter(Boolean);

    const blog = await createBlog({
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt,
      content: body.content,
      category: body.category,
      author: body.author,
      tags,
      emoji: body.emoji,
      color: body.color,
      published: body.published !== false,
      metaDescription: body.metaDescription,
      metaKeywords: body.metaKeywords,
    });

    revalidatePath("/blogs");
    revalidatePath(`/blogs/${blog.slug}`);
    revalidatePath("/sitemap.xml");

    return NextResponse.json({ blog }, { status: 201 });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to create blog";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
