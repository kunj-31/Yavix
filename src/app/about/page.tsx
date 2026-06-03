import type { Metadata } from "next";
import AboutPage from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us – Yavix Energy Solar Cleaning Experts",
  description: "Learn about Yavix Energy, Ahmedabad's most trusted solar panel cleaning company. Our mission, team, and values.",
};

export default function Page() {
  return <AboutPage />;
}
