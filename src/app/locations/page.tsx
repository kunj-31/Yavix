import type { Metadata } from "next";
import Link from "next/link";
import {
  getAhmedabadLocations,
  getNearbyLocations,
  getIndustrialLocations,
  locationPageSlug,
} from "@/lib/seo/locations";
import { SITE_URL, BRAND_NAME } from "@/lib/seo/config";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SeoCtaSection from "@/components/seo/SeoCtaSection";

export const metadata: Metadata = {
  title: `Solar Panel Cleaning Locations | Ahmedabad GIDC & Gujarat | ${BRAND_NAME}`,
  description:
    "Solar panel cleaning across Ahmedabad localities and industrial areas — Naroda GIDC, Vatva GIDC, Changodar, Sanand, Kalol and 70+ service areas in Gujarat.",
  keywords:
    "solar panel cleaning Ahmedabad, Naroda GIDC solar cleaning, Vatva GIDC solar cleaning, Changodar GIDC, Sanand GIDC, industrial solar cleaning Gujarat",
  alternates: { canonical: `${SITE_URL}/locations` },
};

function AreaGrid({
  items,
}: {
  items: { slug: string; name: string }[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-12">
      {items.map((loc) => (
        <Link
          key={loc.slug}
          href={`/${locationPageSlug(loc.slug)}`}
          className="px-4 py-3 rounded-xl bg-white border border-gray-100 text-sm font-semibold text-primary-700 hover:bg-primary-50 hover:border-primary-200 transition-colors text-center"
        >
          {loc.name}
        </Link>
      ))}
    </div>
  );
}

export default function LocationsIndexPage() {
  const localities = getAhmedabadLocations();
  const east = getIndustrialLocations("industrial-east");
  const south = getIndustrialLocations("industrial-south");
  const west = getIndustrialLocations("industrial-west");
  const nearby = getNearbyLocations();

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Locations" }]} />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-900 mb-4">
          Solar Panel Cleaning <span className="gradient-text">Locations</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mb-12 text-lg">
          Yavix serves Ahmedabad localities, industrial GIDC belts and nearby Gujarat cities.
          Select your area for local service details and WhatsApp booking.
        </p>

        <h2 className="text-2xl font-extrabold text-primary-900 mb-6">Ahmedabad Localities</h2>
        <AreaGrid items={localities} />

        <h2 className="text-2xl font-extrabold text-primary-900 mb-2">
          East Ahmedabad Industrial Areas
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Naroda GIDC, Kathwada, Odhav, Vatva, Narol, Pirana and surrounding industrial belts.
        </p>
        <AreaGrid items={east} />

        <h2 className="text-2xl font-extrabold text-primary-900 mb-2">
          South Ahmedabad Industrial Areas
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Changodar GIDC, Moraiya GIDC, Aslali, Bavla, Sarkhej, Sanathal and related zones.
        </p>
        <AreaGrid items={south} />

        <h2 className="text-2xl font-extrabold text-primary-900 mb-2">
          West / North Ahmedabad & GIDC Belts
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Sanand, Kalol, Kadi, Santej, Chhatral, Rakanpur, Khatraj and north Gujarat industrial zones.
        </p>
        <AreaGrid items={west} />

        <h2 className="text-2xl font-extrabold text-primary-900 mb-6">Nearby Cities</h2>
        <AreaGrid items={nearby} />

        <SeoCtaSection areaName="Ahmedabad" />
      </div>
    </main>
  );
}
