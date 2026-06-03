"use client";

import { motion } from "framer-motion";
import { Check, Zap, MessageCircle } from "lucide-react";

const WA = "919274371058";
const wa = (pkg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(`Hello Yavix Energy! I'd like to book the ${pkg} cleaning package.`)}`;

const plans = [
  {
    name: "Starter",
    subtitle: "Residential – Small",
    price: "₹499",
    unit: "/ session",
    capacity: "Up to 5 kW",
    panels: "Up to 16 panels",
    color: "from-blue-500 to-primary-600",
    popular: false,
    features: ["Dry dust removal", "Purified water wash", "Streak-free finish", "Post-clean output check", "WhatsApp report"],
  },
  {
    name: "Standard",
    subtitle: "Residential – Large",
    price: "₹899",
    unit: "/ session",
    capacity: "5 – 10 kW",
    panels: "Up to 32 panels",
    color: "from-primary-500 to-cyan-500",
    popular: true,
    features: ["Everything in Starter", "Deep microfiber clean", "Bird dropping treatment", "Panel inspection report", "Before/after photo", "Priority booking"],
  },
  {
    name: "Pro",
    subtitle: "Commercial",
    price: "₹1,999",
    unit: "/ session",
    capacity: "10 – 50 kW",
    panels: "Up to 160 panels",
    color: "from-cyan-500 to-teal-500",
    popular: false,
    features: ["Everything in Standard", "Full team deployment", "Inverter health check", "Hot spot detection", "Efficiency report PDF", "Quarterly schedule"],
  },
  {
    name: "Industrial",
    subtitle: "Large Scale",
    price: "Custom",
    unit: "quote",
    capacity: "50 kW+",
    panels: "160+ panels",
    color: "from-teal-500 to-green-500",
    popular: false,
    features: ["Everything in Pro", "Scaffold/rope access", "Multi-day operations", "Dedicated account manager", "Monthly SLA contract", "Emergency 24hr service"],
  },
];

const addons = [
  { name: "Annual Maintenance Contract", desc: "4 cleanings/year + priority support", price: "From ₹1,499/yr" },
  { name: "Emergency Clean", desc: "Same-day service within Ahmedabad", price: "₹299 extra" },
  { name: "Inspection Only", desc: "Full panel health assessment report", price: "₹199" },
  { name: "Panel Protection Coating", desc: "Nano-coating for slower dust buildup", price: "₹799" },
];

export default function ShopClient() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-pad bg-hero-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-6 border border-primary-100">Pricing</span>
            <h1 className="text-5xl font-extrabold text-primary-900 mb-4">Simple, Honest <span className="gradient-text">Pricing</span></h1>
            <p className="text-gray-500 text-lg">No hidden charges. Pick a plan, send us a WhatsApp, and we handle the rest.</p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col ${p.popular ? "border-primary-400 shadow-[0_0_0_3px_rgba(0,102,255,0.12)] shadow-card-hover" : "border-gray-100 shadow-sm hover:shadow-card-hover hover:-translate-y-1"}`}>
                {p.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-500 text-white text-[10px] font-bold tracking-wide uppercase">Most Popular</div>
                )}
                <div className={`bg-gradient-to-br ${p.color} p-6 text-white`}>
                  <p className="text-[10px] font-semibold tracking-widest uppercase opacity-75 mb-1">{p.subtitle}</p>
                  <h3 className="text-xl font-extrabold mb-1">{p.name}</h3>
                  <div className="flex items-baseline gap-1 mt-3">
                    <span className="text-3xl font-black">{p.price}</span>
                    <span className="text-[12px] opacity-75">{p.unit}</span>
                  </div>
                  <p className="text-[12px] opacity-80 mt-2">{p.capacity} · {p.panels}</p>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-4 bg-white">
                  <ul className="space-y-3 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] text-gray-600">
                        <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                  <a href={wa(p.name)} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-[13px] transition-all active:scale-95 ${p.popular ? "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25" : "bg-primary-50 text-primary-600 hover:bg-primary-100"}`}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.062 5.248 5.308 0 11.77 0c3.13 0 6.073 1.22 8.285 3.435 2.21 2.215 3.428 5.16 3.424 8.29-.007 6.523-5.253 11.77-11.716 11.77-2.007 0-3.978-.515-5.727-1.498L0 24zm6.59-4.846c1.62.962 3.21 1.454 4.966 1.455 5.349 0 9.701-4.329 9.707-9.682.003-2.593-1.003-5.032-2.834-6.865-1.83-1.833-4.264-2.843-6.858-2.843-5.352 0-9.701 4.33-9.707 9.684-.001 1.838.48 3.593 1.392 5.155l-.979 3.573 3.659-.958zm12.308-5.367c-.211-.106-1.252-.618-1.448-.689-.196-.072-.34-.107-.482.106-.143.213-.553.689-.678.831-.125.143-.25.16-.462.054-.212-.107-.894-.33-1.703-1.053-.63-.562-1.055-1.257-1.179-1.47-.124-.213-.013-.328.093-.433.096-.095.212-.248.318-.372.106-.124.142-.213.213-.356.071-.142.035-.266-.017-.372-.054-.107-.482-1.16-.66-1.597-.173-.418-.363-.36-.498-.367-.129-.007-.277-.008-.426-.008-.149 0-.393.056-.599.28-.206.225-.785.767-.785 1.87 0 1.104.8 2.17.912 2.325.112.155 1.573 2.401 3.811 3.37.532.23 1.01.385 1.353.495.534.17 1.02.146 1.405.088.429-.064 1.252-.511 1.429-1.004.178-.492.178-.915.125-1.004-.053-.089-.196-.142-.408-.249z" />
                    </svg> Book This Plan
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-pad bg-[#f7faff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-primary-900">Add-On <span className="gradient-text">Services</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {addons.map((a, i) => (
              <motion.div key={a.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-primary-200 hover:shadow-glass transition-all">
                <p className="font-bold text-[14px] text-primary-900 mb-1">{a.name}</p>
                <p className="text-[12px] text-gray-500 mb-3">{a.desc}</p>
                <p className="text-lg font-extrabold text-primary-600">{a.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-extrabold text-white mb-4">Not Sure Which Plan?</h2>
            <p className="text-primary-200 mb-8">WhatsApp us your panel size and we&apos;ll recommend the right package instantly.</p>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hello! I'm not sure which cleaning plan to pick. My solar system is ___ kW. Can you help?")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-600 font-bold text-[15px] hover:bg-primary-50 transition shadow-xl">
              <Zap className="w-5 h-5" /> Get a Custom Quote
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
