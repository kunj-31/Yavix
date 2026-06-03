"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

const blogs = [
  {
    slug: "why-solar-cleaning-matters",
    category: "Education",
    readTime: "4 min read",
    title: "Why Solar Cleaning Matters More Than You Think",
    excerpt: "Most solar owners never clean their panels — and they're losing up to 30% of their energy output every single day. Here's the science behind why cleaning is critical.",
    color: "from-blue-500 to-primary-600",
    emoji: "☀️",
  },
  {
    slug: "solar-efficiency-tips",
    category: "Tips & Tricks",
    readTime: "5 min read",
    title: "10 Solar Efficiency Tips to Maximize Your Panel Output",
    excerpt: "Beyond cleaning, there are practical steps every solar owner can take to squeeze maximum efficiency from their system. We cover positioning, monitoring, and maintenance.",
    color: "from-cyan-500 to-teal-500",
    emoji: "⚡",
  },
  {
    slug: "dust-impact-solar-panels",
    category: "Research",
    readTime: "6 min read",
    title: "The Real Impact of Dust on Solar Panels in Gujarat",
    excerpt: "Gujarat's dry climate means panels accumulate dust faster than most regions. We analysed real data from 50 installations to show exactly how much dust costs you.",
    color: "from-amber-500 to-orange-500",
    emoji: "🌫️",
  },
  {
    slug: "solar-maintenance-guide",
    category: "Guide",
    readTime: "8 min read",
    title: "The Complete Solar Panel Maintenance Guide for 2025",
    excerpt: "A comprehensive guide covering inspection schedules, cleaning frequency, inverter health checks, and how to identify early signs of panel degradation.",
    color: "from-green-500 to-cyan-500",
    emoji: "🔧",
  },
];

export default function BlogsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-4 border border-primary-100">Knowledge Hub</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-900">
              Solar <span className="gradient-text">Insights</span>
            </h2>
          </div>
          <Link href="/blogs" className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary-600 hover:text-primary-700 group whitespace-nowrap">
            View All Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-card-hover overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail */}
              <div className={`h-40 bg-gradient-to-br ${b.color} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-6xl">{b.emoji}</span>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 shine-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-5 flex flex-col flex-1 gap-3">
                <div className="flex items-center gap-3 text-[11px] text-gray-400">
                  <span className="flex items-center gap-1"><Tag className="w-3 h-3" />{b.category}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{b.readTime}</span>
                </div>
                <h3 className="font-bold text-[14px] text-primary-900 leading-snug group-hover:text-primary-600 transition-colors">{b.title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed flex-1">{b.excerpt}</p>
                <Link
                  href={`/blogs/${b.slug}`}
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-primary-600 hover:text-primary-700 mt-auto group/btn"
                >
                  Read More <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
