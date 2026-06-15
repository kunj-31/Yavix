"use client";

import { motion } from "framer-motion";
import { TrendingUp, MapPin, Zap } from "lucide-react";

const cases = [
  { id: 1, client: "Mehta Residence", location: "Satellite, Ahmedabad", type: "Residential", capacity: "10 kW", panels: 32, months: 4, problem: "Output dropped by 28% due to heavy dust and bird droppings accumulated over 4 months. Visible grey film on all panels.", solution: "Single deep-clean session with deionised water and microfiber pads. Post-clean output metered for verification.", before: "7.2 kWh/day", after: "10.1 kWh/day", gain: "+40%", color: "from-blue-500 to-primary-600" },
  { id: 2, client: "Shah Agro Industries", location: "GIDC Naroda, Ahmedabad", type: "Commercial", capacity: "50 kW", panels: 160, months: 18, problem: "Industrial soot and chemical dust from nearby factories coated panels. Output reduced by 35% over 18 months of zero maintenance.", solution: "Team of 4 technicians, elevated access platforms, industrial-grade purified water system, full 3-hour clean.", before: "32.5 kWh/day", after: "48.8 kWh/day", gain: "+50%", color: "from-cyan-500 to-teal-500" },
  { id: 3, client: "Vatva Manufacturing", location: "Vatva Estate, Ahmedabad", type: "Industrial", capacity: "100 kW", panels: 320, months: 24, problem: "2 years of zero maintenance. Bird nesting caused hotspot damage on 8 panels. Heavy calcification from hard water irrigation spray.", solution: "Full 2-day operation. Hotspot panels flagged, calcification treatment, all 320 panels cleaned and output-verified.", before: "61 kWh/day", after: "92 kWh/day", gain: "+51%", color: "from-teal-500 to-green-500" },
  { id: 4, client: "Patel Housing Society", location: "Bopal, Ahmedabad", type: "Residential Society", capacity: "25 kW", panels: 80, months: 8, problem: "Common rooftop system serving 20 flats showing declining output. Tenants reported rising electricity bills despite solar system.", solution: "Full society panel audit, cleaning, and monthly maintenance contract established.", before: "18.2 kWh/day", after: "24.9 kWh/day", gain: "+37%", color: "from-amber-500 to-orange-500" },
  { id: 5, client: "Greenfield Hospital", location: "Thaltej, Ahmedabad", type: "Commercial – Healthcare", capacity: "30 kW", panels: 96, months: 12, problem: "Hospital rooftop panels with 12 months of dust. Critical energy reliability required. Daytime access restrictions.", solution: "Early morning (5–7am) cleaning crew deployment. Zero interruption to hospital operations. Full clean in 2 hours.", before: "21.6 kWh/day", after: "29.4 kWh/day", gain: "+36%", color: "from-rose-500 to-pink-500" },
  { id: 6, client: "Desai Farmhouse Solar", location: "Sanand, Ahmedabad", type: "Rural – Agriculture", capacity: "15 kW", panels: 48, months: 6, problem: "Farm dust, agricultural chemicals, and insect residue covered panels. Water pump running at 60% efficiency due to low solar output.", solution: "Mobile cleaning unit dispatched to rural location. Full clean with water tanker and deionised treatment system.", before: "10.5 kWh/day", after: "14.6 kWh/day", gain: "+39%", color: "from-green-500 to-cyan-500" },
];

export default function CaseStudyClient() {
  return (
    <div className="pt-20">
      <section className="section-pad bg-hero-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-6 border border-primary-100">Proof of Work</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-900 mb-4">Real <span className="gradient-text">Results</span>, Real Customers</h1>
            <p className="text-gray-500 text-lg">Documented before/after results from actual Yavix Solar Cleaning projects across Ahmedabad and Gujarat.</p>
          </motion.div>
        </div>
      </section>

      {/* Summary stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-center">
            {[{ val: "avg +42%", label: "Average Efficiency Gain" }, { val: "6 studies", label: "Documented Projects" }, { val: "736+", label: "Panels in Case Studies" }, { val: "100%", label: "Verified Results" }].map((s) => (
              <div key={s.label} className="p-5 rounded-2xl bg-[#f7faff] border border-primary-100">
                <p className="text-2xl font-extrabold text-primary-600 mb-1">{s.val}</p>
                <p className="text-[12px] text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case cards */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((c, i) => (
              <motion.div key={c.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: (i % 2) * 0.12 }}
                className="rounded-3xl border border-gray-100 shadow-sm hover:shadow-card-hover overflow-hidden transition-all duration-300">
                {/* Header */}
                <div className={`bg-gradient-to-br ${c.color} p-6 text-white`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-semibold tracking-widest uppercase opacity-75">{c.type}</span>
                      <h3 className="text-xl font-bold mt-1">{c.client}</h3>
                      <div className="flex items-center gap-1.5 mt-2 text-[13px] opacity-80">
                        <MapPin className="w-3.5 h-3.5" />{c.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 justify-end">
                        <TrendingUp className="w-5 h-5" />
                        <span className="text-3xl font-black">{c.gain}</span>
                      </div>
                      <p className="text-[11px] opacity-75 mt-1">{c.capacity} · {c.panels} panels</p>
                    </div>
                  </div>
                </div>
                {/* Body */}
                <div className="p-6 bg-white space-y-4">
                  <div>
                    <p className="text-[11px] font-bold text-red-500 uppercase tracking-wide mb-1">The Problem</p>
                    <p className="text-[13px] text-gray-600 leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-green-600 uppercase tracking-wide mb-1">Yavix Solution</p>
                    <p className="text-[13px] text-gray-600 leading-relaxed">{c.solution}</p>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex-1 bg-red-50 rounded-xl p-3 text-center">
                      <p className="text-[10px] text-red-400 font-semibold uppercase">Before</p>
                      <p className="font-bold text-[16px] text-red-600">{c.before}</p>
                    </div>
                    <div className="w-8 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary-400" />
                    </div>
                    <div className="flex-1 bg-green-50 rounded-xl p-3 text-center">
                      <p className="text-[10px] text-green-500 font-semibold uppercase">After</p>
                      <p className="font-bold text-[16px] text-green-600">{c.after}</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 text-center">*Neglect duration: {c.months} months without cleaning</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Your Panels Could Be Next</h2>
            <p className="text-primary-200 mb-8">Join 200+ customers who restored their solar efficiency with Yavix Solar Cleaning.</p>
            <a href={`https://wa.me/919274371058?text=${encodeURIComponent("Hello Yavix Solar Cleaning! I saw your case studies and want to book a cleaning.")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-600 font-bold text-[15px] hover:bg-primary-50 transition shadow-xl">
              <Zap className="w-5 h-5" /> Book Your Cleaning Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
