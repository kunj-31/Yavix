import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BRAND_NAME } from "@/lib/seo/config";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SeoCtaSection from "@/components/seo/SeoCtaSection";
import FaqSection from "@/components/seo/FaqSection";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: `Solar Panel Cleaning Guides & FAQs Ahmedabad | ${BRAND_NAME}`,
  description:
    "Long-tail guides: how often to clean solar panels in Ahmedabad, cleaning cost, best company, bird dropping & hard water stain removal, solar AMC and more.",
  keywords: [
    "how often should solar panels be cleaned in Ahmedabad",
    "best solar panel cleaning company in Ahmedabad",
    "solar panel cleaning cost in Ahmedabad",
    "solar panel cleaning near me",
    "does cleaning solar panels increase output",
    "how much efficiency is lost due to dust on solar panels",
    "solar panel bird dropping cleaning Ahmedabad",
    "solar panel hard water stain removal Ahmedabad",
    "solar panel salt deposit cleaning Ahmedabad",
    "solar panel annual maintenance contract Ahmedabad",
  ].join(", "),
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: {
    title: "Solar Panel Cleaning Guides Ahmedabad",
    description: "Answers to the most searched solar cleaning questions in Ahmedabad.",
    url: `${SITE_URL}/guides`,
    type: "website",
  },
};

const longTailLinks = [
  {
    q: "How often should solar panels be cleaned in Ahmedabad?",
    href: "/blogs/how-often-should-solar-panels-be-cleaned",
  },
  {
    q: "Best solar panel cleaning company in Ahmedabad",
    href: "/blogs/best-solar-panel-cleaning-company-in-ahmedabad",
  },
  {
    q: "Solar panel cleaning cost in Ahmedabad",
    href: "/blogs/solar-panel-cleaning-cost-in-ahmedabad",
  },
  {
    q: "Does cleaning solar panels increase output?",
    href: "/blogs/how-dust-affects-solar-panel-performance",
  },
  {
    q: "How much efficiency is lost due to dust on solar panels?",
    href: "/blogs/how-much-energy-is-lost-due-to-dirty-solar-panels",
  },
  {
    q: "Solar panel bird dropping cleaning Ahmedabad",
    href: "/blogs/solar-panel-bird-dropping-cleaning-ahmedabad",
  },
  {
    q: "Solar panel hard water stain removal Ahmedabad",
    href: "/blogs/solar-panel-hard-water-stain-removal-ahmedabad",
  },
  {
    q: "Solar panel salt deposit cleaning Ahmedabad",
    href: "/services/salt-deposit-removal",
  },
  {
    q: "Solar panel annual maintenance contract Ahmedabad",
    href: "/blogs/solar-panel-amc-explained",
  },
  {
    q: "Solar panel cleaning near me",
    href: "/locations",
  },
];

const faqs = [
  {
    question: "How often should solar panels be cleaned in Ahmedabad?",
    answer:
      "Most Ahmedabad properties need professional cleaning every 10–14 days. Industrial zones like Naroda, Vatva and Odhav often need weekly cleaning.",
  },
  {
    question: "What is the solar panel cleaning cost in Ahmedabad?",
    answer:
      "Cost depends on system size, roof access and whether you choose one-time cleaning or an AMC. WhatsApp Yavix for an instant quote.",
  },
  {
    question: "Does cleaning solar panels increase output?",
    answer:
      "Yes. Dust and soiling in Gujarat can reduce output by 20–35%. Professional cleaning restores generation and helps lower electricity bills.",
  },
  {
    question: "Who is the best solar panel cleaning company in Ahmedabad?",
    answer:
      "Look for demineralized water, no standing on panels, safety gear and AMC options. Yavix Energy serves homes and industries across Ahmedabad.",
  },
];

export default function GuidesPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Guides", url: `${SITE_URL}/guides` },
    ]),
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-900 mb-4">
            Solar Panel Cleaning <span className="gradient-text">Guides</span> — Ahmedabad
          </h1>
          <p className="text-gray-600 text-lg mb-10">
            Quick answers to the most searched long-tail questions about solar panel cleaning in
            Ahmedabad — frequency, cost, ROI, bird droppings, hard water stains and AMC.
          </p>

          <section className="rounded-3xl bg-white border border-gray-100 p-6 sm:p-8 mb-10">
            <h2 className="text-xl font-extrabold text-primary-900 mb-5">
              Popular Long-Tail Topics
            </h2>
            <ul className="space-y-3">
              {longTailLinks.map((item) => (
                <li key={item.href + item.q}>
                  <Link
                    href={item.href}
                    className="text-primary-600 font-semibold hover:underline text-sm sm:text-base"
                  >
                    {item.q} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <FaqSection faqs={faqs} title="Long-Tail FAQs" />
          <SeoCtaSection serviceName="Ahmedabad" />
        </div>
      </main>
    </>
  );
}
