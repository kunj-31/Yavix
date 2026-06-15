import type { Metadata } from "next";
import ContactClient from "./ContactClient";
export const metadata: Metadata = {
  title: "Contact Us – Book Solar Cleaning | Yavix Solar Cleaning Ahmedabad",
  description: "Contact Yavix Solar Cleaning for solar panel cleaning in Ahmedabad. Book online or call 09274371058. Open 24 hours.",
};
export default function Page() { return <ContactClient />; }
