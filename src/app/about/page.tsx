import type { Metadata } from "next";
import AboutPage from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us – Yavix Solar Cleaning Solar Cleaning Experts",
  description: "Learn about Yavix Solar Cleaning, Ahmedabad's most trusted solar panel cleaning company. Our mission, team, and values.",
};

export default function Page() {
  return <AboutPage />;
}
