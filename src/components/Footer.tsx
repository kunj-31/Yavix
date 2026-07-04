import Link from "next/link";
import { Zap, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { footer, label } from "framer-motion/client";

const WA_NUMBER = "919274371058";
const WA_MSG = encodeURIComponent("Hello Yavix Solar Cleaning! I'd like to get a solar cleaning quote.");

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-12">
          {/* ── Brand ── */}
          <div className="md:col-span-4 lg:col-span-4 mb-4 md:mb-6 pr-6">
            <Link href="/" className="flex items-center mb-2">
              <img src="/images/logos/Logo.avif" alt="Yavix Solar Cleaning" loading="lazy" className="h-12 sm:h-14 w-auto object-contain" />
            </Link>

            <p className="text-[14px] text-gray-600 leading-7 text-justify">
              Ahmedabad's most trusted solar panel cleaning company. As dedicated professional solar panel cleaning specialists, we restore efficiency and maximize energy output through expert cleaning services for residential, commercial, and industrial properties.
            </p>
          </div>

          {/* ── Services ── */}
          <div className="md:col-span-3 lg:col-span-3 mb-4 md:mb-6">
            <h3 className="text-[13px] font-semibold text-gray-900 uppercase tracking-wider mb-2.5 md:mb-4">
              Services
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                "Residential Solar Cleaning",
                "Commercial Solar Cleaning",
                "Industrial Solar Cleaning",
                "Utility-Scale Solar Farm Cleaning",
                "Salt & Mineral Deposit Removal",
                "Annual Cleaning Contracts (ACC)"
              ].map((s) => (
                <li key={s}>
                  <Link href="/#services" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Quick Links ── */}
          <div className="md:col-span-2 lg:col-span-2 mb-4 md:mb-6">
            <h3 className="text-[13px] font-semibold text-gray-900 uppercase tracking-wider mb-2.5 md:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Case Studies", href: "/case-study" },
                { label: "Blogs", href: "/blogs" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div className="md:col-span-3 lg:col-span-3 mb-4 md:mb-6">
            <h3 className="text-[13px] font-semibold text-gray-900 uppercase tracking-wider mb-2.5 md:mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2.5 md:space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                <a href="tel:+919274371058" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                  +91 92743 71058
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                <a href="mailto:yavixenergy@gmail.com" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                  yavixenergy@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-500 mt-1 shrink-0" />
                <span className="text-sm text-gray-500 leading-relaxed">
                  36, Bhagyoday Society, Thakkarbapanagar Road, <br />
                  Ahmedabad, Gujarat 382350
                </span>
              </li>
              <li className="flex items-center gap-2 mt-4">
                <a href="https://facebook.com/profile.php?id=61574586806347" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" loading="lazy" className="w-8 h-8" />
                </a>
                <a href="https://www.instagram.com/yavix_solarcleaning" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" loading="lazy" className="w-8 h-8" />
                </a>
                <a href="https://www.youtube.com/@YavixSolar" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" loading="lazy" className="w-8 h-8" />
                </a>
                <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" loading="lazy" className="w-8 h-8" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-6 sm:mt-12 pt-6 border-t border-gray-200 flex justify-start items-center">
          <p className="text-xs sm:text-sm text-gray-400 text-left">
            © 2026 Yavix Solar Cleaning. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer >
  );
}
