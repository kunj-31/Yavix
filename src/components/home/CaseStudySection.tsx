"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

const cases = [
  {
    client: "Residential – Satellite",
    panels: "10kW · 32 panels",
    problem: "Output dropped by 28% over 4 months due to heavy dust accumulation and bird droppings.",
    solution: "Single deep-clean session using purified water and microfiber treatment.",
    before: "7.2 kWh/day",
    after: "10.1 kWh/day",
    gain: "+40%",
    color: "from-blue-500 to-primary-600",
  },
  {
    client: "Commercial – GIDC Naroda",
    panels: "50kW · 160 panels",
    problem: "Factory rooftop panels hadn't been cleaned in 18 months. Thick industrial soot reducing efficiency by 35%.",
    solution: "3-hour team clean with scaffolding, deionised water spray and output verification.",
    before: "32.5 kWh/day",
    after: "48.8 kWh/day",
    gain: "+50%",
    color: "from-cyan-500 to-teal-500",
  },
  {
    client: "Industrial – Vatva Estate",
    panels: "100kW · 320 panels",
    problem: "Large rooftop system with 2 years of zero maintenance. Bird nesting and heavy grime caused hot spots.",
    solution: "Full inspection, hot spot removal, deep clean across 320 panels. 2-day operation.",
    before: "61 kWh/day",
    after: "92 kWh/day",
    gain: "+51%",
    color: "from-green-500 to-cyan-500",
  },
];

export default function CaseStudySection() {
  return (
    <section className="section-pad bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-4 border border-primary-100">Results</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-900">
              Real <span className="gradient-text">Case Studies</span>
            </h2>
          </div>
          <Link href="/case-study" className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary-600 hover:text-primary-700 group whitespace-nowrap">
            View All Cases <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(0,102,255,0.14)" }}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${c.color} p-6 text-white`}>
                <p className="text-[11px] font-semibold tracking-widest uppercase opacity-80 mb-1">{c.panels}</p>
                <h3 className="font-bold text-lg">{c.client}</h3>
                <div className="flex items-center gap-2 mt-3">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-3xl font-black">{c.gain}</span>
                  <span className="text-[13px] opacity-80">efficiency gain</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <p className="text-[11px] font-semibold text-red-500 uppercase tracking-wide mb-1">The Problem</p>
                  <p className="text-[13px] text-gray-600 leading-relaxed">{c.problem}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-green-600 uppercase tracking-wide mb-1">Our Solution</p>
                  <p className="text-[13px] text-gray-600 leading-relaxed">{c.solution}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  <div className="bg-red-50 rounded-xl p-3 text-center">
                    <p className="text-[10px] text-red-400 font-semibold uppercase">Before</p>
                    <p className="font-bold text-[15px] text-red-600">{c.before}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-3 text-center">
                    <p className="text-[10px] text-green-500 font-semibold uppercase">After</p>
                    <p className="font-bold text-[15px] text-green-600">{c.after}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
