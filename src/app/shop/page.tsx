import type { Metadata } from "next";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop – Solar Cleaning Packages | Yavix Energy",
  description: "Choose a solar panel cleaning package that fits your installation. Residential, commercial, and industrial plans available in Ahmedabad.",
};

export default function Page() { return <ShopClient />; }
