import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllLocationPageSlugs,
  getLocationByPageSlug,
  buildLocationContent,
  buildLocationFaqs,
  getLocationKeywords,
  type SeoLocation,
} from "@/lib/seo/locations";
import { SITE_URL, BRAND_NAME } from "@/lib/seo/config";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/seo/schema";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SeoCtaSection from "@/components/seo/SeoCtaSection";
import FaqSection from "@/components/seo/FaqSection";
import InternalLinks from "@/components/seo/InternalLinks";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLocationPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationByPageSlug(slug);
  if (!location) return { title: "Page Not Found" };

  // City-wide Ahmedabad page: consolidate ranking to homepage (avoid keyword cannibalization)
  if (location.slug === "ahmedabad") {
    const title = "Solar Panel Cleaning in Ahmedabad | Areas We Serve";
    const description =
      "Explore solar panel cleaning across Ahmedabad localities. For city-wide solar panel cleaning in Ahmedabad, see Yavix Energy's main service page and book a free inspection.";
    return {
      title: { absolute: `${title} | ${BRAND_NAME}` },
      description,
      keywords: getLocationKeywords(location).join(", "),
      alternates: { canonical: SITE_URL },
      openGraph: {
        title,
        description,
        url: SITE_URL,
        type: "website",
      },
      robots: { index: true, follow: true },
    };
  }

  const aliasLabel = location.aliases?.[0];
  const title = aliasLabel
    ? `Solar Panel Cleaning ${location.name} & ${aliasLabel} | ${BRAND_NAME}`
    : `Solar Panel Cleaning in ${location.name} | ${BRAND_NAME}`;
  const description = `Solar panel cleaning in ${location.name}${aliasLabel ? ` (${aliasLabel})` : ""}. Residential, commercial & industrial solar cleaning by Yavix Energy. Book free inspection today.`;

  return {
    title,
    description,
    keywords: getLocationKeywords(location).join(", "),
    alternates: { canonical: `${SITE_URL}/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${slug}`,
      type: "website",
    },
    twitter: { card: "summary", title, description },
  };
}

function LocationContent({ location, pageSlug }: { location: SeoLocation; pageSlug: string }) {
  const content = buildLocationContent(location);
  const faqs = buildLocationFaqs(location);
  const url = `${SITE_URL}/${pageSlug}`;
  const { name } = location;

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Locations", url: `${SITE_URL}/locations` },
      { name: `Solar Panel Cleaning ${name}`, url },
    ]),
    serviceSchema({
      name: `Solar Panel Cleaning in ${name}`,
      description: content.intro,
      url,
      area: `${name}, Gujarat, India`,
    }),
    faqSchema(faqs),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="min-h-screen bg-slate-50 pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/locations" },
              { label: `Solar Panel Cleaning ${name}` },
            ]}
          />

          <article>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-900 mb-6 leading-tight">
              Solar Panel Cleaning in {name}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-lg leading-relaxed">{content.intro}</p>
              <p>{content.whyLocal}</p>

              <h2 className="text-2xl font-extrabold text-primary-900 mt-10">
                Residential Solar Panel Cleaning in {name}
              </h2>
              <p>{content.residential}</p>

              <h2 className="text-2xl font-extrabold text-primary-900 mt-10">
                Commercial Solar Panel Cleaning in {name}
              </h2>
              <p>{content.commercial}</p>

              <h2 className="text-2xl font-extrabold text-primary-900 mt-10">
                Industrial Solar Panel Cleaning in {name}
              </h2>
              <p>{content.industrial}</p>

              <h2 className="text-2xl font-extrabold text-primary-900 mt-10">
                Solar Panel Cleaning Service in {name} — Nearby Areas
              </h2>
              <p>{content.nearby}</p>

              <h2 className="text-2xl font-extrabold text-primary-900 mt-10">
                Why Yavix is the Best Solar Panel Cleaning in {name}
              </h2>
              <p>{content.cta}</p>

              <p>
                Professional solar panel cleaning in {name} from Yavix includes demineralized water
                treatment, soft microfiber brushes, safety harnesses and flexible AMC plans. Our solar
                panel maintenance in {name} helps you recover lost generation from dust, bird droppings
                and pollution — making us a top solar panel cleaning company in {name} for homes,
                offices and factories.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services/solar-panel-cleaning-ahmedabad"
                className="text-sm font-semibold text-primary-600 hover:underline"
              >
                All Ahmedabad Services →
              </Link>
              <Link
                href="/services/solar-panel-amc"
                className="text-sm font-semibold text-primary-600 hover:underline"
              >
                Solar AMC Plans →
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold text-primary-600 hover:underline"
              >
                Contact Us →
              </Link>
            </div>

            <SeoCtaSection areaName={name} />
            <FaqSection faqs={faqs} title={`Solar Panel Cleaning FAQs — ${name}`} />
            <InternalLinks currentLocationSlug={location.slug} />
          </article>
        </div>
      </main>
    </>
  );
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationByPageSlug(slug);
  if (!location) notFound();
  return <LocationContent location={location} pageSlug={slug} />;
}
