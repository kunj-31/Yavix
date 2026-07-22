import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ClientsSection from "@/components/home/ClientsSection";
import WhyCleaningSection from "@/components/home/WhyCleaningSection";
import WhyChooseYavixSection from "@/components/home/WhyChooseYavixSection";
import ServicesSection from "@/components/home/ServicesSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import { SITE_URL, PRIMARY_KEYWORDS } from "@/lib/seo/config";
import { faqSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: {
    absolute:
      "Solar Panel Cleaning in Ahmedabad | Best Solar Panel Cleaning Company | Yavix Energy",
  },
  description:
    "Solar panel cleaning in Ahmedabad by Yavix Energy — best solar panel cleaning for homes, offices & industries. Professional service, demineralized water, 200+ happy clients. Book free inspection.",
  keywords: PRIMARY_KEYWORDS.join(", "),
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Solar Panel Cleaning in Ahmedabad | Best Solar Cleaning | Yavix Energy",
    description:
      "Best solar panel cleaning in Ahmedabad. Residential, commercial & industrial. 200+ happy clients. Book today.",
    url: SITE_URL,
    type: "website",
    locale: "en_IN",
    siteName: "Yavix Energy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Panel Cleaning in Ahmedabad | Yavix Energy",
    description:
      "Best solar panel cleaning in Ahmedabad. Professional service for homes, offices & industries.",
  },
};

const homeFaqs = [
  {
    question: "What is the best solar panel cleaning in Ahmedabad?",
    answer:
      "Yavix Energy provides the best solar panel cleaning in Ahmedabad with demineralized water, soft brushes, safety-certified crews and 200+ satisfied residential, commercial and industrial clients.",
  },
  {
    question: "Who offers solar panel cleaning in Ahmedabad near me?",
    answer:
      "Yavix Energy offers solar panel cleaning in Ahmedabad across Satellite, Bopal, Naroda, Vatva, Nikol, Sanand, Changodar and all major localities — book via WhatsApp for same-day response.",
  },
  {
    question: "How often should solar panels be cleaned in Ahmedabad?",
    answer:
      "Most Ahmedabad properties need solar panel cleaning every 10–14 days. Industrial areas like Naroda, Vatva and Odhav may need weekly cleaning due to higher dust levels.",
  },
  {
    question: "Does cleaning solar panels increase output?",
    answer:
      "Yes. Dirty panels in Gujarat can lose 20–35% efficiency. Professional solar panel cleaning in Ahmedabad restores generation and lowers electricity bills.",
  },
];

export default function HomePage() {
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

      {/* On-page SEO block for head terms */}
      <section className="section-pad bg-slate-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-primary-900 mb-4 text-center">
            Solar Panel Cleaning in <span className="gradient-text">Ahmedabad</span>
          </h2>
          <div className="text-gray-600 space-y-4 text-base leading-relaxed">
            <p>
              Yavix Energy delivers professional <strong>solar panel cleaning in Ahmedabad</strong> for
              homeowners, offices, factories and solar plants. If you are searching for the{" "}
              <strong>best solar panel cleaning in Ahmedabad</strong>, our team restores lost output
              caused by dust, pollution, bird droppings and hard-water stains using demineralized water
              and scratch-free brushes.
            </p>
            <p>
              We provide residential, commercial and industrial <strong>solar panel cleaning services
              in Ahmedabad</strong> — including Satellite, Bopal, Naroda, Vatva, Nikol, Maninagar,
              Sanand GIDC and Changodar. Flexible one-time washes and solar AMC plans make regular
              maintenance simple and affordable.
            </p>
            <p>
              Choose Yavix for transparent pricing, safety-certified crews and fast WhatsApp booking.
              Get the <strong>best solar panel cleaning company in Ahmedabad</strong> experience —
              book a free inspection today.
            </p>
          </div>
          <ul className="mt-8 space-y-3 text-sm text-gray-600">
            {homeFaqs.map((faq) => (
              <li key={faq.question}>
                <p className="font-semibold text-primary-900">{faq.question}</p>
                <p className="mt-1">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
