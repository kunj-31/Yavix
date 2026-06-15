import type { Product } from "../components/products/types";

export interface EnhancedProduct extends Product {
  slogan: string;
  features: string[];
}

export const PRODUCTS: EnhancedProduct[] = [
  {
    id: "microfiber",
    name: "Microfiber + Wiper Solar Cleaning Brush",
    tagline: "2-in-1 wash & wipe in a single pass",
    delivered: "40+",
    description:
      "This is a professional-grade cleaning solution designed for solar panels, glass facades, skylights and high windows. Combining a premium microfiber cleaning head with an integrated rubber wiper blade, it washes and wipes in a single pass for faster, streak-free results.\n\nFeaturing a telescopic pole that extends from 3 to 6 meters, this brush allows safe and convenient cleaning of hard-to-reach surfaces without compromising performance. Its lightweight, rust-resistant compatibility makes it an ideal choice for both residential and commercial cleaning applications.",
    images: [
      "/images/products/Microfiber/01.jpg",
      "/images/products/Microfiber/02.jpg",
      "/images/products/Microfiber/03.jpg",
      "/images/products/Microfiber/04.jpg",
      "/images/products/Microfiber/05.jpg",
      "/images/products/Microfiber/06.jpg",
    ],
    variants: [
      { label: "3 Meter", price: 1499 },
      { label: "4 Meter", price: 1599 },
      { label: "6 Meter", price: 1799 },
    ],
    benefits: [
      "2-in-1 Cleaning Action – Microfiber effectively lifts dust, dirt, and debris while the rubber wiper leaves surfaces clean and streak-free.",
      "Extended Reach – Adjustable telescopic pole extends up to 6 meters, making rooftop and elevated cleaning easier and safer.",
      "Scratch-Free Cleaning – Soft microfiber material protects solar panel coatings and delicate glass surfaces.",
      "Improved Cleaning Efficiency – Wash and wipe simultaneously to reduce cleaning time and effort.",
      "Lightweight & Durable – Rust-resistant construction ensures long-lasting performance in outdoor environments.",
    ],
    idealFor: [
      "Residential Solar Panels",
      "Commercial Solar Installations",
      "Glass Facades",
      "Skylights",
      "High Windows",
      "Conservatories",
    ],
    slogan: "WET & DRY — SCRATCH-FREE — MULTI-PURPOSE",
    features: [
      "Double Action (Microfiber + Squeegee Wiper)",
      "High Absorption Microfiber Sleeve",
      "Non-Scratch and Panel Safe Materials",
      "Telescopic Lock System (3m to 6m)",
      "Lightweight High-Tensile Aluminum Pole",
      "Durable Rubber Wiper Blade",
      "Easy Washable & Reusable Sleeve"
    ],
    highlights: [
      { title: "Adjustable Reach", description: "Reach from 3 to 6 meters" },
      { title: "2-in-1 Cleaning Action", description: "Wash & wipe in one pass" },
      { title: "Streak-Free Finish", description: "Clean, clear & spotless finish" },
      { title: "Solar Panel Safe", description: "Gentle on coatings & glass" }
    ]
  },
  {
    id: "waterfed",
    name: "Heavy-Duty Nylon Solar Cleaning Brush",
    tagline: "Water-fed reach up to 8.5 m for large installations",
    delivered:"20+",
    description:
      "This is a professional-grade solar panel cleaning brush designed for safe and effective maintenance of rooftop, commercial and industrial solar installations. Featuring a high-density nylon brush head and a flexible telescopic pole, it efficiently removes dust, dirt, bird droppings and other debris that can affect solar panel performance.\n\nWith an adjustable pole that extends from 3 to 6 meters, this brush provides easy access to elevated solar panels while reducing the need for ladders or additional equipment. The included 7-meter PU water pipe ensures a continuous water supply for improved cleaning efficiency. Lightweight, durable and easy to operate, it is an ideal solution for regular solar panel maintenance.",
    images: [
      "/images/products/WaterFed/01.jpg",
      "/images/products/WaterFed/02.jpg",
      "/images/products/WaterFed/03.jpg",
      "/images/products/WaterFed/04.jpg",
      "/images/products/WaterFed/05.jpg",
      "/images/products/WaterFed/06.jpg",
    ],
    variants: [
      { label: "3 Meter", price: 2499 },
      { label: "4 Meter", price: 2599 },
      { label: "6 Meter", price: 2799 },
    ],
    benefits: [
      "Extended Reach – Flexible telescopic pole extends from 3 to 8.5 meters, making it easy to clean high and hard-to-reach solar panels.",
      "High-Density Nylon Brush – Strong bristles effectively remove stubborn dirt and debris while remaining safe for solar panel surfaces.",
      "7 Meter PU Water Pipe Included – Provides a continuous water flow to help loosen dirt and enhance cleaning performance.",
      "Improved Solar Efficiency – Regular cleaning helps maximize sunlight absorption and maintain optimal energy output.",
      "Lightweight & Easy to Use – Designed for comfortable handling and effortless operation during cleaning.",
      "Water-Fed Compatible – Designed to work seamlessly with water-fed cleaning systems for enhanced cleaning results.",
    ],
    idealFor: [
      "Residential Solar Panels",
      "Commercial Solar Installations",
      "Industrial Solar Systems",
      "Solar Farms",
      "Rooftop Solar Arrays",
      "Large-Scale Solar Projects",
    ],
    slogan: "WATER-FED — DEEP CLEAN — HEAVY-DUTY",
    features: [
      "Integrated Water Spray Outlets",
      "Telescopic Reach (up to 8.5 Meters)",
      "7-Meter Durable PU Water Pipe Included",
      "High-Density Panel-Safe Nylon Bristles",
      "Dual Brass Water Pipe Fittings",
      "Multi-Angle Adjustable Brush Head Connector",
      "Comfortable Foam Grip Handle"
    ],
    highlights: [
      { title: "Adjustable Reach", description: "Reach from 3 to 6 meters" },
      { title: "Nylon Brush Technology", description: "Tough on dirt, safe on panels" },
      { title: "Water-Fed Cleaning", description: "Continuous water flow cleaning" },
      { title: "Improved Solar Performance", description: "Cleaner panels, better output" }
    ]
  },
];
