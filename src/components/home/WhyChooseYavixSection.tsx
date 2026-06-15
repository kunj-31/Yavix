"use client";

import { motion } from "framer-motion";
import { FaUserShield, FaTools, FaHandPaper, FaBolt, FaRegChartBar } from "react-icons/fa";

const reasons = [
  {
    icon: <FaUserShield />,
    title: "Professional Solar Cleaning Experts",
    desc: "Trained technicians with the knowledge and equipment to clean solar panels safely and effectively.",
    iconBg: "linear-gradient(135deg, #4f8ef7 0%, #2563eb 100%)",
    iconColor: "#fff",
  },
  {
    icon: <FaTools />,
    title: "Advanced Equipments & Techniques",
    desc: "Modern cleaning tools and specialized methods designed to tackle dust, bird droppings, hard water stains and mineral deposits.",
    iconBg: "linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)",
    iconColor: "#fff",
  },
  {
    icon: <FaHandPaper />,
    title: "Safe & Damage-Free Cleaning",
    desc: "Non-abrasive tools, purified water and industry-approved methods that protect panel surfaces and warranties.",
    iconBg: "linear-gradient(135deg, #f472b6 0%, #ec4899 100%)",
    iconColor: "#fff",
  },
  {
    icon: <FaBolt />,
    title: "Performance-Focused Results",
    desc: "Our cleaning process helps maximize sunlight absorption and maintain optimal energy generation.",
    iconBg: "linear-gradient(135deg, #fb923c 0%, #f97316 100%)",
    iconColor: "#fff",
  },
  {
    icon: <FaRegChartBar />,
    title: "Transparent Service & Reporting",
    desc: "Before-and-after photos, detailed inspections and clear communication so you can see the results for yourself.",
    iconBg: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
    iconColor: "#fff",
  },
];

export default function WhyChooseYavixSection() {
  return (
    <section className="section-pad bg-[#f7faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-4 border border-primary-100">
            Our Strengths
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-900 mb-4">
            Why Choose <span className="gradient-text">Yavix?</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            We combine trained expertise, advanced equipment and transparent reporting to deliver safe, effective and performance-focused solar panel cleaning for every client.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 102, 255, 0.2)" }}
              className="w-full p-6 rounded-2xl bg-white border border-gray-100 shadow-sm group transition-all duration-300 flex flex-col hover:border-primary-200"
            >
              {/* Colorful Icon Box */}
              <div
                className="flex items-center justify-center w-14 h-14 rounded-2xl mb-5 shadow-md"
                style={{ background: r.iconBg }}
              >
                <span style={{ color: r.iconColor, fontSize: "1.6rem", display: "flex" }}>
                  {r.icon}
                </span>
              </div>
              <h3 className="font-extrabold text-[15px] text-primary-900 mb-2 text-left group-hover:text-primary-600 transition-colors leading-snug">
                {r.title}
              </h3>
              <p className="text-[14px] text-gray-500 leading-relaxed font-medium text-left mb-3">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
