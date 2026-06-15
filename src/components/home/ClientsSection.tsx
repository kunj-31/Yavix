"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Adani Solar", file: "adani-solar" },
  { name: "Tata Power", file: "tata" },
  { name: "Vikram Solar", file: "vikram" },
  { name: "Waaree", file: "waaree" },
  { name: "Loom Solar", file: "loom" },
  { name: "RenewSys", file: "renewsys" },
  { name: "Goldi Solar", file: "goldi" },
  { name: "Rayzon Solar", file: "rayzon" },
  { name: "Premier Energy", file: "premier" },
  { name: "Gautam Solar", file: "gautam" },
];

export default function ClientsSection() {
  const half = Math.ceil(clients.length / 2);
  const firstLogoRow = clients.slice(0, half);
  const secondLogoRow = clients.slice(half);
  const scrollingRows = [firstLogoRow, secondLogoRow];

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
        <div className="-mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden space-y-4">
          {scrollingRows.map((row, rowIndex) => {
            const logos = [...row, ...row]; // Duplicate for seamless loop

            return (
              <div
                key={rowIndex}
                className={`flex w-max gap-4 px-4 sm:px-6 lg:px-8 ${
                  rowIndex === 0
                    ? "animate-scroll-left"
                    : "animate-scroll-right"
                }`}
              >
                {logos.map((c, i) => (
                  <div
                    key={`${c.file}-${i}`}
                    className="flex h-20 w-36 sm:h-24 sm:w-44 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={`/logos/${c.file}.png`}
                      alt={c.name}
                      className="h-full w-full object-contain select-none pointer-events-none"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
