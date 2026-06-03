"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, ShieldCheck, HelpCircle } from "lucide-react";

const services = [
  {
    image: "/images/services/service-1-panel.png",
    title: "Solar Panel Servicing",
    price: "Request for Price",
    type: "Repair & Maintenance",
    scope: "Residential & Commercial",
  },
  {
    image: "/images/services/service-2-system.png",
    title: "Solar System Servicing",
    price: "Request for Price",
    type: "Repair & Maintenance",
    scope: "Residential & Commercial",
  },
  {
    image: "/images/services/service-3-array.png",
    title: "Solar Array Maintenance",
    price: "Request for Price",
    type: "Repair & Maintenance",
    scope: "Residential & Commercial",
  },
  {
    image: "/images/services/service-4-repair.png",
    title: "Photovoltaic Panel Repair",
    price: "Request for Price",
    type: "Repair & Maintenance",
    scope: "Residential & Commercial",
  },
  {
    image: "/images/services/service-5-system-repair.png",
    title: "Solar Energy System Repair",
    price: "Request for Price",
    type: "Repair & Maintenance",
    scope: "Residential & Commercial",
  },
  {
    image: "/images/services/service-6-residential.png",
    title: "Residential Solar Panel Maintenance",
    price: "Request for Price",
    type: "Repair & Maintenance",
    scope: "Residential & Commercial",
  },
  {
    image: "/images/services/service-7-renewable.png",
    title: "Renewable Energy Panel Repair",
    price: "Request for Price",
    type: "Repair & Maintenance",
    scope: "Residential & Commercial",
  },
  {
    image: "/images/services/service-8-trouble.png",
    title: "PV Panel Troubleshooting",
    price: "Request for Price",
    type: "Repair & Maintenance",
    scope: "Residential & Commercial",
  },
  {
    image: "/images/services/service-9-general.png",
    title: "Solar Panel Repair & Services",
    price: "Request for Price",
    type: "Repair & Maintenance",
    scope: "Residential & Commercial",
  },
];

export default function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = 340; // Card width (300px) + gap (40px)
      const targetScroll =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#f8fafc] border-y border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2 mb-4"
          >
            <span className="inline-block px-5 py-2 rounded-full bg-primary-50 text-primary-600 text-[13px] font-extrabold tracking-widest uppercase border border-primary-100 shrink-0">
              OUR SERVICES
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight mt-2">
              Solar Repair &amp; <span className="text-primary-600">Maintenance Services</span>
            </h2>
          </motion.div>
          <p className="text-[16px] sm:text-[18px] text-gray-500 leading-relaxed font-semibold max-w-3xl mx-auto mt-4">
            Maximize your solar generation efficiency with Yavix&apos;s certified technical engineering services.
          </p>
        </div>

        {/* Relative Container for Slider and floating buttons */}
        <div className="relative group">
          
          {/* Floating Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 lg:-left-6 top-[35%] -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-gray-150 bg-white/95 backdrop-blur-sm flex items-center justify-center text-primary-900 hover:bg-primary-50 hover:border-primary-200 transition-all shadow-md active:scale-95 hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Floating Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 lg:-right-6 top-[35%] -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-gray-150 bg-white/95 backdrop-blur-sm flex items-center justify-center text-primary-900 hover:bg-primary-50 hover:border-primary-200 transition-all shadow-md active:scale-95 hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Horizontal Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto pb-8 scroll-smooth scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 102, 255, 0.15)" }}
                className="w-[300px] shrink-0 snap-start rounded-3xl bg-white border border-gray-100 shadow-sm p-5 transition-all duration-300 hover:border-primary-200 group text-center flex flex-col justify-between"
              >
                <div>
                  {/* 4:3 Aspect Ratio Local Image */}
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 relative shadow-md group-hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Service Details centered */}
                  <h3 className="font-extrabold text-[16.5px] text-primary-900 leading-snug mb-3 group-hover:text-primary-600 transition-colors min-h-[48px] flex items-center justify-center">
                    {s.title}
                  </h3>

                  {/* Service Tags - Centered inline pills without Type and Scope labels */}
                  <div className="flex flex-wrap items-center justify-center gap-2 border-t border-gray-100 pt-4">
                    <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-[11px] font-semibold border border-primary-100/50">
                      Repair &amp; Maintenance
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 text-[11px] font-semibold border border-gray-100">
                      Residential &amp; Commercial
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
