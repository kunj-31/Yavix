import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated, requireAdminJson } from "@/lib/admin-auth";
import {
  deleteBlog,
  getBlogBySlugAdmin,
  updateBlog,
} from "@/lib/db/blogs";
import { revalidatePath } from "next/cache";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function GET(_req: NextRequest, { params }: Props) {
  if (!(await isAdminAuthenticated())) return requireAdminJson();

  const { slug } = await params;
  try {
    const blog = await getBlogBySlugAdmin(slug);
    if (!blog) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ blog });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to load blog";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: Props) {
  if (!(await isAdminAuthenticated())) return requireAdminJson();

  const { slug } = await params;
  try {
    const body = await req.json();
    const tags = body.tags
      ? Array.isArray(body.tags)
        ? body.tags.map(String)
        : String(body.tags)
            .split(",")
            .map((t: string) => t.trim())
            .filter(Boolean)
      : undefined;

    const blog = await updateBlog(slug, {
      title: body.title,
      newSlug: body.slug,
      excerpt: body.excerpt,
      content: body.content,
      category: body.category,
      author: body.author,
      tags,
      emoji: body.emoji,
      color: body.color,
      published: body.published,
      metaDescription: body.metaDescription,
      metaKeywords: body.metaKeywords,
    });

    revalidatePath("/blogs");
    revalidatePath(`/blogs/${slug}`);
    revalidatePath(`/blogs/${blog.slug}`);
    revalidatePath("/sitemap.xml");

    return NextResponse.json({ blog });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to update blog";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, { params }: Props) {
  if (!(await isAdminAuthenticated())) return requireAdminJson();

  const { slug } = await params;
  try {
    await deleteBlog(slug);
    revalidatePath("/blogs");
    revalidatePath(`/blogs/${slug}`);
    revalidatePath("/sitemap.xml");
    return NextResponse.json({ ok: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to delete blog";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
