import type { Metadata } from "next";
import BlogsClient from "./BlogsClient";
export const metadata: Metadata = {
  title: "Solar Cleaning Blog – Tips & Insights | Yavix Energy",
  description: "Expert solar panel cleaning tips, efficiency guides, and industry insights from Yavix Energy Ahmedabad.",
};
export default function Page() { return <BlogsClient />; }
