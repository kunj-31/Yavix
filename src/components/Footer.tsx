import Link from "next/link";
import { Zap, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const WA_NUMBER = "919274371058";
const WA_MSG    = encodeURIComponent("Hello Yavix Energy! I'd like to get a solar cleaning quote.");

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* ── Brand ── */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="block text-[14px] font-extrabold text-primary-900">Yavix Energy</span>
                <span className="block text-[10px] text-primary-500 tracking-widest uppercase">Solar Cleaning Experts</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Ahmedabad&rsquo;s most trusted solar panel cleaning company. We restore efficiency with professional cleaning, maintenance, and care for homes, offices, and industries.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.062 5.248 5.308 0 11.77 0c3.13 0 6.073 1.22 8.285 3.435 2.21 2.215 3.428 5.16 3.424 8.29-.007 6.523-5.253 11.77-11.716 11.77-2.007 0-3.978-.515-5.727-1.498L0 24zm6.59-4.846c1.62.962 3.21 1.454 4.966 1.455 5.349 0 9.701-4.329 9.707-9.682.003-2.593-1.003-5.032-2.834-6.865-1.83-1.833-4.264-2.843-6.858-2.843-5.352 0-9.701 4.33-9.707 9.684-.001 1.838.48 3.593 1.392 5.155l-.979 3.573 3.659-.958zm12.308-5.367c-.211-.106-1.252-.618-1.448-.689-.196-.072-.34-.107-.482.106-.143.213-.553.689-.678.831-.125.143-.25.16-.462.054-.212-.107-.894-.33-1.703-1.053-.63-.562-1.055-1.257-1.179-1.47-.124-.213-.013-.328.093-.433.096-.095.212-.248.318-.372.106-.124.142-.213.213-.356.071-.142.035-.266-.017-.372-.054-.107-.482-1.16-.66-1.597-.173-.418-.363-.36-.498-.367-.129-.007-.277-.008-.426-.008-.149 0-.393.056-.599.28-.206.225-.785.767-.785 1.87 0 1.104.8 2.17.912 2.325.112.155 1.573 2.401 3.811 3.37.532.23 1.01.385 1.353.495.534.17 1.02.146 1.405.088.429-.064 1.252-.511 1.429-1.004.178-.492.178-.915.125-1.004-.053-.089-.196-.142-.408-.249z" />
                </svg>
              </a>
              <a
                href="tel:09274371058"
                className="w-9 h-9 rounded-lg bg-primary-500 flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                aria-label="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="text-[13px] font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home",        href: "/" },
                { label: "About",       href: "/about" },
                { label: "Shop Now",    href: "/shop" },
                { label: "Case Study",  href: "/case-study" },
                { label: "Blogs",       href: "/blogs" },
                { label: "Contact",     href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h3 className="text-[13px] font-semibold text-gray-900 uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Residential Cleaning",
                "Commercial Cleaning",
                "Industrial Cleaning",
                "Panel Inspection",
                "Annual Maintenance",
                "Emergency Service",
              ].map((s) => (
                <li key={s}>
                  <span className="text-sm text-gray-500">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div>
            <h3 className="text-[13px] font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-500 leading-relaxed">
                  36, Thakkarnagar Rd, near Sahjanand Hospital,<br />
                  Bhagyoday Society, Thakkarbapanagar,<br />
                  Ahmedabad, Gujarat 382350
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                <a href="tel:09274371058" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                  09274371058
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                <a href="mailto:info@yavixenergy.com" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                  info@yavixenergy.com
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-500 shrink-0">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.062 5.248 5.308 0 11.77 0c3.13 0 6.073 1.22 8.285 3.435 2.21 2.215 3.428 5.16 3.424 8.29-.007 6.523-5.253 11.77-11.716 11.77-2.007 0-3.978-.515-5.727-1.498L0 24zm6.59-4.846c1.62.962 3.21 1.454 4.966 1.455 5.349 0 9.701-4.329 9.707-9.682.003-2.593-1.003-5.032-2.834-6.865-1.83-1.833-4.264-2.843-6.858-2.843-5.352 0-9.701 4.33-9.707 9.684-.001 1.838.48 3.593 1.392 5.155l-.979 3.573 3.659-.958zm12.308-5.367c-.211-.106-1.252-.618-1.448-.689-.196-.072-.34-.107-.482.106-.143.213-.553.689-.678.831-.125.143-.25.16-.462.054-.212-.107-.894-.33-1.703-1.053-.63-.562-1.055-1.257-1.179-1.47-.124-.213-.013-.328.093-.433.096-.095.212-.248.318-.372.106-.124.142-.213.213-.356.071-.142.035-.266-.017-.372-.054-.107-.482-1.16-.66-1.597-.173-.418-.363-.36-.498-.367-.129-.007-.277-.008-.426-.008-.149 0-.393.056-.599.28-.206.225-.785.767-.785 1.87 0 1.104.8 2.17.912 2.325.112.155 1.573 2.401 3.811 3.37.532.23 1.01.385 1.353.495.534.17 1.02.146 1.405.088.429-.064 1.252-.511 1.429-1.004.178-.492.178-.915.125-1.004-.053-.089-.196-.142-.408-.249z" />
                </svg>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-green-600 transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-gray-400">
            © {new Date().getFullYear()} Yavix Energy – Solar Cleaning Experts. All rights reserved.
          </p>
          <p className="text-[13px] text-gray-400">
            Ahmedabad, Gujarat, India &middot; Open 24 Hours
          </p>
        </div>
      </div>
    </footer>
  );
}
