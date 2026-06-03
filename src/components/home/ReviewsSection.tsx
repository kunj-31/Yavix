"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const VerifiedBadge = () => (
  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 shrink-0 border border-emerald-100">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  </div>
);

const VerifiedBadgeMini = () => (
  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 shrink-0 border border-emerald-100">
    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

const reviews = [
  {
    name: "Kunj Desai",
    location: "Thakkarbapanagar, Ahmedabad",
    time: "a year ago",
    rating: 5,
    text: "Very happy with the service! Smooth installation, great support, and excellent solar performance.",
    initials: "KD",
    color: "from-blue-500 to-primary-600"
  },
  {
    name: "Smit Hirani",
    location: "Ahmedabad, Gujarat",
    time: "a year ago",
    rating: 5,
    text: "Excellent service.. cleaning done very efficiently.. highly recommended.. the owner personally remains present during the cleaning and ensures best results and customer satisfaction.",
    initials: "SH",
    color: "from-cyan-500 to-blue-500"
  },
  {
    name: "Radadiya Bhaveshbhai",
    location: "Ahmedabad, Gujarat",
    time: "a year ago",
    rating: 5,
    text: "Funstatic result after 1 wash i have booked AMC with yavix solar energy....",
    initials: "RB",
    color: "from-teal-500 to-cyan-500"
  },
  {
    name: "Faizan Sanghariyat",
    location: "Ahmedabad, Gujarat",
    time: "a year ago",
    rating: 5,
    text: "The service was soo excellent. Satisfied with their job and really appreciate it.",
    initials: "FS",
    color: "from-primary-600 to-primary-500"
  },
  {
    name: "Rutvik Hiranee",
    location: "Thakkarbapanagar, Ahmedabad",
    time: "a year ago",
    rating: 5,
    text: "Once again very well done !! I think in my city this is the only most affordable solar panel cleaning services I have seen so far. Their staff is co -operative trained & professional.",
    initials: "RH",
    color: "from-green-500 to-teal-500"
  },
  {
    name: "Reena Patel",
    location: "Ahmedabad, Gujarat",
    time: "a year ago",
    rating: 5,
    text: "The solar panel cleaning service was great they respond Ed quickly and did a fantastic job. I'm really happy with their service and would definitely recommend 👌👌",
    initials: "RP",
    color: "from-blue-600 to-cyan-600"
  },
  {
    name: "Patel Dipak",
    location: "Ahmedabad, Gujarat",
    time: "a year ago",
    rating: 5,
    text: "Good solar cleaning I cleaned my 10 panels. And increased in power generation",
    initials: "PD",
    color: "from-cyan-600 to-teal-600"
  },
  {
    name: "Ethel Freya",
    location: "Ahmedabad, Gujarat",
    time: "a year ago",
    rating: 5,
    text: "It was great experience with yavix. I have some problem solar panel cleaning my home. Then am connect yavix and short out my cleaning problem. Yavix totally team work and team behaviour very politely nature.",
    initials: "EF",
    color: "from-violet-500 to-fuchsia-500"
  },
  {
    name: "Vivek Patel",
    location: "Ahmedabad, Gujarat",
    time: "a year ago",
    rating: 5,
    text: "Affordable and effective! I’ll call them again next month",
    initials: "VP",
    color: "from-purple-500 to-indigo-500"
  },
  {
    name: "Rushang Chovatiya",
    location: "Ahmedabad, Gujarat",
    time: "a year ago",
    rating: 5,
    text: "I thought solar cleaning is not needed, but these guys proved me wrong. Bahut acchi tarah clean kiya. Friendly staff, worth the price!",
    initials: "RC",
    color: "from-pink-500 to-rose-500"
  },
  {
    name: "Rohit Singh",
    location: "Ahmedabad, Gujarat",
    time: "a year ago",
    rating: 5,
    text: "I took deep solar cleaning for hard stains and result in good. He offered annual plan also. Overall good solar cleaning service.",
    initials: "RS",
    color: "from-amber-500 to-orange-500"
  },
  {
    name: "Patel Chirag",
    location: "Ahmedabad, Gujarat",
    time: "a year ago",
    rating: 5,
    text: "We had done deep chemical cleaning due to Cement deposition on it. After cleaning got excellent electricity generation. Value for money.",
    initials: "PC",
    color: "from-emerald-500 to-teal-500"
  },
  {
    name: "Tapan Patel",
    location: "Ahmedabad, Gujarat",
    time: "a year ago",
    rating: 5,
    text: "Got my solar panels cleaned, and I can see the power boost! Super happy with the yavix energy solar cleaning experts work",
    initials: "TP",
    color: "from-sky-500 to-blue-500"
  },
  {
    name: "Sahil Gajera",
    location: "Ahmedabad, Gujarat",
    time: "a year ago",
    rating: 5,
    text: "Great job! The panels look brand new after cleaning, and my system's performance has improved",
    initials: "SG",
    color: "from-indigo-600 to-blue-600"
  },
  {
    name: "Dipak Baviskar",
    location: "Ahmedabad, Gujarat",
    time: "a year ago",
    rating: 5,
    text: "Excellent work done by yavix solar cleaning service totally satisfied with their works and service.",
    initials: "DB",
    color: "from-teal-600 to-emerald-600"
  }
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [visibleCount, setVisibleCount] = useState(3);
  const total = reviews.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = total - visibleCount;
  const safeCurrent = Math.min(current, maxIndex);

  const next = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1));

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(next, 4500);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, current, maxIndex]);

  const visible = reviews.slice(safeCurrent, safeCurrent + visibleCount);

  return (
    <section className="section-pad bg-[#f8fafc] border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-16 flex flex-col items-center"
        >

          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[12px] font-semibold tracking-widest uppercase mb-4 border border-primary-100">
            CUSTOMER REVIEWS
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-none">
            What Our <span className="text-primary-600">Customers Say</span>
          </h2>
          
          {/* Aggregate Rating Widget Header */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white border border-gray-100/80 p-5 rounded-3xl shadow-sm max-w-xl w-full justify-center">
            <div className="flex items-center gap-3">
              <VerifiedBadge />
              <div className="text-left">
                <p className="font-extrabold text-[15px] text-gray-900 leading-tight">Customer Reviews</p>
              </div>
            </div>
            
            <div className="w-px h-8 bg-gray-200 hidden sm:block" />

            <div className="flex items-center gap-3">
              <span className="font-black text-3xl text-gray-900">5.0</span>
              <div className="flex flex-col items-start">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-[11px] text-gray-400 font-bold mt-0.5">91 Verified Customer Reviews</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative min-h-[300px] flex flex-col justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Inner relative container with padding to hold the absolute-positioned arrows on left and right */}
          <div className="relative px-10 sm:px-14">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {visible.map((r, i) => (
                <motion.div
                  key={`${r.name}-${safeCurrent}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:border-primary-100 group min-h-[280px] text-left"
                >
                  <div>
                    {/* Top: Star Rating & Verified Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star 
                            key={j} 
                            className={`w-4 h-4 ${j < r.rating ? "text-amber-400 fill-amber-400" : "text-gray-200"}`} 
                          />
                        ))}
                      </div>
                      <VerifiedBadgeMini />
                    </div>

                    {/* Middle: Review text */}
                    <p className="text-[13.5px] text-gray-600 leading-relaxed font-semibold italic mb-5">
                      &ldquo;{r.text}&rdquo;
                    </p>
                  </div>

                  {/* Bottom: Author details */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-50 mt-auto">
                    <div className="relative shrink-0">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white text-[13px] font-bold`}>
                        {r.initials}
                      </div>
                      {/* Tiny Verified check badge */}
                      <div className="absolute -bottom-0.5 -right-0.5 bg-emerald-500 rounded-full p-0.5 shadow-sm border border-white text-white">
                        <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-left flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-extrabold text-[14px] text-primary-900 leading-tight">{r.name}</p>
                        <span className="text-[10px] text-gray-400 font-bold">{r.time}</span>
                      </div>
                      <div className="flex items-center mt-0.5">
                        <p className="text-[11px] text-gray-400 font-semibold">{r.location}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Left side flanking navigation arrow */}
            <button 
              onClick={prev} 
              className="absolute left-1 sm:left-0 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-gray-400 hover:text-primary-600 hover:border-primary-200 transition-all hover:scale-105 active:scale-95 z-10"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Right side flanking navigation arrow */}
            <button 
              onClick={next} 
              className="absolute right-1 sm:right-0 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-gray-400 hover:text-primary-600 hover:border-primary-200 transition-all hover:scale-105 active:scale-95 z-10"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
