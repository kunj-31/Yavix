"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag, User } from "lucide-react";
import type { BlogPost } from "@/lib/blogs";

export default function BlogsClient({ blogs }: { blogs: BlogPost[] }) {
  if (blogs.length === 0) return null;
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-pad bg-hero-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={false}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-6 border border-primary-100">Knowledge Hub</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-900 mb-4">Solar <span className="gradient-text">Insights</span></h1>
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
