"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "./types";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const router = useRouter();
  const minPrice = Math.min(...product.variants.map((v) => v.price));

  return (
    <div
      onClick={() => router.push(`/products/${product.id}`)}
      style={{
        background: "#ffffff",
        borderRadius: "22px",
        border: "1.5px solid #e2e8f0",
        padding: "26px",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 48px rgba(0,56,115,0.14)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)";
      }}
    >
      {/* ── Image ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4/3",
          borderRadius: "14px",
          overflow: "hidden",
          background: "#f8fafc",
          border: "1px solid #f1f5f9",
          marginBottom: "20px",
        }}
      >
        <Image
          src={product.images?.[0] || "/placeholder.jpg"}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: "contain",
            padding: "16px",
            transition: "transform 0.5s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* ── Title ── */}
      <h2
        style={{
          fontSize: "16px",
          fontWeight: "800",
          color: "#0f172a",
          lineHeight: "1.35",
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
          marginBottom: "18px",
        }}
      >
        {product.name}
      </h2>

      {/* ── Pricing ── */}
      <div style={{ marginBottom: "10px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {/* Left: Price row */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
            <span
              style={{
                fontSize: "24px",
                fontWeight: "900",
                color: "#16a34a",
                lineHeight: "1",
              }}
            >
              ₹{minPrice.toLocaleString("en-IN")}
            </span>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#94a3b8",
                textDecoration: "line-through",
              }}
            >
              ₹{(minPrice * 2).toLocaleString("en-IN")}
            </span>
            <span
              style={{
                fontSize: "10px",
                fontWeight: "700",
                color: "#dc2626",
                background: "#fef2f2",
                border: "1px solid #fecaca",
                padding: "2px 7px",
                borderRadius: "100px",
              }}
            >
              50% OFF
            </span>
          </div>

          {/* Right: Delivered badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "11px",
              fontWeight: "700",
              color: "#475569",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
            100+ Delivered
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div
        style={{
          borderTop: "1px solid #e2e8f0",
          margin: "20px 0",
        }}
      />

      {/* ── CTA Button ── */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/products/${product.id}`);
        }}
        style={{
          width: "100%",
          height: "46px",
          background: "#0066ff",
          color: "#ffffff",
          fontWeight: "600",
          fontSize: "14px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          boxShadow: "0 8px 20px rgba(0, 102, 255, 0.2)",
          transition: "all 0.2s ease-in-out",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#004edb";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 10px 24px rgba(0, 102, 255, 0.3)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#0066ff";
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 20px rgba(0, 102, 255, 0.2)";
        }}
        onMouseDown={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0) scale(0.95)";
        }}
        onMouseUp={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px) scale(1)";
        }}
      >
        View Details
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
