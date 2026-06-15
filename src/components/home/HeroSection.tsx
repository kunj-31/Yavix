"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { CSSProperties } from "react";
import { Zap, MessageCircle, ArrowRight, Star } from "lucide-react";

const WA_NUMBER = "919274371058";
const BOOK_MSG  = encodeURIComponent("Hello Yavix Solar Cleaning! I want to book a solar panel cleaning service.");
const QUOTE_MSG = encodeURIComponent("Hello Yavix Solar Cleaning! I need a WhatsApp quote for solar panel cleaning.");

const Particle = ({ style }: { style: CSSProperties }) => (
  <span className="particle" style={style} />
);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{
    id: number; width: string; height: string; left: string;
    top: string; animationDuration: string; animationDelay: string; opacity: number;
  }>>([]);

  const [sliderX, setSliderX] = useState(15);
  const [isDragging, setIsDragging] = useState(false);
  const [washKey, setWashKey] = useState(0);
  const prevSlider = useRef(15);

  useEffect(() => {
    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        width:  `${4 + Math.random() * 6}px`,
        height: `${4 + Math.random() * 6}px`,
        left:   `${Math.random() * 100}%`,
        top:    `${Math.random() * 100}%`,
        animationDuration: `${4 + Math.random() * 5}s`,
        animationDelay:    `${Math.random() * 4}s`,
        opacity: 0.3 + Math.random() * 0.5,
      }))
    );
  }, []);

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Background blobs (Sky blue effect) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-8%] w-[45vw] h-[45vw] rounded-full bg-sky-300/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh] py-12">

          {/* ── LEFT: Content ── */}
          <div className="flex flex-col gap-6">


            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-tight text-gray-900"
            >
              Professional{" "}
              <span className="gradient-text">Solar Panel</span>{" "}
              Cleaning Services in Ahmedabad
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg text-gray-800 leading-relaxed max-w-[520px] font-medium"
            >
              Improve solar efficiency with premium solar panel cleaning and maintenance
              solutions for homes, offices, and industries.
            </motion.p>

            {/* Stars + trust */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm text-gray-800 font-semibold">
                <strong className="text-gray-900 font-extrabold">5.0</strong> · 200+ Happy Customers
              </span>
            </motion.div>

          </div>

          {/* ── RIGHT: Solar Panel Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex items-center justify-center w-full"
          >
            {/* Glow ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[85%] h-[85%] rounded-3xl bg-primary-400/15 blur-3xl animate-pulse" />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              {particles.map((p) => (
                <Particle
                  key={p.id}
                  style={{
                    width:             p.width,
                    height:            p.height,
                    left:              p.left,
                    top:               p.top,
                    animationDuration: p.animationDuration,
                    animationDelay:    p.animationDelay,
                    opacity:           p.opacity,
                    position:          "absolute",
                    borderRadius:      "50%",
                    background:        "rgba(0,102,255,0.35)",
                    animation:         `float-particle ${p.animationDuration} ease-in-out infinite`,
                  }}
                />
              ))}
            </div>

            {/* Movable Before & After Slider - MEDIUM SIZE */}
            <div
              ref={containerRef}
              onMouseDown={onMouseDown}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={(e) => calcPosition(e.touches[0].clientX)}
              className="relative w-full max-w-[640px] rounded-[2rem] overflow-hidden shadow-[0_32px_80px_rgba(0,102,255,0.22)] select-none border-4 border-white"
              style={{ cursor: isDragging ? "grabbing" : "grab", aspectRatio: "4/3" }}
            >
              {/* AFTER – clean base layer */}
              <div className="absolute inset-0 pointer-events-none">
                <Image src="/panel-clean.png" alt="Clean solar panel" fill className="object-cover" style={{ filter: "brightness(1.08) saturate(1.2)", objectPosition: "center" }} sizes="(max-width: 768px) 100vw, 640px" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
                
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
              </div>

              {/* BEFORE – dirty clipped layer */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ width: `${sliderX}%` }}>
                <div className="absolute inset-0" style={{ width: `${(100 / sliderX) * 100}%` }}>
                  <Image src="/panel-dirty.png" alt="Dirty solar panel" fill className="object-cover"
                    style={{ filter: "sepia(0.7) saturate(0.4) brightness(0.72) contrast(1.1)", objectPosition: "center" }} sizes="(max-width: 768px) 100vw, 640px" priority />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(139,90,43,0.35) 0%,rgba(101,67,33,0.25) 50%,rgba(139,90,43,0.35) 100%)", mixBlendMode: "multiply" }} />
                </div>
              </div>

              {/* Movable Divider */}
              <div className="absolute top-0 bottom-0 z-40 flex items-center pointer-events-none" style={{ left: `${sliderX}%`, transform: "translateX(-50%)" }}>
                <div className="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_12px_rgba(0,102,255,0.7)]" />
                <div className="relative w-12 h-12 rounded-full bg-white border-4 border-primary-500 shadow-[0_0_24px_rgba(0,102,255,0.45)] flex items-center justify-center z-10">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l-6-6 6-6" /><path d="M15 6l6 6-6 6" />
                  </svg>
                </div>
              </div>

              {/* Labels & Dynamic Badge */}
              <div 
                className="absolute top-6 left-6 z-40 bg-black/40 backdrop-blur-md text-white text-[11px] uppercase tracking-wider font-bold px-4 py-2 rounded-full pointer-events-none border border-white/10 transition-opacity duration-300"
                style={{ opacity: sliderX > 50 ? 1 : 0 }}
              >
                Before
              </div>
              <div 
                className="absolute top-6 right-6 z-40 bg-primary-500/80 backdrop-blur-md text-white text-[11px] uppercase tracking-wider font-bold px-4 py-2 rounded-full pointer-events-none border border-white/20 shadow-lg shadow-primary-500/30 transition-opacity duration-300"
                style={{ opacity: sliderX < 50 ? 1 : 0 }}
              >
                After
              </div>
              <div className="absolute bottom-6 left-6 z-40 bg-white/95 backdrop-blur-xl rounded-2xl px-5 py-3 shadow-[0_12px_32px_rgba(0,102,255,0.2)] border border-white flex items-center gap-4 pointer-events-none transition-all">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Efficiency</span>
                  <span className="text-xl font-black text-gray-900 leading-none">
                    {Math.max(0, Math.min(100, Math.round(100 - ((sliderX - 5) / 90) * 100)))}%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
