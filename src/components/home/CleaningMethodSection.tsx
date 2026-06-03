"use client";

import { motion } from "framer-motion";
import { Search, Wind, Droplets, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  { step: "01", image: "/images/cleaning-method/step-1-inspection.png", title: "Inspection", desc: "Our technician inspects every panel for cracks, hotspots, shading issues, and bird damage before cleaning begins." },
  { step: "02", image: "/images/cleaning-method/step-2-dust-removal.png", title: "Dust Removal", desc: "Dry soft-bristle brushes remove loose dust, sand, and debris without scratching the anti-reflective coating." },
  { step: "03", image: "/images/cleaning-method/step-3-water-treatment.png", title: "Water Treatment", desc: "We use purified, deionised water — no chemicals — to break down stubborn grime, bird droppings, and mineral deposits." },
  { step: "04", image: "/images/cleaning-method/step-4-deep-cleaning.png", title: "Deep Cleaning", desc: "Gentle microfiber pads and soft squeegees clean every cell surface to a streak-free, spotless finish." },
  { step: "05", image: "/images/cleaning-method/step-5-shine-check.png", title: "Final Shine Check", desc: "A post-clean output check confirms efficiency improvement. We photograph the before/after results for your records." },
];

export default function CleaningMethodSection() {
  return (
    <section className="section-pad bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-4 border border-primary-100">Our Process</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-900 mb-4">
            Our <span className="gradient-text">Cleaning Method</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A precise, damage-free 5-step process trusted by homeowners and industries across Ahmedabad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 102, 255, 0.2)" }}
              className="relative p-6 rounded-3xl bg-white border border-gray-100 shadow-sm group transition-all duration-300 overflow-hidden flex flex-col justify-between h-full hover:border-primary-200"
            >
              <div>
                {/* Step number badge overlaid on top-left of image */}
                <div className="absolute top-9 left-9 z-20 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-black text-primary-600 shadow-sm uppercase tracking-wider">
                  Step {s.step}
                </div>

                {/* Aspect-4/3 Card Image */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 relative shadow-md group-hover:scale-[1.02] transition-transform duration-300">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="font-extrabold text-[17px] text-primary-900 mb-3 group-hover:text-primary-600 transition-colors leading-snug">{s.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed font-medium">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
