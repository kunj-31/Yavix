import type { Metadata } from "next";
import ContactClient from "./ContactClient";
export const metadata: Metadata = {
  title: "Contact Us – Book Solar Cleaning | Yavix Energy Ahmedabad",
  description: "Contact Yavix Energy for solar panel cleaning in Ahmedabad. Book online or call 09274371058. Open 24 hours.",
};
export default function Page() { return <ContactClient />; }
