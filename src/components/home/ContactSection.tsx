"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Send, Zap } from "lucide-react";

const WA_NUMBER = "919274371058";

const PANEL_SIZES = [
  "1–5 kW (Residential)",
  "5–10 kW (Residential/Small Office)",
  "10–25 kW (Commercial)",
  "25–100 kW (Industrial)",
  "100 kW+ (Large Industrial)",
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", address: "", size: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Yavix Energy! I'd like to book a solar panel cleaning.\n\n` +
      `👤 Name: ${form.name}\n` +
      `📞 Phone: ${form.phone}\n` +
      `📍 Address: ${form.address}\n` +
      `⚡ Panel Size: ${form.size}\n` +
      `💬 Message: ${form.message}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all bg-white";

  return (
    <section className="section-pad bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-4 border border-primary-100">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-900 mb-4">Book Your <span className="gradient-text">Free Inspection</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto">Fill the form below and we&apos;ll open WhatsApp with your details pre-filled. Zero hassle, instant response.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col gap-6">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-xl shadow-primary-500/30">
              <h3 className="font-bold text-xl mb-1">Yavix Energy</h3>
              <p className="text-primary-200 text-[13px] mb-5">Solar Cleaning Experts · Open 24 Hours</p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <MapPin className="w-4 h-4 shrink-0" />, text: "36, Thakkarnagar Rd, near Sahjanand Hospital, Bhagyoday Society, Thakkarbapanagar, Ahmedabad, Gujarat 382350" },
                  { icon: <Phone className="w-4 h-4 shrink-0" />, text: "09274371058" },
                  { icon: <Clock className="w-4 h-4 shrink-0" />, text: "Open 24 Hours · 7 Days a Week" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start text-[13px] text-primary-100">{item.icon}<span>{item.text}</span></div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a href="tel:09274371058"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-primary-50 border border-primary-100 hover:bg-primary-100 transition-colors text-primary-700 font-semibold text-[13px]">
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello Yavix Energy! I need a solar cleaning quote.")}`}
                target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-green-50 border border-green-100 hover:bg-green-100 transition-colors text-green-700 font-semibold text-[13px]">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a href="https://maps.google.com/?q=36+Thakkarnagar+Rd+Ahmedabad+Gujarat+382350"
                target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-amber-50 border border-amber-100 hover:bg-amber-100 transition-colors text-amber-700 font-semibold text-[13px]">
                <MapPin className="w-5 h-5" /> Directions
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-100 shadow-glass p-8 flex flex-col gap-5">
              <h3 className="font-bold text-xl text-primary-900">Book a Cleaning</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-semibold text-gray-600 mb-1.5">Full Name *</label>
                  <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputCls} />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-gray-600 mb-1.5">Phone Number *</label>
                  <input name="phone" required type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputCls} />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-gray-600 mb-1.5">Installation Address *</label>
                <input name="address" required value={form.address} onChange={handleChange} placeholder="Your solar panel location" className={inputCls} />
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-gray-600 mb-1.5">Solar Panel Size</label>
                <select name="size" value={form.size} onChange={handleChange} className={inputCls}>
                  <option value="">Select panel capacity</option>
                  {PANEL_SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-gray-600 mb-1.5">Message</label>
                <textarea name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Any additional details..." className={`${inputCls} resize-none`} />
              </div>
              <button type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-primary-500 hover:bg-primary-600 active:scale-[0.98] text-white font-semibold text-[15px] transition-all duration-200 shadow-lg shadow-primary-500/30">
                {sent ? <><Zap className="w-4 h-4" /> Opening WhatsApp…</> : <><Send className="w-4 h-4" /> Send via WhatsApp</>}
              </button>
              <p className="text-[11px] text-gray-400 text-center">Your details will open in WhatsApp. No backend, fully private.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
