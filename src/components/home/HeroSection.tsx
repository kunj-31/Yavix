"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-black text-white"
      style={{ height: "100dvh", paddingTop: "0" }}
    >
      {/* Full-cover background video */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/Video/12646455-hd_1920_1080_60fps.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/30 to-slate-950/70" />

      {/* Content — pushed down by navbar height so nothing is hidden behind it */}
      <div
        className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: "var(--navbar-h, 72px)" }}
      >
        <div className="w-full max-w-5xl text-center">
          <motion.div
            initial={false}
            className="mx-auto flex flex-col items-center gap-5 sm:gap-6"
          >
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Professional <span className="gradient-text font-extrabold">Solar Panel</span> Cleaning Services in Ahmedabad
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-100 sm:text-base lg:text-lg">
              Improve solar efficiency with premium solar panel cleaning and maintenance solutions for homes, offices and industries.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-100 sm:text-base">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400 sm:h-5 sm:w-5" />
                ))}
              </div>
              <span>
                <strong className="font-extrabold text-white">5.0</strong> · 200+ Happy Customers
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
