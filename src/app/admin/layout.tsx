import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Yavix",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">{children}</div>
    </div>
  );
}
