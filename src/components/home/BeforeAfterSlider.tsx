"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderX, setSliderX] = useState(15);
  const [isDragging, setIsDragging] = useState(false);
  const [washKey, setWashKey] = useState(0);
  const prevSlider = useRef(15);

  const calcPosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.min(95, Math.max(5, ((clientX - rect.left) / rect.width) * 100));
    if (prevSlider.current < 48 && pct >= 48) setWashKey((k) => k + 1);
    prevSlider.current = pct;
    setSliderX(pct);
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = useCallback(() => setIsDragging(false), []);
  const onMouseMove = useCallback(
    (e: MouseEvent) => { if (isDragging) calcPosition(e.clientX); },
    [isDragging, calcPosition]
  );

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  // Auto-demo sweep on mount
  useEffect(() => {
    const t = setTimeout(() => {
      let p = 15;
      const iv = setInterval(() => {
        p += 1.3;
        if (p >= 48 && prevSlider.current < 48) setWashKey((k) => k + 1);
        prevSlider.current = p;
        setSliderX(p);
        if (p >= 85) clearInterval(iv);
      }, 16);
    }, 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-4 border border-primary-100">Before & After</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-900 mb-4">See The <span className="gradient-text">Difference</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto">Drag the slider to reveal how Yavix Energy transforms dust-covered panels into peak-efficiency clean energy generators.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
          ref={containerRef}
          onMouseDown={onMouseDown}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={(e) => calcPosition(e.touches[0].clientX)}
          className="relative mx-auto max-w-4xl rounded-3xl overflow-hidden border-2 border-primary-100 shadow-[0_24px_80px_rgba(0,102,255,0.12)] select-none"
          style={{ cursor: isDragging ? "grabbing" : "grab", aspectRatio: "16/9" }}
        >
          {/* AFTER – clean base layer */}
          <div className="absolute inset-0">
            <Image src="/panel-clean.png" alt="Clean solar panel" fill className="object-cover" style={{ filter: "brightness(1.08) saturate(1.2)" }} sizes="896px" />
            <div className="absolute inset-0 shine-overlay" />
            {/* YAVIX reflection */}
            <AnimatePresence>
              {sliderX > 62 && (
                <motion.p key="yavix" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center text-[clamp(28px,5vw,56px)] font-black tracking-[0.35em] pointer-events-none z-10"
                  style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.5)", textShadow: "0 4px 24px rgba(0,150,255,0.3)", transform: "skewY(-3deg)" }}>
                  YAVIX
                </motion.p>
              )}
            </AnimatePresence>
            {/* Wash sweep */}
            <AnimatePresence>
              {washKey > 0 && (
                <motion.div key={washKey}
                  initial={{ x: "-110%", opacity: 0 }} animate={{ x: "210%", opacity: [0, 1, 1, 0] }} transition={{ duration: 1.4, ease: "easeInOut" }}
                  className="absolute inset-0 pointer-events-none z-20"
                  style={{ background: "linear-gradient(90deg,transparent 0%,rgba(120,200,255,0.6) 40%,rgba(255,255,255,0.8) 50%,rgba(120,200,255,0.6) 60%,transparent 100%)", transform: "skewX(-8deg)" }}
                />
              )}
            </AnimatePresence>
            <div className="absolute bottom-4 right-4 z-30">
              <span className="px-3 py-1.5 rounded-lg bg-primary-500 text-white text-[11px] font-bold tracking-wider uppercase shadow">✓ After Cleaning</span>
            </div>
            <AnimatePresence>
              {sliderX > 50 && (
                <motion.div key="eff" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ type: "spring", stiffness: 200 }}
                  className="absolute top-4 right-4 z-30 glass rounded-2xl px-4 py-2.5 border border-primary-200">
                  <p className="text-[11px] text-primary-600 font-semibold">Efficiency Gain</p>
                  <p className="text-2xl font-extrabold text-primary-700">+30%</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* BEFORE – dirty clipped layer */}
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderX}%` }}>
            <div className="absolute inset-0" style={{ width: `${(100 / sliderX) * 100}%` }}>
              <Image src="/panel-dirty.png" alt="Dirty solar panel" fill className="object-cover"
                style={{ filter: "sepia(0.7) saturate(0.4) brightness(0.72) contrast(1.1)" }} sizes="896px" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(139,90,43,0.35) 0%,rgba(101,67,33,0.25) 50%,rgba(139,90,43,0.35) 100%)", mixBlendMode: "multiply" }} />
              <div className="absolute bottom-4 left-4 z-30">
                <span className="px-3 py-1.5 rounded-lg bg-gray-700/80 text-white text-[11px] font-bold tracking-wider uppercase shadow">✗ Before Cleaning</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="absolute top-0 bottom-0 z-40 flex items-center" style={{ left: `${sliderX}%`, transform: "translateX(-50%)" }}>
            <div className="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_12px_rgba(0,102,255,0.7)]" />
            <div className="relative w-12 h-12 rounded-full bg-white border-4 border-primary-500 shadow-[0_0_24px_rgba(0,102,255,0.45)] flex items-center justify-center z-10">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l-6-6 6-6" /><path d="M15 6l6 6-6 6" />
              </svg>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { icon: "🌫️", title: "Dust Loss", desc: "Heavy dust reduces power by up to 30%" },
            { icon: "💧", title: "Yavix Clean", desc: "Pure water treatment, zero panel damage" },
            { icon: "⚡", title: "Peak Efficiency", desc: "Full power restoration in one session" },
          ].map((c) => (
            <div key={c.title} className="glass-blue rounded-2xl p-4 text-center border border-primary-100">
              <span className="text-2xl">{c.icon}</span>
              <p className="font-semibold text-primary-900 mt-1 text-[14px]">{c.title}</p>
              <p className="text-[12px] text-gray-500 mt-0.5">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
