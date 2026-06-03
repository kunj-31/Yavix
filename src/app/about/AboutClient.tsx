"use client";

import { motion } from "framer-motion";
import { Zap, Users, Award, Heart, Target, Shield } from "lucide-react";

const values = [
  { 
    image: "/images/cleaning-method/step-1-inspection.png",
    icon: <Target className="w-6 h-6" />, 
    title: "Precision", 
    desc: "Every panel gets the same meticulous attention — no shortcuts, no missed spots.", 
    color: "from-blue-500 to-primary-600" 
  },
  { 
    image: "/images/cleaning-method/step-3-water-treatment.png",
    icon: <Shield className="w-6 h-6" />, 
    title: "Safety", 
    desc: "We use only certified, damage-free equipment. No harsh chemicals, ever.", 
    color: "from-cyan-500 to-teal-500" 
  },
  { 
    image: "/images/why-cleaning/cleaning-panels.png",
    icon: <Heart className="w-6 h-6" />, 
    title: "Care", 
    desc: "We treat every customer's solar installation as if it were our own.", 
    color: "from-rose-500 to-pink-500" 
  },
  { 
    image: "/images/why-cleaning/clean-panels.png",
    icon: <Award className="w-6 h-6" />, 
    title: "Excellence", 
    desc: "5-star rated across all platforms with 200+ verified happy customers.", 
    color: "from-amber-500 to-orange-500" 
  },
];

const team = [
  { name: "Yavix Founder", role: "Founder & CEO", initials: "YF", color: "from-blue-500 to-primary-600" },
  { name: "Operations Lead", role: "Head of Operations", initials: "OL", color: "from-cyan-500 to-blue-500" },
  { name: "Tech Specialist", role: "Senior Technician", initials: "TS", color: "from-teal-500 to-cyan-500" },
  { name: "Customer Support", role: "Client Relations", initials: "CS", color: "from-green-500 to-teal-500" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-pad bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-6 border border-primary-100">About Us</span>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-primary-900 mb-6">
                Powering <span className="gradient-text">Clean Energy</span> in Ahmedabad
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                Yavix Energy was founded with a single mission — to help solar owners in Gujarat get every watt of power their panels are capable of producing. We believe clean panels are the simplest, most impactful upgrade any solar owner can make.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-4 border border-primary-100">Our Story</span>
              <h2 className="text-4xl font-extrabold text-primary-900 mb-6">From a Local Problem to a City-Wide Solution</h2>
              <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed">
                <p>Our founder noticed that despite investing lakhs in solar systems, most homeowners and businesses in Ahmedabad were getting far less electricity than their panels were rated for — simply because of dust.</p>
                <p>Gujarat&apos;s dry climate means solar panels accumulate a thick layer of dust, pollution, and bird droppings within weeks. Without regular professional cleaning, panels can lose 20–35% of their output permanently.</p>
                <p>Yavix Energy was built to solve this problem at scale — with professional equipment, trained technicians, and a commitment to zero-damage cleaning that every solar owner in Ahmedabad deserves.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4">
              {[
                { val: "2021", label: "Founded" },
                { val: "5000+", label: "Panels Cleaned" },
                { val: "91+", label: "Verified Reviews" },
                { val: "5.0★", label: "Customer Rating" },
              ].map((s) => (
                <div key={s.label} className="p-6 rounded-3xl bg-[#f7faff] border border-primary-100 text-center">
                  <p className="text-4xl font-extrabold text-primary-600 mb-1">{s.val}</p>
                  <p className="text-[13px] text-gray-500">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-[#f7faff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-4 border border-primary-100">Our Values</span>
            <h2 className="text-4xl font-extrabold text-primary-900">What Drives Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,102,255,0.14)" }}
                className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-300 overflow-hidden flex flex-col justify-between h-full hover:border-primary-200 group">
                <div>
                  {/* Premium Aspect-4/3 Card Image */}
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 relative shadow-md group-hover:scale-[1.02] transition-transform duration-300">
                    <img 
                      src={v.image} 
                      alt={v.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center text-white shadow-md`}>
                      {v.icon}
                    </div>
                    <h3 className="font-extrabold text-[16px] text-primary-900 leading-none">{v.title}</h3>
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-medium">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-4 border border-primary-100">Our Team</span>
            <h2 className="text-4xl font-extrabold text-primary-900">The People Behind <span className="gradient-text">Yavix</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-6 rounded-3xl bg-[#f7faff] border border-primary-50 hover:border-primary-200 transition-colors">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-2xl font-extrabold mx-auto mb-4 shadow-lg`}>{t.initials}</div>
                <p className="font-bold text-[15px] text-primary-900">{t.name}</p>
                <p className="text-[12px] text-gray-500 mt-1">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
