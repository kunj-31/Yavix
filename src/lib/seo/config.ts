export const SITE_URL = "https://yavix.in";
export const SITE_NAME = "Yavix Energy";
export const BRAND_NAME = "Yavix Solar Cleaning";
export const WA_NUMBER = "919274371058";

export const BUSINESS = {
  name: BRAND_NAME,
  legalName: "Yavix Energy",
  phone: "+91 92743 71058",
  email: "yavixenergy@gmail.com",
  address: {
    street: "36, Bhagyoday Society, Thakkarbapanagar Road",
    locality: "Ahmedabad",
    region: "Gujarat",
    postalCode: "382350",
    country: "IN",
  },
  geo: { latitude: 23.0428, longitude: 72.6373 },
  social: {
    facebook: "https://facebook.com/profile.php?id=61574586806347",
    instagram: "https://www.instagram.com/yavix_solarcleaning",
    youtube: "https://www.youtube.com/@YavixSolar",
  },
};

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const PRIMARY_KEYWORDS = [
  "solar panel cleaning Ahmedabad",
  "solar panel cleaning service Ahmedabad",
  "solar cleaning Ahmedabad",
  "solar panel washing Ahmedabad",
  "solar panel maintenance Ahmedabad",
  "solar AMC Ahmedabad",
  "professional solar panel cleaning Ahmedabad",
  "best solar panel cleaning company in Ahmedabad",
];
