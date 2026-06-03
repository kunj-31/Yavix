import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#e8f4ff",
          100: "#d0e9ff",
          200: "#a8d4ff",
          300: "#70b8ff",
          400: "#3d9bff",
          500: "#0066ff",
          600: "#004edb",
          700: "#003ab3",
          800: "#002b85",
          900: "#001a4d",
        },
        yavix: {
          blue:   "#0066ff",
          dark:   "#001a4d",
          light:  "#e8f4ff",
          glow:   "#00aaff",
          accent: "#00d4ff",
        },
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":    "linear-gradient(135deg, #f0f8ff 0%, #e8f4ff 40%, #ddeeff 100%)",
        "blue-glow":        "radial-gradient(ellipse at center, rgba(0,102,255,0.15) 0%, transparent 70%)",
        "card-shine":       "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        "shine": {
          "0%":   { left: "-100%" },
          "100%": { left: "200%" },
        },
        "scroll-left": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,102,255,0.3)" },
          "50%":      { boxShadow: "0 0 40px rgba(0,102,255,0.6)" },
        },
        "counter": {
          "0%":   { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "wash": {
          "0%":   { transform: "translateX(-100%)", opacity: "0" },
          "30%":  { opacity: "1" },
          "70%":  { opacity: "1" },
          "100%": { transform: "translateX(200%)", opacity: "0" },
        },
      },
      animation: {
        "fade-up":     "fade-up 0.7s ease-out forwards",
        "fade-in":     "fade-in 0.5s ease-out forwards",
        "float":       "float 5s ease-in-out infinite",
        "shine":       "shine 2.5s ease-in-out infinite",
        "scroll-left": "scroll-left 30s linear infinite",
        "glow-pulse":  "glow-pulse 3s ease-in-out infinite",
        "wash":        "wash 1.8s ease-in-out",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glass":      "0 8px 32px rgba(0, 102, 255, 0.08), 0 2px 8px rgba(0,0,0,0.04)",
        "card-hover": "0 20px 60px rgba(0, 102, 255, 0.15), 0 4px 16px rgba(0,0,0,0.06)",
        "blue-glow":  "0 0 40px rgba(0, 102, 255, 0.25)",
        "inner-blue": "inset 0 1px 0 rgba(255,255,255,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
