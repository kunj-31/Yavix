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
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Product Not Found</h1>
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
    setCurrentImgIdx((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImgIdx((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
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
    const msg = `Hello Yavix Energy! I'd like to place an order for:\n\n*Product:* ${product.name}\n*Length/Variant:* ${selectedVariant.label}\n*Quantity:* ${quantity}\n*Price per unit:* ₹${selectedVariant.price.toLocaleString("en-IN")}\n*Total price:* ₹${totalPrice.toLocaleString("en-IN")}\n\nPlease confirm availability and next steps. Thank you!`;
    window.open(
      `https://wa.me/919274371058?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] pt-24 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Breadcrumbs & Back Navigation ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <nav className="text-[14px] text-slate-500 font-medium">
            <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
            <span className="mx-2 text-slate-400">/</span>
            <Link href="/products" className="hover:text-slate-800 transition-colors">Products</Link>
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
                    currentImgIdx === index ? "border-[#0066ff] ring-2 ring-blue-100" : "border-slate-200 hover:border-slate-400"
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
                      <div className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">Total Amount</div>
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
              className="w-full h-16 bg-[#16a34a] hover:bg-[#15803d] text-white font-extrabold text-xl tracking-wider rounded-xl transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer shadow-lg shadow-emerald-600/20"
            >
              Order on WhatsApp
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
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
                        <li key={idx} className="flex items-center gap-2 text-[14px] text-slate-600 font-medium">
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
                      <li key={idx} className="flex items-start gap-3 text-[14px] text-slate-600 font-medium">
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
