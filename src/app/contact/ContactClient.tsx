"use client";

import { motion } from "framer-motion";
import ContactSection from "@/components/home/ContactSection";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function ContactClient() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-hero-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-6 border border-primary-100">Contact</span>
            <h1 className="text-5xl font-extrabold text-primary-900 mb-4">Let&apos;s <span className="gradient-text">Get Started</span></h1>
            <p className="text-gray-500 text-lg">We&apos;re open 24 hours. Reach out via WhatsApp, call, or fill the form below. Same-day response guaranteed.</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Strip */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: <Phone className="w-4 h-4" />, label: "Phone", val: "09274371058", href: "tel:09274371058" },
              { icon: <Mail className="w-4 h-4" />, label: "Email", val: "info@yavixenergy.com", href: "mailto:info@yavixenergy.com" },
              { icon: <Clock className="w-4 h-4" />, label: "Hours", val: "Open 24 Hours", href: undefined },
              { icon: <MapPin className="w-4 h-4" />, label: "Area", val: "All of Ahmedabad", href: undefined },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3 rounded-2xl bg-[#f7faff] border border-primary-50">
                <div className="w-8 h-8 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500">{item.icon}</div>
                <div>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="text-[12px] font-semibold text-primary-700 hover:text-primary-600">{item.val}</a>
                    : <p className="text-[12px] font-semibold text-gray-700">{item.val}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <ContactSection />

      {/* Google Map Embed placeholder */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden border border-gray-100 shadow-glass h-80 bg-[#f7faff] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary-500" />
              </div>
              <p className="font-semibold text-primary-900 mb-1">Yavix Energy – Solar Cleaning Experts</p>
              <p className="text-[13px] text-gray-500 mb-4">36, Thakkarnagar Rd, Thakkarbapanagar, Ahmedabad – 382350</p>
              <a
                href="https://maps.google.com/?q=36+Thakkarnagar+Rd+Thakkarbapanagar+Ahmedabad+Gujarat+382350"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-500 text-white font-semibold text-[13px] hover:bg-primary-600 transition">
                <MapPin className="w-4 h-4" /> Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
