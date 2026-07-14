"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    image: "/images/why-cleaning/Essential_1.avif",
    title: "Dust Reduces Performance",
    desc: "Dust,pollution & mineral deposits can significantly reduce solar panel efficiency.Regular cleaning helps maintain peak output.",
  },
  {
    image: "/images/why-cleaning/Essential_2.avif",
    title: "Higher Energy Output",
    desc: "Clean panels absorb more sunlight, helping your system generate more electricity and improve overall performance.",
  },
  {
    image: "/images/why-cleaning/Essential_3.avif",
    title: "Lower Electricity Costs",
    desc: "Improved solar efficiency means greater energy savings and faster returns on your solar investment.",
  },
  {
    image: "/images/why-cleaning/Essential_4.avif",
    title: "Extended Panel Lifespan",
    desc: "Removing dirt, bird droppings and mineral deposits helps protect panel surfaces and supports long-term system reliability.",
  },
];

const stats = [
  { end: 200, suffix: "+", label: "Satisfied Clients" },
  { end: 5000, suffix: "+", label: "Solar Panels Cleaned" },
  { end: 30, suffix: "%", label: "Performance Recovery" },
  { end: 100, suffix: "%", label: "Safety Compliance" },
];

function AnimatedNumber({
  end,
  text,
  suffix,
}: {
  end?: number;
  text?: string;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (end === undefined) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const step = Math.ceil(end / 60);

          const iv = setInterval(() => {
            start += step;

            if (start >= end) {
              setCount(end);
              clearInterval(iv);
            } else {
              setCount(start);
            }
          }, 22);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {text ? text : count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function WhyCleaningSection() {
  return (
    <section className="section-pad bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-4 border border-primary-100">
            Why It Matters
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-900 mb-4">
            Why <span className="gradient-text">Solar Cleaning</span> Is
            Essential
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Dirty solar panels can lose significant efficiency due to dust, bird
            droppings, pollution and mineral deposits. Professional cleaning
            helps restore performance, increase energy generation and extend
            panel life.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-4 sm:p-6 lg:p-8 rounded-3xl bg-white border border-primary-100 shadow-glass hover:shadow-card-hover transition-all duration-300"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary-600 mb-2">
                <AnimatedNumber end={s.end} suffix={s.suffix} />
              </p>
              <p className="text-[12px] sm:text-[14px] text-gray-500 font-medium leading-tight">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-100 shadow-sm group transition-all duration-300 overflow-hidden flex flex-col justify-between h-full hover:border-primary-200 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,102,255,0.2)]"
            >
              <div>
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 relative shadow-md group-hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={b.image}
                    alt={b.title}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-extrabold text-[16px] text-primary-900 mb-3 group-hover:text-primary-600 transition-colors truncate">
                  {b.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
