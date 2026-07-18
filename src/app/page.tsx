import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import ClientsSection from "@/components/home/ClientsSection";
import WhyCleaningSection from "@/components/home/WhyCleaningSection";
import WhyChooseYavixSection from "@/components/home/WhyChooseYavixSection";
import ServicesSection from "@/components/home/ServicesSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import { SITE_URL, PRIMARY_KEYWORDS } from "@/lib/seo/config";
import { getAhmedabadLocations, locationPageSlug } from "@/lib/seo/locations";
import { SEO_SERVICES } from "@/lib/seo/services";
import { faqSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title:
    "Solar Panel Cleaning Services in Ahmedabad | Residential, Commercial & Industrial | Yavix Energy",
  description:
    "Professional solar panel cleaning services in Ahmedabad & Gujarat. Residential, commercial, industrial, rooftop, solar farm and AMC cleaning. Improve efficiency and maximize energy output. Book today.",
  keywords: PRIMARY_KEYWORDS.join(", "),
  alternates: { canonical: SITE_URL },
  openGraph: {
    title:
      "Solar Panel Cleaning Services in Ahmedabad | Yavix Energy",
    description:
      "Professional solar panel cleaning in Ahmedabad. Residential, commercial & industrial. 200+ happy clients.",
    url: SITE_URL,
    type: "website",
    locale: "en_IN",
    siteName: "Yavix Energy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Panel Cleaning Ahmedabad | Yavix Energy",
    description:
      "Professional solar panel cleaning services in Ahmedabad. Book free inspection via WhatsApp.",
  },
};

const homeFaqs = [
  {
    question: "How often should solar panels be cleaned in Ahmedabad?",
    answer:
      "Most Ahmedabad properties need solar panel cleaning every 10–14 days. Industrial areas like Naroda, Vatva and Odhav may need weekly cleaning due to higher dust levels.",
  },
  {
    question: "What is the best solar panel cleaning company in Ahmedabad?",
    answer:
      "Yavix Energy is trusted by 200+ clients for professional solar panel cleaning in Ahmedabad using demineralized water, soft brushes and certified safety practices.",
  },
  {
    question: "Does cleaning solar panels increase output?",
    answer:
      "Yes. Dirty panels in Gujarat can lose 20–35% efficiency. Professional cleaning restores generation and lowers electricity bills.",
  },
];

export default function HomePage() {
  const topLocations = getAhmedabadLocations().slice(0, 10);
  const topServices = SEO_SERVICES.slice(0, 4);

  const faqLd = faqSchema(homeFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <HeroSection />
      <ClientsSection />
      <WhyCleaningSection />
      <ServicesSection />
      <WhyChooseYavixSection />
      <ReviewsSection />

      {/* SEO internal linking hub */}
      <section className="section-pad bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-primary-900 mb-2 text-center">
            Solar Panel Cleaning Across <span className="gradient-text">Ahmedabad</span>
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            Professional solar panel cleaning service in every major Ahmedabad locality and nearby cities.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold text-primary-900 mb-4">Popular Services</h3>
              <ul className="space-y-2">
                {topServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-primary-600 hover:underline text-sm">
                      {s.h1}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="text-primary-600 font-semibold hover:underline text-sm">
                    View all services →
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-primary-900 mb-4">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {topLocations.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/${locationPageSlug(l.slug)}`}
                    className="px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-xs font-semibold border border-primary-100 hover:bg-primary-100 transition-colors"
                  >
                    {l.name}
                  </Link>
                ))}
                <Link
                  href="/locations"
                  className="px-3 py-1.5 rounded-lg bg-primary-500 text-white text-xs font-semibold hover:bg-primary-600 transition-colors"
                >
                  All Locations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
