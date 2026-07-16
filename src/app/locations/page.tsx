import type { Metadata } from "next";
import Link from "next/link";
import {
  getAhmedabadLocations,
  getNearbyLocations,
  locationPageSlug,
} from "@/lib/seo/locations";
import { SITE_URL, BRAND_NAME } from "@/lib/seo/config";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SeoCtaSection from "@/components/seo/SeoCtaSection";

export const metadata: Metadata = {
  title: `Solar Panel Cleaning Locations | ${BRAND_NAME} Ahmedabad`,
  description:
    "Find solar panel cleaning services across Ahmedabad localities and nearby cities — Naroda, Nikol, Satellite, Bopal, Gandhinagar and 40+ areas.",
  alternates: { canonical: `${SITE_URL}/locations` },
};

export default function LocationsIndexPage() {
  const ahmedabad = getAhmedabadLocations();
  const nearby = getNearbyLocations();

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Locations" }]} />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-900 mb-4">
          Solar Panel Cleaning <span className="gradient-text">Locations</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mb-12 text-lg">
          Yavix serves Ahmedabad and surrounding cities with professional solar panel cleaning.
          Select your area for local pricing, FAQs and booking.
        </p>

        <h2 className="text-2xl font-extrabold text-primary-900 mb-6">Ahmedabad Localities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12">
          {ahmedabad.map((loc) => (
            <Link
              key={loc.slug}
              href={`/${locationPageSlug(loc.slug)}`}
              className="px-4 py-3 rounded-xl bg-white border border-gray-100 text-sm font-semibold text-primary-700 hover:bg-primary-50 hover:border-primary-200 transition-colors text-center"
            >
              {loc.name}
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-extrabold text-primary-900 mb-6">Nearby Cities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-12">
          {nearby.map((loc) => (
            <Link
              key={loc.slug}
              href={`/${locationPageSlug(loc.slug)}`}
              className="px-4 py-3 rounded-xl bg-white border border-gray-100 text-sm font-semibold text-primary-700 hover:bg-primary-50 hover:border-primary-200 transition-colors text-center"
            >
              {loc.name}
            </Link>
          ))}
        </div>

        <SeoCtaSection areaName="Ahmedabad" />
      </div>
    </main>
  );
}
