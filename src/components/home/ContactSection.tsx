"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Zap,
  Mail,
} from "lucide-react";

const WA_NUMBER = "919274371058";

const PANEL_SIZES = [
  "1–5 kW (Residential)",
  "5–10 kW (Residential/Small Office)",
  "10–25 kW (Commercial)",
  "25–100 kW (Industrial)",
  "100 kW+ (Large Industrial)",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    size: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Yavix Solar Cleaning! I'd like to book a solar panel cleaning.\n\n` +
        `👤 Name: ${form.name}\n` +
        `📞 Phone: ${form.phone}\n` +
        `📍 Address: ${form.address}\n` +
        `⚡ Panel Size: ${form.size}\n` +
        `💬 Message: ${form.message}`,
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-gray-200 text-[14px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all bg-white";

  return (
    <section className="section-pad bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content begins directly below hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            {/* Address Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary-600 to-primary-900 text-white shadow-xl shadow-primary-500/30 selection:bg-yellow-400 selection:text-primary-900">
              <h3 className="font-bold text-2xl mb-2">Yavix Solar Cleaning</h3>
              <p className="text-primary-200 text-[14px] mb-8 font-medium">
                Get in touch with our experts.
              </p>

              <div className="flex flex-col gap-5">
                <div className="flex gap-4 items-start text-[14.5px] text-primary-100">
                  <div className="w-10 h-10 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="mt-2 leading-relaxed">
                    36, Bhagyoday Society, Thakkarbapanagar Road,
                    <br />
                    Ahmedabad, Gujarat 382350
                  </span>
                </div>
                <div className="flex gap-4 items-center text-[14.5px] text-primary-100">
                  <div className="w-10 h-10 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">+91 92743 71058</span>
                </div>
                <div className="flex gap-4 items-center text-[14.5px] text-primary-100">
                  <div className="w-10 h-10 shrink-0 bg-white/10 rounded-full flex items-center justify-center text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">yavixenergy@gmail.com</span>
                </div>
              </div>
            </div>

            {/* 4 CTA Buttons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* Call */}
              <a
                href="tel:+919274371058"
                className="flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl bg-[#f0f9ff] border border-blue-100 hover:-translate-y-1 hover:shadow-md transition-all text-blue-700 font-bold text-[13px]"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                  "Hello Yavix Solar Cleaning! I'd like to book a service.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl bg-[#f0fdf4] border border-green-100 hover:-translate-y-1 hover:shadow-md transition-all text-green-700 font-bold text-[13px]"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-8 h-8"
                />
                WhatsApp
              </a>

              {/* Email */}
              <a
                href="mailto:yavixenergy@gmail.com?subject=Solar%20Cleaning%20Inquiry&body=Hello%20Yavix%20Solar%20Cleaning,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20services."
                className="flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl bg-[#fff7ed] border border-orange-100 hover:-translate-y-1 hover:shadow-md transition-all text-orange-700 font-bold text-[13px]"
              >
                <Mail className="w-6 h-6" />
                Email
              </a>

              {/* Directions */}
              <a
                href="https://maps.google.com/?q=36+Bhagyoday+Society+Thakkarbapanagar+Road+Ahmedabad+Gujarat+382350"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl bg-[#f5f3ff] border border-purple-100 hover:-translate-y-1 hover:shadow-md transition-all text-purple-700 font-bold text-[13px]"
              >
                <MapPin className="w-6 h-6" />
                Directions
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 flex flex-col gap-5 h-full"
            >
              <h3 className="font-extrabold text-2xl text-primary-900 mb-2">
                Book a Cleaning
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    name="phone"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputCls}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                  Installation Address *
                </label>
                <input
                  name="address"
                  required
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Your solar panel location"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                  Solar Panel Size
                </label>
                <select
                  name="size"
                  value={form.size}
                  onChange={handleChange}
                  className={inputCls}
                >
                  <option value="">Select panel capacity</option>
                  {PANEL_SIZES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any additional details..."
                  className={`${inputCls} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full mt-auto flex items-center justify-center gap-2.5 py-4 rounded-xl bg-primary-600 hover:bg-primary-700 active:scale-[0.98] text-white font-bold text-[15px] transition-all duration-200 shadow-lg shadow-primary-500/25"
              >
                {sent ? (
                  <>
                    <Zap className="w-5 h-5" /> Opening WhatsApp…
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Request via WhatsApp
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Real Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg border border-gray-100"
        >
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=36,%20Bhagyoday%20Society,%20Thakkarbapanagar%20Road,%20Ahmedabad,%20Gujarat%20382350+(Yavix%20Solar%20Cleaning)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Yavix Solar Cleaning Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
