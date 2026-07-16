interface FaqSectionProps {
  faqs: { question: string; answer: string }[];
  title?: string;
}

export default function FaqSection({ faqs, title = "Frequently Asked Questions" }: FaqSectionProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 mb-8">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm open:shadow-md transition-shadow"
          >
            <summary className="cursor-pointer font-bold text-primary-900 list-none flex justify-between items-center gap-4">
              {faq.question}
              <span className="text-primary-500 text-xl group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
