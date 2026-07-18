"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { NAV_SERVICE_LINKS } from "@/lib/seo/nav-services";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    children: [...NAV_SERVICE_LINKS],
  },
  { label: "Locations", href: "/locations" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-study" },
  { label: "Blogs", href: "/blogs" },
  { label: "Guides", href: "/guides" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const WA_NUMBER = "919274371058";
const WA_MSG = encodeURIComponent(
  "Hello Yavix Solar Cleaning! I'd like to book a solar panel cleaning service.",
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const isSolid = true;

  const headerClassName = isSolid
    ? "bg-white shadow-lg border-b border-slate-200"
    : "bg-transparent";

  const getLinkClassName = (active: boolean) =>
    active
      ? isSolid
        ? "text-primary-600"
        : "text-white"
      : isSolid
        ? "text-slate-700 hover:text-primary-600"
        : "text-white/90 hover:text-white";

  const getLinkBarClassName = (active: boolean) =>
    active
      ? "opacity-100 scale-x-100 bg-primary-500"
      : isSolid
        ? "opacity-0 scale-x-0 bg-primary-500 group-hover:opacity-100 group-hover:scale-x-100"
        : "opacity-0 scale-x-0 bg-white group-hover:opacity-100 group-hover:scale-x-100";

  const ctaClassName = isSolid
    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600 border border-primary-500"
    : "bg-white/90 text-slate-900 shadow-lg shadow-black/10 hover:bg-white border border-white/70";

  const menuButtonClassName = isSolid
    ? "text-slate-700 hover:bg-primary-50"
    : "text-white hover:bg-white/20";

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100]  ease-out ${headerClassName}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between py-4">
            <Link href="/" className="group flex items-center gap-3">
              <img
                src={isSolid ? "/images/logos/Logo.avif" : "/images/logos/Logo%20w%20R%20white.png"}
                alt="Yavix Solar Cleaning"
                className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105 sm:h-8 md:h-10 lg:h-12"
              />
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => {
                if (link.children) {
                  const active = isActive(link.href);
                  return (
                    <div
                      key={link.href}
                      className="relative group"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`group relative px-4 py-2 text-[14px] font-medium transition-colors duration-200 inline-flex items-center gap-1 ${getLinkClassName(active)}`}
                      >
                        {link.label}
                        <ChevronDown className="h-3.5 w-3.5" />
                        <span
                          className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full transition-all duration-300 ${getLinkBarClassName(active)}`}
                        />
                      </Link>
                      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                        <div className="w-56 rounded-xl bg-white border border-gray-100 shadow-xl py-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative px-4 py-2 text-[14px] font-medium transition-colors duration-200 ${getLinkClassName(active)}`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-[2px] rounded-full transition-all duration-300 ${getLinkBarClassName(active)}`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden items-center gap-2 rounded-xl px-5 py-2.5 text-[13px] font-semibold transition-all duration-200 active:scale-95 md:inline-flex ${ctaClassName}`}
              >
                <Zap className="h-3.5 w-3.5" />
                Book Cleaning
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`rounded-lg p-2 transition-colors md:hidden ${menuButtonClassName}`}
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ type: "spring", stiffness: 130, damping: 18 }}
            className="fixed inset-x-0 top-[72px] z-[99] bg-white shadow-2xl border-t border-slate-100 md:hidden overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                      isActive(link.href)
                        ? "bg-primary-50 text-primary-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mb-2">
                      {link.children.slice(1).map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-500 hover:text-primary-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-5 py-3 text-[14px] font-semibold text-white"
              >
                <Zap className="h-4 w-4" />
                Book Cleaning
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
