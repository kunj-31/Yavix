import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import SmoothScroll from "@/components/SmoothScroll";
import {
  localBusinessSchema,
  organizationSchema,
  reviewSchema,
} from "@/lib/seo/schema";
import { SITE_URL, BRAND_NAME } from "@/lib/seo/config";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME} – Solar Panel Cleaning Ahmedabad`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "Professional solar panel cleaning services in Ahmedabad. Improve solar efficiency with premium cleaning and maintenance for homes, offices, and industries.",
  keywords:
    "solar panel cleaning, solar cleaning Ahmedabad, solar maintenance, solar AMC, solar efficiency, Yavix Energy",
  openGraph: {
    title: `${BRAND_NAME} – Solar Panel Cleaning Ahmedabad`,
    description:
      "Professional solar panel cleaning services in Ahmedabad. Maximize efficiency with premium solar cleaning.",
    type: "website",
    locale: "en_IN",
    siteName: BRAND_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    site: "@YavixSolar",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  verification: {
    google: "zB2RMBmCa5VRg61wU4Mv6qJzoNHM48VBIRrLYQizMQI",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = [organizationSchema(), localBusinessSchema(), reviewSchema()];

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/favicon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066ff" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('contextmenu', function(e) {
                if (e.target && e.target.tagName === 'IMG') {
                  e.preventDefault();
                }
              }, true);
              document.addEventListener('dragstart', function(e) {
                if (e.target && e.target.tagName === 'IMG') {
                  e.preventDefault();
                }
              }, true);
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <SmoothScroll>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
