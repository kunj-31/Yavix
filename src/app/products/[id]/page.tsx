"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { PRODUCTS } from "@/lib/products";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const product = PRODUCTS.find((p) => p.id === id);

  // Fallback if product not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          Product Not Found
        </h1>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0066ff] text-white font-semibold rounded-xl hover:bg-[#004edb] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>
      </div>
    );
  }

  // State
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // Gallery Navigation
  const prevImage = () => {
    setCurrentImgIdx((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1,
    );
  };

  const nextImage = () => {
    setCurrentImgIdx((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1,
    );
  };

  // Quantity handlers
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const totalPrice = selectedVariant.price * quantity;

  // WhatsApp Order handler
  const handlePlaceOrder = () => {
    const msg = `Hello Yavix Solar Cleaning! I'd like to place an order for:\n\n*Product:* ${product.name}\n*Length/Variant:* ${selectedVariant.label}\n*Quantity:* ${quantity}\n*Price per unit:* ₹${selectedVariant.price.toLocaleString("en-IN")}\n*Total price:* ₹${totalPrice.toLocaleString("en-IN")}\n\nPlease confirm availability and next steps. Thank you!`;
    window.open(
      `https://wa.me/919274371058?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] pt-24 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Breadcrumbs & Back Navigation ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <nav className="text-[14px] text-slate-500 font-medium">
            <Link href="/" className="hover:text-slate-800 transition-colors">
              Home
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <Link
              href="/products"
              className="hover:text-slate-800 transition-colors"
            >
              Products
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-800 font-semibold">{product.name}</span>
          </nav>
        </div>

        {/* ── Main Layout: Gallery Left | Controls Right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)] mb-12">
          {/* Gallery Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-5">
            {/* Vertical Thumbnails Stack (Left side of main image) */}
            <div className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-x-visible md:overflow-y-auto max-h-[480px] scrollbar-thin order-2 md:order-1">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImgIdx(index)}
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 bg-slate-50 flex-shrink-0 transition-all ${
                    currentImgIdx === index
                      ? "border-[#0066ff] ring-2 ring-blue-100"
                      : "border-slate-200 hover:border-slate-400"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    sizes="80px"
                    className="object-contain p-1.5"
                  />
                </button>
              ))}
            </div>

            {/* Large Main Image Box (Right of thumbnails) */}
            <div className="relative flex-1 aspect-square bg-[#fcfbf9] rounded-2xl border border-slate-100 overflow-hidden flex items-center justify-center group order-1 md:order-2">
              <Image
                src={product.images[currentImgIdx]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-slate-100 flex items-center justify-center text-slate-700 hover:text-[#0066ff] hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-slate-100 flex items-center justify-center text-slate-700 hover:text-[#0066ff] hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Controls Column (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-2">
            <div>
              {/* Product Title */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2 uppercase">
                {product.name}
              </h1>

              {/* Price & Tax Section */}
              <div className="mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-4 mb-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#16a34a] leading-none">
                    ₹{selectedVariant.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-lg font-medium text-slate-400 line-through">
                    ₹{(selectedVariant.price * 2).toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 border border-rose-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    50% OFF
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mt-2">
                  Excluding GST • Shipping Extra
                </span>
              </div>

              {/* Variant Selector */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
                  Select Variant / Length
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.variants.map((v) => {
                    const isSelected = selectedVariant.label === v.label;
                    return (
                      <button
                        key={v.label}
                        onClick={() => setSelectedVariant(v)}
                        className={`px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all cursor-pointer ${
                          isSelected
                            ? "bg-blue-50 border-[#0066ff] text-[#0066ff]"
                            : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        {v.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Counter */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={decreaseQty}
                      disabled={quantity <= 1}
                      className="w-11 h-11 flex items-center justify-center text-[#0066ff] font-bold text-lg hover:bg-blue-50 disabled:text-slate-300 disabled:hover:bg-transparent transition-all cursor-pointer"
                    >
                      −
                    </button>
                    <span className="w-10 text-center font-bold text-slate-800 text-sm select-none">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQty}
                      className="w-11 h-11 flex items-center justify-center text-[#0066ff] font-bold text-lg hover:bg-blue-50 transition-all cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  {quantity > 1 && (
                    <div className="w-full bg-[#f0fdf4] border-2 border-[#16a34a] px-4 py-3 rounded-xl">
                      <div className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">
                        Total Amount
                      </div>
                      <div className="text-3xl font-extrabold text-[#16a34a]">
                        ₹{totalPrice.toLocaleString("en-IN")}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Place Order CTA Button */}
            <button
              onClick={handlePlaceOrder}
               className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-[18px] font-extrabold transition-all duration-200 active:scale-95 shadow-lg shadow-emerald-500/25 whitespace-nowrap"
            >
              Order on WhatsApp
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>

        {/* ── Product Specifications & Details Tabs ── */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] overflow-hidden">
          {/* Tab Header */}
          <div className="flex border-b border-slate-100 bg-[#fbfbf9] px-6 sm:px-8">
            <button
              onClick={() => setActiveTab("description")}
              className={`py-5 text-sm font-extrabold tracking-wider uppercase border-b-2 transition-all cursor-pointer ${
                activeTab === "description"
                  ? "border-[#f97316] text-slate-900"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              }`}
            >
              Description
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8 md:p-10">
            {activeTab === "description" && (
              <div className="max-w-4xl">
                {/* Description Heading */}
                <h2 className="text-lg font-black text-slate-900 tracking-wider uppercase mb-4">
                  DESCRIPTION
                </h2>

                {/* Paragraph */}
                <p className="text-[14px] leading-relaxed text-slate-700 font-medium mb-4 whitespace-pre-line">
                  {product.description}
                </p>

                {/* Ideal For inside description */}
                {product.idealFor && product.idealFor.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xs font-black text-slate-800 tracking-widest uppercase mb-3">
                      IDEAL FOR:
                    </h3>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                      {product.idealFor.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-[14px] text-slate-600 font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Features Bullet List */}
                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-xs font-black text-slate-800 tracking-widest uppercase mb-4">
                    KEY FEATURES:
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-[14px] text-slate-600 font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff] flex-shrink-0 mt-[6px]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
