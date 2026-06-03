"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Adani Solar",    file: "adani-solar" },
  { name: "Tata Power",     file: "tata" },
  { name: "Vikram Solar",   file: "vikram" },
  { name: "Waaree",         file: "waaree" },
  { name: "Loom Solar",     file: "loom" },
  { name: "RenewSys",       file: "renewsys" },
  { name: "Goldi Solar",    file: "goldi" },
  { name: "Rayzon Solar",   file: "rayzon" },
  { name: "Premier Energy", file: "premier" },
  { name: "Gautam Solar",   file: "gautam" },
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[12px] font-semibold tracking-widest uppercase text-gray-400 mb-2">
            TRUSTED BY
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 tracking-tight">
            Trusted By Customers &amp; Companies
          </h2>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-14 items-center justify-items-center">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex justify-center items-center w-full max-w-[180px] h-20 p-2 hover:scale-105 transition-transform duration-300 relative group"
            >
              <img 
                src={`/logos/${c.file}.png`} 
                alt={`${c.name} logo`}
                className="relative z-10 w-full h-full object-contain mix-blend-multiply transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
