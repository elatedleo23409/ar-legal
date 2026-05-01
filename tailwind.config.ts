import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#webcrumbs",
  theme: {
    fontFamily: {
      serif: [
        "EB Garamond",
        "Garamond",
        "Cormorant Garamond",
        "Georgia",
        "serif",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "sans-serif",
      ],
      display: ["EB Garamond", "Garamond", "Georgia", "serif"],
    },
    extend: {
      colors: {
        ink: {
          50: "#FAF8F4",
          100: "#F4F1EA",
          200: "#E8E3D7",
          300: "#CFC9BC",
          400: "#9C9789",
          500: "#6B6657",
          600: "#4A4639",
          700: "#2E2B23",
          800: "#1A1814",
          900: "#0D0B08",
          DEFAULT: "#0D0B08",
        },
        paper: {
          DEFAULT: "#FBF9F4",
          50: "#FFFFFF",
          100: "#FBF9F4",
          200: "#F4F1EA",
          300: "#EBE6DA",
        },
        gold: {
          50: "#F5EFDF",
          100: "#E8DBB6",
          200: "#D4BD7E",
          300: "#BC9D52",
          400: "#A8853A",
          500: "#8E6E2C",
          600: "#735923",
          700: "#56421A",
          DEFAULT: "#A8853A",
        },
      },
      letterSpacing: {
        widest: "0.25em",
        editorial: "0.32em",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
export default config;
