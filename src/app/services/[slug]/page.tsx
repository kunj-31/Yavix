import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getServiceSlugs,
  getCommercialServices,
  type SeoService,
} from "@/lib/seo/services";
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
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  const isMoneyPage = slug === "solar-panel-cleaning-ahmedabad";
  const fullTitle = isMoneyPage
    ? `${service.title} | Yavix Energy`
    : `${service.title} | ${BRAND_NAME}`;

  return {
    title: isMoneyPage ? { absolute: fullTitle } : fullTitle,
    description: service.metaDescription,
    keywords: service.keywords.join(", "),
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${slug}`,
      type: "website",
      images: [{ url: `${SITE_URL}${service.image}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.metaDescription,
    },
  };
}

function ServiceContent({ service }: { service: SeoService }) {
  const url = `${SITE_URL}/services/${service.slug}`;

  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Services", url: `${SITE_URL}/services` },
      { name: service.h1, url },
    ]),
    serviceSchema({
      name: service.h1,
      description: service.metaDescription,
      url,
    }),
    faqSchema(service.faqs),
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
              { label: "Services", href: "/services" },
              { label: service.h1 },
            ]}
          />

          <article>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-900 mb-6 leading-tight">
              {service.h1}
            </h1>

            <div className="aspect-video rounded-3xl overflow-hidden mb-8 shadow-lg">
              <img
                src={service.image}
                alt={service.h1}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-lg leading-relaxed">{service.intro}</p>

              {service.slug === "solar-panel-cleaning-ahmedabad" && (
                <>
                  <h2 className="text-2xl font-extrabold text-primary-900 mt-10">
                    Why Choose Yavix for Solar Panel Cleaning in Ahmedabad
                  </h2>
                  <p>
                    Searching for <strong>solar panel cleaning in Ahmedabad</strong> or the{" "}
                    <strong>best solar panel cleaning in Ahmedabad</strong>? Yavix Energy focuses only
                    on professional solar washing and maintenance — not equipment sales. That means
                    faster response, trained cleaners, and methods that protect your panels. We serve
                    residential rooftops, commercial buildings and industrial plants across Ahmedabad
                    and nearby GIDC zones including Naroda, Vatva, Odhav, Changodar and Sanand.
                  </p>
                  <p>
                    Our <strong>solar panel cleaning service in Ahmedabad</strong> uses demineralized
                    water to avoid white stains, soft brushes to protect anti-reflective glass, and
                    optional AMC plans so you never miss a cleaning cycle. Transparent quotes, before/
                    after checks and WhatsApp booking make us a preferred solar cleaning company in
                    Ahmedabad for homes and businesses.
                  </p>
                </>
              )}

              <h2 className="text-2xl font-extrabold text-primary-900 mt-10">Key Benefits</h2>
              <ul className="space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-extrabold text-primary-900 mt-10">Our Process</h2>
              <div className="grid gap-4">
                {service.process.map((step, i) => (
                  <div key={step.step} className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-primary-900">{step.step}</h3>
                      <p className="text-gray-600 mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-extrabold text-primary-900 mt-10">Industries We Serve</h2>
              <div className="flex flex-wrap gap-2">
                {service.industries.map((ind) => (
                  <span
                    key={ind}
                    className="px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold border border-primary-100"
                  >
                    {ind}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mt-8">
                Yavix Energy is among the best solar panel cleaning companies in Ahmedabad, trusted by
                200+ clients for professional solar panel cleaning service, solar AMC plans and
                performance-focused maintenance. Whether you need residential solar panel cleaning,
                commercial solar panel cleaning or industrial solar cleaning in Ahmedabad, our team delivers
                scratch-free results with demineralized water and certified safety practices.
              </p>
            </div>

            {(service.group === "commercial" ||
              service.slug === "commercial-solar-panel-cleaning" ||
              service.slug === "industrial-solar-panel-cleaning") && (
              <section className="my-10 rounded-3xl bg-white border border-primary-100 p-6 sm:p-8">
                <h2 className="text-xl font-extrabold text-primary-900 mb-2">
                  Commercial Property Types We Clean
                </h2>
                <p className="text-sm text-gray-500 mb-5">
                  Dedicated pages for every commercial keyword — office, hospital, school, mall,
                  warehouse, hotel and factory solar panel cleaning in Ahmedabad.
                </p>
                <div className="flex flex-wrap gap-2">
                  {getCommercialServices()
                    .filter((s) => s.slug !== service.slug)
                    .map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="px-3 py-2 rounded-xl bg-primary-50 text-primary-700 text-xs font-semibold border border-primary-100 hover:bg-primary-100 transition-colors"
                      >
                        {s.h1.replace(" in Ahmedabad", "")}
                      </Link>
                    ))}
                  <Link
                    href="/services/commercial-solar-panel-cleaning"
                    className="px-3 py-2 rounded-xl bg-primary-500 text-white text-xs font-semibold hover:bg-primary-600 transition-colors"
                  >
                    All Commercial Cleaning
                  </Link>
                </div>
              </section>
            )}

            <SeoCtaSection serviceName={service.h1} />
            <FaqSection faqs={service.faqs} />
            <InternalLinks currentServiceSlug={service.slug} />
          </article>
        </div>
      </main>
    </>
  );
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceContent service={service} />;
}
