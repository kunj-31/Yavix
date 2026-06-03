"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag, User } from "lucide-react";

const blogs = [
  { slug: "why-solar-cleaning-matters", category: "Education", readTime: "4 min", author: "Yavix Team", date: "May 2025", title: "Why Solar Cleaning Matters More Than You Think", excerpt: "Most solar owners never clean their panels — and they're losing up to 30% of their energy output every single day. Here's the science behind why cleaning is critical for every solar installation in Gujarat.", color: "from-blue-500 to-primary-600", emoji: "☀️", tags: ["Cleaning", "Efficiency", "Basics"] },
  { slug: "solar-efficiency-tips", category: "Tips & Tricks", readTime: "5 min", author: "Yavix Team", date: "April 2025", title: "10 Solar Efficiency Tips to Maximize Your Panel Output", excerpt: "Beyond cleaning, there are practical steps every solar owner can take to squeeze maximum efficiency from their system — panel orientation, monitoring tools, shade management, and more.", color: "from-cyan-500 to-teal-500", emoji: "⚡", tags: ["Efficiency", "Optimization", "Tips"] },
  { slug: "dust-impact-solar-panels", category: "Research", readTime: "6 min", author: "Yavix Research", date: "March 2025", title: "The Real Impact of Dust on Solar Panels in Gujarat", excerpt: "Gujarat's dry climate means panels accumulate dust faster than most regions. We analysed real output data from 50 Ahmedabad installations to show exactly how much dust costs you in rupees per month.", color: "from-amber-500 to-orange-500", emoji: "🌫️", tags: ["Dust", "Gujarat", "Data"] },
  { slug: "solar-maintenance-guide", category: "Guide", readTime: "8 min", author: "Yavix Team", date: "February 2025", title: "The Complete Solar Panel Maintenance Guide for 2025", excerpt: "A comprehensive guide covering inspection schedules, cleaning frequency, inverter health, battery care, and how to identify early signs of panel degradation before they cost you money.", color: "from-green-500 to-cyan-500", emoji: "🔧", tags: ["Maintenance", "Guide", "Inverter"] },
  { slug: "monsoon-solar-tips", category: "Seasonal", readTime: "4 min", author: "Yavix Team", date: "January 2025", title: "Preparing Your Solar Panels for Gujarat Monsoon Season", excerpt: "Monsoon can be great for natural cleaning — but it can also leave behind algae, hard water stains, and sediment. Here's how to prepare and what to do after the rains.", color: "from-teal-500 to-blue-500", emoji: "🌧️", tags: ["Monsoon", "Seasonal", "Gujarat"] },
  { slug: "choosing-solar-cleaner", category: "Buyer's Guide", readTime: "5 min", author: "Yavix Team", date: "December 2024", title: "How to Choose the Right Solar Cleaning Service in Ahmedabad", excerpt: "Not all solar cleaning companies are equal. We share exactly what to look for — equipment, water quality, experience, pricing, and red flags to avoid when hiring a cleaning service.", color: "from-rose-500 to-pink-500", emoji: "🔍", tags: ["Hiring", "Tips", "Ahmedabad"] },
];

export default function BlogsClient() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-pad bg-hero-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-6 border border-primary-100">Knowledge Hub</span>
            <h1 className="text-5xl font-extrabold text-primary-900 mb-4">Solar <span className="gradient-text">Insights</span></h1>
            <p className="text-gray-500 text-lg">Expert guidance on solar panel care, cleaning, and efficiency — straight from Ahmedabad&apos;s trusted cleaning specialists.</p>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Featured large */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="group rounded-3xl border border-gray-100 shadow-sm hover:shadow-card-hover overflow-hidden transition-all duration-300 flex flex-col">
              <div className={`h-52 bg-gradient-to-br ${blogs[0].color} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-8xl">{blogs[0].emoji}</span>
                <div className="absolute inset-0 shine-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {blogs[0].tags.map((t) => <span key={t} className="px-2 py-0.5 rounded-full bg-primary-50 text-primary-600 text-[10px] font-semibold">{t}</span>)}
                </div>
                <h2 className="text-xl font-extrabold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors">{blogs[0].title}</h2>
                <p className="text-[14px] text-gray-500 leading-relaxed flex-1">{blogs[0].excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-3 text-[12px] text-gray-400">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />{blogs[0].author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{blogs[0].readTime}</span>
                    <span>{blogs[0].date}</span>
                  </div>
                  <Link href={`/blogs/${blogs[0].slug}`} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary-600 group/btn">
                    Read More <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Secondary stack */}
            <div className="flex flex-col gap-5">
              {blogs.slice(1, 3).map((b, i) => (
                <motion.div key={b.slug} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group flex gap-4 p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-primary-100 hover:shadow-glass transition-all">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${b.color} flex items-center justify-center text-3xl shrink-0`}>{b.emoji}</div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-center gap-2 text-[11px] text-gray-400">
                      <Tag className="w-3 h-3" />{b.category} · {b.readTime}
                    </div>
                    <h3 className="font-bold text-[14px] text-primary-900 leading-snug group-hover:text-primary-600 transition-colors">{b.title}</h3>
                    <Link href={`/blogs/${b.slug}`} className="text-[12px] font-semibold text-primary-600 inline-flex items-center gap-1 mt-1">
                      Read More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Remaining cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {blogs.slice(3).map((b, i) => (
              <motion.div key={b.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-3xl border border-gray-100 shadow-sm hover:shadow-card-hover overflow-hidden transition-all duration-300 flex flex-col">
                <div className={`h-36 bg-gradient-to-br ${b.color} flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-5xl">{b.emoji}</span>
                  <div className="absolute inset-0 shine-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-2">
                    <Tag className="w-3 h-3" />{b.category} · {b.readTime}
                  </div>
                  <h3 className="font-bold text-[14px] text-primary-900 leading-snug mb-2 group-hover:text-primary-600 transition-colors flex-1">{b.title}</h3>
                  <Link href={`/blogs/${b.slug}`} className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-primary-600 mt-auto group/btn">
                    Read More <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
