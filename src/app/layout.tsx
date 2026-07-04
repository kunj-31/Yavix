import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Yavix Solar Cleaning – Solar Cleaning Experts | Ahmedabad",
  description:
    "Professional solar panel cleaning services in Ahmedabad. Improve solar efficiency with premium cleaning and maintenance for homes, offices, and industries. Book now!",
  keywords:
    "solar panel cleaning, solar cleaning Ahmedabad, solar maintenance, solar efficiency, Yavix Solar Cleaning",
  openGraph: {
    title: "Yavix Solar Cleaning – Solar Cleaning Experts",
    description:
      "Professional solar panel cleaning services in Ahmedabad. Maximize efficiency with premium solar cleaning.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "name": "Yavix Solar Cleaning",
    "image": "https://yavix.in/images/logos/Logo.avif",
    "@id": "https://yavix.in/#localbusiness",
    "url": "https://yavix.in",
    "telephone": "+91 92743 71058",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "36, Bhagyoday Society, Thakkarbapanagar Road",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "382350",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.0428",
      "longitude": "72.6373"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://facebook.com/profile.php?id=61574586806347",
      "https://www.instagram.com/yavix_solarcleaning",
      "https://www.youtube.com/@YavixSolar"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066ff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
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
            `
          }}
        />
      </head>
      <body className="antialiased">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
  }
