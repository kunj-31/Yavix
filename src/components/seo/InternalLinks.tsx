import Link from "next/link";
import { SEO_SERVICES } from "@/lib/seo/services";
import { SEO_LOCATIONS, locationPageSlug } from "@/lib/seo/locations";
import { BLOGS } from "@/lib/blogs";

interface InternalLinksProps {
  currentServiceSlug?: string;
  currentLocationSlug?: string;
}

export default function InternalLinks({
  currentServiceSlug,
  currentLocationSlug,
}: InternalLinksProps) {
  const services = SEO_SERVICES.filter((s) => s.slug !== currentServiceSlug).slice(0, 3);
  const locations = SEO_LOCATIONS.filter((l) => l.slug !== currentLocationSlug).slice(0, 6);
  const blogs = BLOGS.slice(0, 2);

  return (
    <section className="my-12 border-t border-gray-100 pt-12">
      <h2 className="text-xl font-extrabold text-primary-900 mb-6">Explore More</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Services</h3>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm text-primary-600 hover:underline">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Locations</h3>
          <ul className="space-y-2">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/${locationPageSlug(l.slug)}`}
                  className="text-sm text-primary-600 hover:underline"
                >
                  Solar Panel Cleaning {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Articles</h3>
          <ul className="space-y-2">
            {blogs.map((b) => (
              <li key={b.slug}>
                <Link href={`/blogs/${b.slug}`} className="text-sm text-primary-600 hover:underline">
                  {b.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
