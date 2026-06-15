import type { Metadata } from "next";
import CaseStudyClient from "./CaseStudyClient";

export const metadata: Metadata = {
  title: "Case Studies – Solar Cleaning Results | Yavix Solar Cleaning",
  description: "Real before/after results from Yavix Solar Cleaning solar cleaning projects across Ahmedabad. See verified efficiency improvements.",
};
export default function Page() { return <CaseStudyClient />; }
