export interface Variant {
  label: string;
  price: number;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  images: string[];
  variants: Variant[];
  benefits: string[];
  idealFor: string[];
  highlights?: Highlight[];
}

export interface CartEntry {
  productId: string;
  variantLabel: string;
  price: number;
  qty: number;
}
