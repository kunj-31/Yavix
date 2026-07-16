import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/products";
import { SITE_URL } from "@/lib/seo/config";
import ProductDetailClient from "@/components/products/ProductDetailClient";

interface Props {
  params: Promise<{ id: string }> | { id: string };
}

// Pre-render product pages statically at build time
export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    id: p.id,
  }));
}

// Dynamic metadata for product detail SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found | Yavix Solar Cleaning",
    };
  }

  return {
    title: `${product.name} | Yavix Solar Cleaning`,
    description: `${product.tagline}. ${product.description.slice(0, 150)}...`,
    keywords: `${product.name}, solar cleaning brush, solar panel wiper, telescopic pole solar, Ahmedabad, Gujarat`,
    openGraph: {
      title: product.name,
      description: product.tagline,
      url: `${SITE_URL}/products/${product.id}`,
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const minPrice = Math.min(...product.variants.map((v) => v.price));
  const maxPrice = Math.max(...product.variants.map((v) => v.price));

  // Product JSON-LD Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.images.map((img) => `${SITE_URL}${img}`),
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Yavix"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": minPrice,
      "highPrice": maxPrice,
      "offerCount": product.variants.length,
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      {/* Product Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      <ProductDetailClient product={product} />
    </>
  );
}
