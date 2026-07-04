import React from "react";
import type { Metadata } from "next";
import ProductCard from "@/components/products/ProductCard";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Solar Panel Cleaning Brushes & Equipment | Yavix Solar Cleaning",
  description: "Shop professional-grade solar panel cleaning brushes and equipment in Ahmedabad. High-tensile telescopic microfiber wiper brushes and heavy-duty water-fed nylon brushes.",
  keywords: "solar panel cleaning brush, solar cleaning equipment, telescopic pole squeegee, water fed solar brush, Ahmedabad, Gujarat",
  openGraph: {
    title: "Solar Panel Cleaning Brushes & Equipment | Yavix Solar Cleaning",
    description: "Shop professional-grade solar panel cleaning brushes and equipment. High-tensile telescopic brushes.",
    url: "https://yavix.in/products",
    type: "website",
  }
};

export default function ProductsPage() {

  return (
    <>
      <style>{`
        /* ══ RESET / BASE ══ */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ══ PAGE ══ */
        .pp-page {
          min-height: 100vh;
          background: #f8fafc;
          padding: 140px 32px 80px;
          font-family: 'Inter', sans-serif;
        }

        /* ══ HEADER ══ */
        .pp-header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 52px;
        }
        .pp-header-eyebrow {
          display: inline-block;
          background: #eff6ff;
          color: #2563eb;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 16px;
          border: 1px solid #bfdbfe;
        }
        .pp-header h1 {
          font-size: clamp(26px, 4.5vw, 44px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }
        .pp-header p {
          font-size: 16px;
          color: #64748b;
          line-height: 1.65;
        }

        /* ══ GRID ══ */
        .pp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          max-width: 900px;
          margin: 0 auto;
        }
        @media (max-width: 680px) {
          .pp-page { padding: 100px 16px 60px; }
          .pp-grid { grid-template-columns: 1fr; gap: 24px; }
        }

        /* ════════════════════════════════════
           PRODUCT CARD
        ════════════════════════════════════ */
        .pc-card {
          background: #ffffff;
          border-radius: 18px;
          box-shadow: 0 2px 12px rgba(0,0,0,.07), 0 1px 3px rgba(0,0,0,.05);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: box-shadow .25s, transform .25s;
          border: 1px solid #e2e8f0;
        }
        .pc-card:hover {
          box-shadow: 0 16px 48px rgba(37,99,235,.12), 0 4px 12px rgba(0,0,0,.07);
          transform: translateY(-4px);
        }

        /* Image wrapper — fixed height so next/image fill works */
        .pc-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #f1f5f9;
          flex-shrink: 0;
        }
        .pc-img {
          object-fit: cover;
          transition: transform .5s ease;
        }
        .pc-card:hover .pc-img { transform: scale(1.05); }

        .pc-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: #2563eb;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .07em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 100px;
          z-index: 2;
        }

        /* Body */
        .pc-body {
          padding: 22px 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .pc-name {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.4;
        }
        .pc-tagline {
          font-size: 13px;
          color: #2563eb;
          font-weight: 500;
        }

        /* Variants */
        .pc-variants { display: flex; gap: 8px; flex-wrap: wrap; }
        .pc-variant {
          padding: 5px 14px;
          border-radius: 100px;
          border: 1.5px solid #cbd5e1;
          background: #fff;
          color: #475569;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all .18s;
        }
        .pc-variant:hover, .pc-variant.sel {
          border-color: #2563eb;
          background: #eff6ff;
          color: #2563eb;
          font-weight: 600;
        }

        /* Price */
        .pc-price-wrap {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .pc-price-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }
        .pc-price {
          font-size: 24px;
          font-weight: 800;
          color: #16a34a;
          letter-spacing: -.5px;
        }
        .pc-price-original {
          font-size: 15px;
          font-weight: 500;
          color: #94a3b8;
          text-decoration: line-through;
        }
        .pc-discount-badge {
          font-size: 12px;
          font-weight: 700;
          color: #dc2626;
          background: #fef2f2;
          border: 1px solid #fecaca;
          padding: 2px 8px;
          border-radius: 100px;
        }
        .pc-tax-note {
          font-size: 11px;
          color: #64748b;
          font-weight: 500;
        }

        /* Qty row */
        .pc-qty-row { display: flex; align-items: center; gap: 14px; }
        .pc-qty {
          display: flex;
          align-items: center;
          border: 1.5px solid #e2e8f0;
          border-radius: 100px;
          overflow: hidden;
          background: #f8fafc;
        }
        .pc-qty-btn {
          width: 38px; height: 38px;
          background: transparent;
          border: none;
          font-size: 20px;
          color: #2563eb;
          cursor: pointer;
          transition: background .15s;
          display: flex; align-items: center; justify-content: center;
          line-height: 1;
        }
        .pc-qty-btn:hover:not(:disabled) { background: #eff6ff; }
        .pc-qty-btn:disabled { color: #cbd5e1; cursor: not-allowed; }
        .pc-qty-val {
          min-width: 34px;
          text-align: center;
          font-weight: 700;
          font-size: 15px;
          color: #0f172a;
        }
        .pc-subtotal {
          font-size: 14px; font-weight: 700; color: #16a34a;
          background: #f0fdf4; border: 1px solid #bbf7d0;
          padding: 4px 12px; border-radius: 100px;
        }

        /* Details button */
        .pc-details-btn {
          margin-top: 4px; padding: 11px 0;
          border-radius: 10px;
          border: 1.5px solid #2563eb;
          background: transparent;
          color: #2563eb;
          font-size: 14px; font-weight: 600;
          cursor: pointer;
          transition: all .18s;
          letter-spacing: .01em;
        }
        .pc-details-btn:hover { background: #2563eb; color: #fff; }

        /* ════════════════════════════════════
           DETAIL MODAL
        ════════════════════════════════════ */
        .dm-overlay {
          position: fixed; inset: 0;
          background: rgba(15,23,42,.5);
          backdrop-filter: blur(6px);
          z-index: 1000;
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          animation: dmFadeIn .2s ease;
        }
        @keyframes dmFadeIn { from { opacity: 0 } to { opacity: 1 } }

        .dm-box {
          background: #fff;
          border-radius: 20px;
          max-width: 920px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: dmSlide .25s ease;
          box-shadow: 0 32px 80px rgba(0,0,0,.2);
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent;
        }
        .dm-box::-webkit-scrollbar { width: 6px; }
        .dm-box::-webkit-scrollbar-track { background: transparent; margin: 12px 0; }
        .dm-box::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 100px;
        }
        .dm-box::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        @keyframes dmSlide {
          from { transform: translateY(28px); opacity: 0 }
          to   { transform: translateY(0);    opacity: 1 }
        }

        /* Close button */
        .dm-close {
          position: sticky;
          top: 16px;
          float: right;
          margin: 16px 16px 0 0;
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          color: #64748b;
          font-size: 15px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          z-index: 10;
          transition: all .18s;
        }
        .dm-close:hover { background: #fee2e2; border-color: #fca5a5; color: #ef4444; }

        /* Inner grid: gallery | details */
        .dm-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          padding: 24px;
          clear: both;
        }
        @media (max-width: 640px) { .dm-inner { grid-template-columns: 1fr; } }

        /* Gallery column */
        .dm-gallery {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-right: 24px;
          border-right: 1px solid #f1f5f9;
        }
        @media (max-width: 640px) {
          .dm-gallery { padding-right: 0; border-right: none; border-bottom: 1px solid #f1f5f9; padding-bottom: 20px; }
        }

        /* Main image — square box, fill works correctly here */
        .dm-main-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 12px;
          overflow: hidden;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }
        .dm-main-img {
          object-fit: cover;
        }

        /* Thumbnails */
        .dm-thumbs { display: flex; gap: 8px; flex-wrap: wrap; }
        .dm-thumb {
          position: relative;
          width: 64px; height: 64px;
          border-radius: 8px;
          overflow: hidden;
          border: 2px solid #e2e8f0;
          cursor: pointer;
          background: #f1f5f9;
          transition: border-color .18s;
          flex-shrink: 0;
        }
        .dm-thumb:hover { border-color: #93c5fd; }
        .dm-thumb-active { border-color: #2563eb !important; }
        .dm-thumb-img { object-fit: cover; }

        /* Details column */
        .dm-details {
          padding-left: 28px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          overflow-y: auto;
        }
        @media (max-width: 640px) { .dm-details { padding-left: 0; padding-top: 20px; } }

        .dm-title { font-size: 20px; font-weight: 800; color: #0f172a; line-height: 1.3; }
        .dm-desc  { font-size: 14px; color: #475569; line-height: 1.7; }
        .dm-section {
          font-size: 11px; font-weight: 700; color: #2563eb;
          text-transform: uppercase; letter-spacing: .1em;
          border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;
        }

        .dm-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .dm-list li {
          font-size: 14px; color: #334155; line-height: 1.55;
          padding-left: 20px; position: relative;
        }
        .dm-list li::before {
          content: "✓"; position: absolute; left: 0;
          color: #16a34a; font-weight: 700; font-size: 12px; top: 2px;
        }

        .dm-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .dm-tag {
          background: #f0f9ff; border: 1px solid #bae6fd;
          color: #0369a1; font-size: 12px; font-weight: 500;
          padding: 4px 12px; border-radius: 100px;
        }

        .dm-prices { border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; }
        .dm-price-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 12px 18px;
          border-bottom: 1px solid #f1f5f9;
          background: #fff;
        }
        .dm-price-row:last-child { border-bottom: none; }
        .dm-price-row:nth-child(even) { background: #f8fafc; }
        .dm-price-label { font-size: 14px; color: #475569; font-weight: 500; }
        .dm-price-right { display: flex; align-items: baseline; gap: 8px; }
        .dm-price-val   { font-size: 17px; font-weight: 800; color: #16a34a; }
        .dm-price-orig  { font-size: 13px; color: #94a3b8; text-decoration: line-through; font-weight: 500; }
        .dm-price-off   {
          font-size: 11px; font-weight: 700; color: #dc2626;
          background: #fef2f2; border: 1px solid #fecaca;
          padding: 1px 7px; border-radius: 100px;
        }
        .dm-tax-note {
          font-size: 11px; color: #64748b; font-weight: 500;
          padding: 8px 18px; background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          text-align: center;
        }

        /* ════════════════════════════════════
           ORDER BAR
        ════════════════════════════════════ */
        .ob-bar {
          position: fixed; bottom: 0; left: 0; right: 0;
          background: #fff;
          border-top: 2px solid #bbf7d0;
          box-shadow: 0 -8px 32px rgba(0,0,0,.10);
          z-index: 500;
          padding: 14px 24px;
          animation: obUp .3s ease;
        }
        @keyframes obUp { from { transform: translateY(100%) } to { transform: translateY(0) } }
        .ob-inner {
          max-width: 860px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
        }
        .ob-info { display: flex; flex-direction: column; gap: 1px; }
        .ob-label { font-size: 11px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: .08em; }
        .ob-total { font-size: 28px; font-weight: 900; color: #16a34a; letter-spacing: -.5px; }
        .ob-btn {
          display: flex; align-items: center; gap: 10px;
          background: #16a34a; color: #fff;
          border: none; padding: 14px 28px;
          border-radius: 12px;
          font-size: 15px; font-weight: 700;
          cursor: pointer; transition: all .2s;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(22,163,74,.35);
        }
        .ob-btn:hover {
          background: #15803d; transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(22,163,74,.45);
        }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 520px) {
          .pp-grid { grid-template-columns: 1fr; }
          .ob-inner { flex-direction: column; align-items: stretch; }
          .ob-btn { justify-content: center; }
        }
      `}</style>

      <main className="pp-page">
        {/* Product cards */}
        <div className="pp-grid">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </main>
    </>
  );
}
