import type { Metadata } from "next";
import Link from "next/link";
import { SEO_SERVICES } from "@/lib/seo/services";
import { SITE_URL, BRAND_NAME } from "@/lib/seo/config";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SeoCtaSection from "@/components/seo/SeoCtaSection";

export const metadata: Metadata = {
  title: `Solar Panel Cleaning Services | ${BRAND_NAME} Ahmedabad`,
  description:
    "Complete solar panel cleaning services in Ahmedabad — residential, commercial, industrial, solar farm cleaning, AMC, salt removal, bird dropping removal and performance inspection.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: `Solar Panel Cleaning Services | ${BRAND_NAME}`,
    description: "Professional solar cleaning services for every property type in Ahmedabad and Gujarat.",
    url: `${SITE_URL}/services`,
    type: "website",
  },
};

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-900 mb-4">
          Solar Panel Cleaning <span className="gradient-text">Services</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mb-12 text-lg">
          Yavix Energy offers end-to-end solar panel cleaning and maintenance services across Ahmedabad.
          Choose the service that matches your property type and book via WhatsApp.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SEO_SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-3xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all"
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="font-extrabold text-lg text-primary-900 group-hover:text-primary-600 mb-2">
                {service.h1}
              </h2>
              <p className="text-sm text-gray-500 line-clamp-3">{service.metaDescription}</p>
            </Link>
          ))}
        </div>
        <SeoCtaSection serviceName="Ahmedabad" />
      </div>
    </main>
  );
}
