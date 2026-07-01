"use client";

import { motion } from "framer-motion";
const clients = [
  {
    name: "J.S. Gear",
    image: "/images/logos/js-gear.jpg",
  },
  {
    name: "Swastik Gum Industries",
    image: "/images/logos/swastik-gum.jpg",
  },
  {
    name: "Sarjan Sky",
    image: "/images/logos/sarjan-sky.jpg",
  },
  {
    name: "Kedar Engineering",
    image: "/images/logos/kedar-engineering.jpg",
  },
  {
    name:"Techflow",
    image:"/images/logos/Techflow.jpg",
  }
];

export default function Clients() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <p className="text-[12px] font-semibold tracking-widest uppercase text-gray-400 mb-2">
            TRUSTED BY
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-900 mb-4">
            Our <span className="gradient-text">Valued Clients</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex h-32 items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={client.image}
                alt={client.name}
                className="max-h-20 w-auto object-contain"
                draggable={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}