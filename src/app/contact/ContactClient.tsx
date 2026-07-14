"use client";

import { motion } from "framer-motion";
import ContactSection from "@/components/home/ContactSection";

export default function ContactClient() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={false}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-6 border border-primary-100">
              Get in touch
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-900 mb-6 leading-tight">
              Book Professional <span className="gradient-text">Solar Panel Cleaning</span> Today
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Reach out via WhatsApp, call us directly, or fill out the form below. Our team will respond the same day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <ContactSection />
    </div>
  );
}
