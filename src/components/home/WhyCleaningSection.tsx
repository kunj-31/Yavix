"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Droplets, Leaf, Shield } from "lucide-react";

const benefits = [
  {
    image: "/images/why-cleaning/dusty-panels.png", // Highly specific dirty/dusty panel
    title: "Dust Kills Efficiency",
    desc: "A thin layer of dust can reduce solar output by 15–30%. Regular cleaning restores full power generation.",
  },
  {
    image: "/images/why-cleaning/cleaning-panels.png", // Highly specific professional cleaning action
    title: "Cleaning Boosts Output",
    desc: "Professional cleaning immediately improves energy production, giving you more units per day and savings.",
  },
  {
    image: "/images/why-cleaning/savings-panels.png", // Relevant solar savings concept instead of dollar bills
    title: "Better Savings",
    desc: "More efficient panels mean lower electricity bills. Clean panels pay for themselves within weeks.",
  },
  {
    image: "/images/why-cleaning/clean-panels.png", // Beautiful shiny solar panel representing long life
    title: "Longer Panel Life",
    desc: "Dirt, grime, and bird droppings cause micro-damage. Cleaning extends your panel lifespan by years.",
  },
];

const stats = [
  { end: 200,  suffix: "+", label: "Happy Clients" },
  { end: 5000, suffix: "+", label: "Panels Cleaned" },
  { end: 30,   suffix: "%", label: "Efficiency Increase" },
  { end: 3,    suffix: "+", label: "Years Experience" },
];

function AnimatedNumber({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(end / 60);
          const iv = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(iv); }
            else setCount(start);
          }, 22);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function WhyCleaningSection() {
  return (
    <section className="section-pad bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-4 border border-primary-100">Why It Matters</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-900 mb-4">
            Why <span className="gradient-text">Solar Cleaning</span> Is Essential
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Dirty panels cost you money every single day. Here&apos;s why professional cleaning is one of the smartest investments for any solar owner.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center p-8 rounded-3xl bg-white border border-primary-100 shadow-glass hover:shadow-card-hover transition-all duration-300"
            >
              <p className="text-5xl font-black text-primary-600 mb-2">
                <AnimatedNumber end={s.end} suffix={s.suffix} />
              </p>
              <p className="text-[14px] text-gray-500 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 102, 255, 0.2)" }}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-100 shadow-sm group transition-all duration-300 overflow-hidden flex flex-col justify-between h-full hover:border-primary-200"
            >
              <div>
                {/* Larger, Taller Aspect-4/3 Card Image */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 relative shadow-md group-hover:scale-[1.02] transition-transform duration-300">
                  <img 
                    src={b.image} 
                    alt={b.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-extrabold text-[18px] text-primary-900 mb-3 group-hover:text-primary-600 transition-colors leading-snug">{b.title}</h3>
                <p className="text-[13.5px] text-gray-500 leading-relaxed font-medium">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
