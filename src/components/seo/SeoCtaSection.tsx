import { Zap, MessageCircle, ClipboardCheck, Phone } from "lucide-react";
import { waLink } from "@/lib/seo/config";

interface SeoCtaSectionProps {
  areaName?: string;
  serviceName?: string;
}

export default function SeoCtaSection({ areaName, serviceName }: SeoCtaSectionProps) {
  const context = areaName ?? serviceName ?? "Ahmedabad";
  const inspectionMsg = `Hello Yavix! I'd like to book a free solar inspection in ${context}.`;
  const quoteMsg = `Hello Yavix! I'd like an instant solar cleaning quote for ${context}.`;
  const amcMsg = `Hello Yavix! I'd like AMC pricing for solar panel cleaning in ${context}.`;
  const waMsg = `Hello Yavix! I need solar panel cleaning in ${context}.`;

  const ctas = [
    {
      label: "Book Free Solar Inspection",
      href: waLink(inspectionMsg),
      icon: ClipboardCheck,
      style: "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25",
    },
    {
      label: "Get Instant Cleaning Quote",
      href: waLink(quoteMsg),
      icon: Zap,
      style: "bg-white text-primary-600 border-2 border-primary-500 hover:bg-primary-50",
    },
    {
      label: "WhatsApp Now",
      href: waLink(waMsg),
      icon: MessageCircle,
      style: "bg-[#16a34a] text-white hover:bg-[#15803d] shadow-lg shadow-green-500/20",
    },
    {
      label: "Request AMC Pricing",
      href: waLink(amcMsg),
      icon: Phone,
      style: "bg-slate-800 text-white hover:bg-slate-900",
    },
  ];

  return (
    <section className="rounded-3xl bg-gradient-to-br from-primary-50 to-blue-50 border border-primary-100 p-8 sm:p-10 my-12">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 mb-3 text-center">
        Ready to Maximize Your Solar Output?
      </h2>
      <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
        Book professional solar panel cleaning in {context}. Fast response, transparent pricing, 200+ happy clients.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ctas.map((cta) => (
          <a
            key={cta.label}
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-semibold transition-all active:scale-95 ${cta.style}`}
          >
            <cta.icon className="h-4 w-4 shrink-0" />
            {cta.label}
          </a>
        ))}
      </div>
    </section>
  );
}
