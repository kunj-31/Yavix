import type { Metadata } from "next";
import Link from "next/link";
import { getCoreServices, getCommercialServices } from "@/lib/seo/services";
import { SITE_URL, BRAND_NAME } from "@/lib/seo/config";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SeoCtaSection from "@/components/seo/SeoCtaSection";

export const metadata: Metadata = {
  title: `Solar Panel Cleaning Services | ${BRAND_NAME} Ahmedabad`,
  description:
    "Residential, commercial and industrial solar panel cleaning in Ahmedabad — plus office, hospital, school, mall, warehouse, hotel and factory cleaning pages.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: `Solar Panel Cleaning Services | ${BRAND_NAME}`,
    description:
      "Professional solar cleaning for homes, offices, hospitals, schools, malls, warehouses, hotels and factories in Ahmedabad.",
    url: `${SITE_URL}/services`,
    type: "website",
  },
};

function ServiceCard({
  slug,
  title,
  h1,
  metaDescription,
  image,
}: {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  image: string;
}) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group rounded-3xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all"
    >
      <div className="aspect-video rounded-2xl overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h2 className="font-extrabold text-lg text-primary-900 group-hover:text-primary-600 mb-2">
        {h1}
      </h2>
      <p className="text-sm text-gray-500 line-clamp-3">{metaDescription}</p>
    </Link>
  );
}

export default function ServicesIndexPage() {
  const core = getCoreServices();
  const commercial = getCommercialServices();

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-900 mb-4">
          Solar Panel Cleaning <span className="gradient-text">Services</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mb-12 text-lg">
          Yavix Energy offers end-to-end solar panel cleaning across Ahmedabad — for homes,
          businesses and every commercial property type. Choose your service and book via WhatsApp.
        </p>

        <h2 className="text-2xl font-extrabold text-primary-900 mb-6">Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {core.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>

        <h2 className="text-2xl font-extrabold text-primary-900 mb-2">
          Commercial Solar Cleaning by Property Type
        </h2>
        <p className="text-gray-500 mb-6 max-w-3xl">
          Dedicated landing pages for office, hospital, school, mall, warehouse, hotel and factory
          solar panel cleaning in Ahmedabad — built for commercial search intent.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commercial.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>

        <SeoCtaSection serviceName="Ahmedabad" />
      </div>
    </main>
  );
}
