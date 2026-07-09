"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Building2,
  Factory,
  Sun,
  Droplets,
  ClipboardCheck,
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface ServiceStat {
  label: string;
  value: string;
}

interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  icon: React.ComponentType<any>;
  scope: string;
  type: string;
  features: string[];
  stats: ServiceStat[];
  waMsg: string;
}

const services: Service[] = [
  {
    id: "residential",
    title: "Residential Solar Cleaning",
    shortDesc:
      "House Rooftops • Flats • Apartments • Residential Societies • Villas • Farmhouses • Bungalows",
    longDesc:
      "Residential solar panels are exposed to dust, bird droppings, pollen, pollution, hard water stains and mineral deposits that can reduce energy generation over time. Our professional cleaning service uses specialized equipment and safe, industry-approved methods to remove contaminants and restore optimal performance.  \n\n Whether installed on a house, villa, bungalow, apartment, residential society, row house or farmhouse, we help maximize efficiency and protect your investment.",
    image: "/images/service/Service_1.avif",
    icon: Home,
    scope: "",
    type: "",
    features: [
      "Professional cleaning using specialized solar cleaning equipment",
      "Safe cleaning methods with no standing on solar panels",
      "Removal of dust, bird droppings and environmental buildup",
      "Soft-bristle brushes for scratch-free cleaning",
      "Safe telescopic pole cleaning for hard-to-reach panels",
      "Performance-focused cleaning to help maintain maximum efficiency",
    ],
    stats: [],
    waMsg:
      "Hello Yavix Solar Cleaning! I'd like to book a Residential Solar Cleaning service.",
  },
  {
    id: "commercial",
    title: "Commercial Solar Cleaning",
    shortDesc:
      "Office Buildings • Shopping Complexes • Schools • Colleges • Hospitals • Hotels • Business Parks",
    longDesc:
      "Commercial solar installations are a valuable investment, but dirt, pollution, bird droppings, hard water stains and mineral deposits can reduce energy output over time. Our professional cleaning service helps maintain maximum solar performance and operational efficiency through safe, performance-focused cleaning. \n\n From office buildings and shopping complexes to schools, hospitals, hotels and corporate campuses, our experienced team provides reliable cleaning with minimal disruption, helping your solar assets perform at their full potential.",
    image: "/images/service/Service_2.avif",
    icon: Building2,
    scope: "",
    type: "Enterprise Maintenance",
    features: [
      "Professional cleaning using specialized solar cleaning equipment",
      "Safe cleaning methods with no standing on solar panels",
      "Removal of dust, dirt, bird droppings and surface buildup",
      "Flexible scheduling around business operations",
      "Minimal disruption to daily business operations",
      "Performance-focused cleaning to help maintain maximum efficiency",
    ],
    stats: [],
    waMsg:
      "Hello Yavix Solar Cleaning! I'd like to book a Commercial Solar Cleaning service.",
  },
  {
    id: "industrial",
    title: "Industrial Solar Cleaning",
    shortDesc:
      "Factories • Manufacturing Plants • Warehouses • Industrial Parks • Logistics Centers • Processing Units.",
    longDesc:
      "Industrial solar installations operate in demanding environments where dust, manufacturing residues, airborne particles, hard water stains and mineral deposits can quickly accumulate on solar panels, reducing energy production and efficiency. Our professional cleaning service uses specialized equipment and proven methods to help maintain optimal performance. \n\n Whether installed on factories, warehouses, industrial parks, logistics hubs or processing units, we help protect your investment and maximize energy generation.",
    image: "/images/service/Service_3.avif",
    icon: Factory,
    scope: "Factories & Warehouses",
    type: "Heavy Duty Cleaning",
    features: [
      "Professional equipment for demanding environments",
      "Removal of heavy dust and industrial buildup",
      "No standing or walking on solar panels",
      "Safe cleaning for large rooftop installations",
      "Scalable solutions for large solar capacities",
      "Helps maximize return on solar investment",
    ],
    stats: [],
    waMsg:
      "Hello Yavix Solar Cleaning! I'd like to book an Industrial Solar Cleaning service.",
  },
  {
    id: "utility",
    title: "Utility-Scale Solar Farm Cleaning",
    shortDesc:
      "Solar Farms • Ground-Mounted Plants • Solar Parks • IPP Projects • Open Access Plants • Captive Power Plants",
    longDesc:
      "Utility-scale solar farms depend on clean panels to achieve maximum energy production and plant performance. Dust, environmental contaminants, hard water stains and mineral deposits can reduce generation across large installations. Our professional cleaning service uses efficient large-scale cleaning methods to help maintain optimal energy yield.\n\nWhether serving solar farms, solar parks, ground-mounted plants, utility projects, open access plants or captive power plants, we help maximize energy generation and protect solar assets.",
    image: "/images/service/Service_4.avif",
    icon: Sun,
    scope: "Multi-Megawatt Solar Farms",
    type: "Large-Scale Operations",
    features: [
      "Specialized cleaning for large-scale solar farms",
      "Safe cleaning methods for ground-mounted installations",
      "High-capacity cleaning for large panel volumes",
      "Removal of dust, dirt, and environmental buildup",
      "Efficient cleaning for utility-scale solar assets",
      "Helps maximize energy yield and plant performance",
    ],
    stats: [],
    waMsg:
      "Hello Yavix Solar Cleaning! I'd like to book a Utility-Scale Solar Farm Cleaning service.",
  },
  {
    id: "salt-mineral",
    title: "Specialized Salt & Mineral Deposit Removal",
    shortDesc:
      "Salt Deposits • Mineral Scaling • Hard Water Stains • Coastal Sites • Industrial Sites • Performance Recovery",
    longDesc:
      "Salt and mineral deposits are among the most stubborn contaminants found on solar panels. Caused by coastal environments, industrial emissions, hard water exposure, or sprinkler systems, these deposits can reduce light transmission and lower energy generation over time.\n\nOur specialized cleaning service safely removes salt deposits, mineral scaling and hard water stains using proven techniques and professional equipment. We never stand on panels or use abrasive methods, helping protect your investment and maximize solar performance.",
    image: "/images/service/Service_5.avif",
    icon: Droplets,
    scope: "Coastal & Hard-Water Regions",
    type: "Advanced Restoration",
    features: [
      "Removal of stubborn salt and mineral deposits",
      "Treatment of hard water stains and mineral scaling",
      "Safe cleaning without abrasive scrub pads or harsh chemicals",
      "No standing or walking directly on solar panels",
      "Specialized techniques for challenging surface deposits",
      "Helps restore solar performance affected by buildup",
    ],
    stats: [],
    waMsg:
      "Hello Yavix Solar Cleaning! I'd like to book a Specialized Salt & Mineral Deposit Removal service.",
  },
  {
    id: "acc",
    title: "Annual Cleaning Contracts (ACC)",
    shortDesc:
      "Monthly Plans • Quarterly Plans • Scheduled Cleaning • Priority Service • Multi-Site Coverage • Annual Agreements",
    longDesc:
      "Annual Cleaning Contracts (ACC) provide a scheduled and hassle-free solution to keep solar systems operating at peak performance year-round. Our customized cleaning plans help prevent the buildup of dust, dirt, bird droppings, hard water stains and mineral deposits that can reduce energy generation.\n\nSuitable for residential, commercial, industrial and utility-scale installations, our ACC services include scheduled visits and professional cleaning practices to maximize energy production, improve long-term performance and protect your solar investment.",
    image: "/images/service/Service_6.avif",
    icon: ClipboardCheck,
    scope: "All Solar Installations",
    type: "Contractual Maintenance",
    features: [
      "Scheduled monthly, quarterly, or custom cleaning plans",
      "Priority service with planned visit scheduling",
      "Consistent year-round solar system performance",
      "Reduced accumulation of dust, dirt, and mineral deposits",
      "Flexible maintenance plans for all system sizes",
      "Helps maintain maximum efficiency and return on investment (ROI)",
    ],
    stats: [],
    waMsg:
      "Hello Yavix Solar Cleaning! I'd like to learn more about the Annual Maintenance Contracts (AMC).",
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);
  const [containerNode, setContainerNode] = useState<HTMLDivElement | null>(null);
  const [mobileContainerNode, setMobileContainerNode] = useState<HTMLDivElement | null>(null);
  const [hasAnimatedHint, setHasAnimatedHint] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const mobileServices = [...services, ...services];
  const [isMobileView, setIsMobileView] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (containerNode) {
      const { scrollLeft } = containerNode;
      const scrollAmount = 352; // Card width (320px) + gap (32px)
      const targetScroll =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      containerNode.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const scrollMobileServicesTo = (index: number) => {
    if (!mobileContainerNode) return;

    const firstCard = mobileContainerNode.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard
      ? firstCard.getBoundingClientRect().width + 16
      : mobileContainerNode.clientWidth;

    mobileContainerNode.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (containerNode) {
      const { scrollLeft, scrollWidth, clientWidth } = containerNode;
      setShowLeftBtn(scrollLeft > 10);
      setShowRightBtn(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    if (containerNode) {
      containerNode.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleScroll);

      const timer = setTimeout(handleScroll, 100);
      return () => {
        containerNode.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
        clearTimeout(timer);
      };
    }
  }, [containerNode]);

  // Auto-scroll hint animation removed as requested

  useEffect(() => {
    if (!mobileContainerNode) return;

    const onMobileScroll = () => {
      const firstCard = mobileContainerNode.firstElementChild as HTMLElement | null;
      const cardWidth = firstCard
        ? firstCard.getBoundingClientRect().width + 16
        : mobileContainerNode.clientWidth;

      setActiveCardIndex(
        Math.max(0, Math.min(services.length - 1, Math.round(mobileContainerNode.scrollLeft / cardWidth)))
      );
    };

    onMobileScroll();
    mobileContainerNode.addEventListener("scroll", onMobileScroll, { passive: true });

    return () => {
      mobileContainerNode.removeEventListener("scroll", onMobileScroll);
    };
  }, [mobileContainerNode]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setIsMobileView(window.innerWidth < 640);

    const frame = window.requestAnimationFrame(() => {
      window.setTimeout(() => {
        setIsMobileView(window.innerWidth < 640);
      }, 10);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  // Intercept browser back button to close modal
  useEffect(() => {
    if (selectedService) {
      if (window.history.state?.modal !== "service") {
        window.history.pushState({ modal: "service" }, "");
      }
    }
  }, [selectedService]);

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (selectedService && (!e.state || e.state.modal !== "service")) {
        setSelectedService(null);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedService]);

  const closeModal = () => {
    if (window.history.state?.modal === "service") {
      window.history.back();
    }
    setSelectedService(null);
  };

  const handlePrevService = () => {
    if (selectedService) {
      const idx = services.findIndex((s) => s.id === selectedService.id);
      const prevIdx = (idx - 1 + services.length) % services.length;
      setSelectedService(services[prevIdx]);
    }
  };

  const handleNextService = () => {
    if (selectedService) {
      const idx = services.findIndex((s) => s.id === selectedService.id);
      const nextIdx = (idx + 1) % services.length;
      setSelectedService(services[nextIdx]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedService]);

  return (
    <section
      id="services"
      className="pt-24 pb-12 sm:py-16 md:py-24 bg-[#f8fafc] border-y border-gray-100 relative overflow-hidden"
    >
      {/* Decorative ambient backgrounds */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-glow pointer-events-none opacity-40 rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-glow pointer-events-none opacity-30 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Centered */}
        <div className="mb-20 text-center flex flex-col items-center">
          <div className="flex flex-col items-center gap-2 mb-4">
            <span className="inline-block px-5 py-2 rounded-full bg-primary-50 text-primary-600 text-[13px] font-extrabold tracking-widest uppercase border border-primary-100 shrink-0">
              OUR SERVICES
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-primary-900 mb-4">
              <span className="gradient-text">Professional </span>Solar Panel
              Cleaning
            </h2>
            <p>
              Maximize energy output, extend panel life and protect your solar
              investment with expert cleaning services.
            </p>
          </div>
        </div>

        {/* Slider Wrapper with side padding for buttons */}
        <div className="relative px-0 sm:px-14">
          <div className="sm:hidden -mx-4 px-4">
            <div
              ref={setMobileContainerNode}
              className="flex w-full touch-pan-x gap-4 overflow-x-auto overscroll-x-contain pb-2 scroll-smooth scrollbar-none"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollBehavior: "smooth",
              }}
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    initial={{ opacity: 0, y: 32, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.06,
                    }}
                    className="w-[calc(100vw-44px)] shrink-0 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 relative bg-slate-50">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <h3 className="font-extrabold text-[18px] text-slate-900 leading-snug mb-2.5 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-[13.5px] text-slate-500 font-medium leading-relaxed mb-5">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
                      <span className="inline-flex items-center gap-1 text-[12.5px] font-extrabold text-primary-500 group-hover:text-primary-600 transition-colors">
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-5 flex items-center justify-center gap-2">
              {services.map((service, i) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => scrollMobileServicesTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeCardIndex
                      ? "w-8 bg-gradient-to-r from-primary-600 to-cyan-400 shadow-[0_6px_14px_rgba(0,102,255,0.28)]"
                      : "w-2 bg-slate-300"
                  }`}
                  aria-label={`Show ${service.title}`}
                  aria-current={i === activeCardIndex ? "true" : undefined}
                />
              ))}
            </div>
          </div>

          {/* Floating Left Button - positioned outside on the left side of the slider */}
          <button
            onClick={() => scroll("left")}
            className={`hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-slate-200 bg-white items-center justify-center text-slate-700 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-600 transition-all shadow-md active:scale-95 ${
              showLeftBtn
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90 pointer-events-none"
            }`}
            style={{ transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Floating Right Button - positioned outside on the right side of the slider */}
          <button
            onClick={() => scroll("right")}
            className={`hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-slate-200 bg-white items-center justify-center text-slate-700 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-600 transition-all shadow-md active:scale-95 ${
              showRightBtn
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90 pointer-events-none"
            }`}
            style={{ transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Horizontal Scrollable Container */}
          <div
            ref={setContainerNode}
            className="hidden sm:flex gap-8 overflow-x-auto pb-8 scroll-smooth scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="w-[calc(100vw-32px)] sm:w-[320px] shrink-0 snap-center sm:snap-start bg-white border border-slate-100 rounded-3xl p-5 hover:border-primary-200 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Service Image at Top (Clean, no buttons/icons on it) */}
                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 relative shadow-sm group-hover:scale-[1.01] transition-transform duration-300 bg-slate-50">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Icon container (Moved completely outside the image) */}
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Full text wrapper, no line-clamps to prevent cut-off */}
                    <h3 className="font-extrabold text-[18px] text-slate-900 leading-snug mb-2.5 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-[13.5px] text-slate-500 font-medium leading-relaxed mb-5">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
                    <span className="inline-flex items-center gap-1 text-[12.5px] font-extrabold text-primary-500 group-hover:text-primary-600 transition-colors">
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Navigation Slide-in Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[200] flex justify-end overflow-hidden">
            {/* Backdrop with blur */}
<div
              onClick={closeModal}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            {/* Sliding Panel */}
            <div className="relative w-full max-w-3xl h-full bg-white shadow-2xl flex flex-col z-10 overflow-hidden">
              {/* Sticky Modal Header */}
              <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 sm:px-6 py-4 flex items-center justify-between gap-3 z-20">
                <button
                  onClick={closeModal}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-primary-50 px-3 sm:px-4 py-2 text-primary-600 hover:bg-primary-100 font-extrabold transition-colors group text-[13px] sm:text-[14px] whitespace-nowrap"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  Back to Services
                </button>
                <div className="flex sm:hidden items-center gap-2">
                  <button
                    onClick={handlePrevService}
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-primary-600 transition-colors"
                    aria-label="Previous service"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest select-none">
                    {services.findIndex((s) => s.id === selectedService.id) + 1}{" "}
                    / {services.length}
                  </span>
                  <button
                    onClick={handleNextService}
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-primary-600 transition-colors"
                    aria-label="Next service"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="w-px h-5 bg-slate-200 mx-1" />
                  <button
                    onClick={closeModal}
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Scrollable Contents — keyed by service id to automatically reset scroll position when navigating between services */}
              <div
                key={selectedService.id}
                className="flex-1 overflow-y-auto px-6 py-8 md:p-10"
              >
                {/* Main Content Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
                  {/* Left Column: Details */}
                  <div className="md:col-span-7">
                    <h2 className="text-3xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                      {selectedService.title}
                    </h2>
                    {selectedService.longDesc.split("\n\n").map((para, idx) => (
                      <p
                        key={idx}
                        className="text-[14px] text-slate-600 font-medium leading-relaxed mb-6"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Right Column: Media + Stats */}
                  <div className="md:col-span-5 flex flex-col gap-6">
                    {/* Service Image Card */}
                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative shadow-lg border border-slate-100 bg-slate-50">
                      <img
                        src={selectedService.image}
                        alt={selectedService.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Statistics Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      {selectedService.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="bg-slate-50/80 border border-slate-100 rounded-xl p-3 text-center"
                        >
                          <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                            {stat.label}
                          </span>
                          <span className="block text-[13px] font-extrabold text-primary-600 whitespace-nowrap">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Checklist of Features */}
                <div className="mb-10">
                  <h3 className="text-[12px] font-black uppercase tracking-widest text-slate-400 mb-5 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-primary-500" />
                    What's Included in the Service
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedService.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-100/50 rounded-2xl p-4 transition-colors"
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-500 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-[13px] text-slate-600 font-semibold leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Action Area */}
                <div className="mt-8">
                  <div className="bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border border-emerald-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="text-left">
                      <h4 className="text-[17px] font-extrabold text-slate-900 mb-1">
                        Ready to maximize your solar performance?
                      </h4>
                      <p className="text-[13px] text-slate-500 font-semibold">
                        Book a professional solar cleaning service or request a
                        custom quote from our team today.
                      </p>
                    </div>
                    <a
                      href={`https://wa.me/919274371058?text=${encodeURIComponent(selectedService.waMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-[18px] font-extrabold transition-all duration-200 active:scale-95 shadow-lg shadow-emerald-500/25 whitespace-nowrap"
                    >
                      Book on
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp"
                        className="w-8 h-8"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
