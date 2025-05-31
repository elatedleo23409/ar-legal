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
      sans: ["Roboto", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        primary: {
          50: "#C1CCFF",
          100: "#AFBEFF",
          200: "#94A8FF",
          300: "#7A92FF",
          400: "#5F7DFF",
          500: "#4D6EFF",
          600: "#4563E6",
          700: "#3A53BF",
          800: "#2E4299",
          900: "#233173",
          DEFAULT: "#4D6EFF",
        },
        neutral: {
          50: "#FFFFFF",
          100: "#F7F7F7",
          200: "#F0F0F0",
          300: "#E8E8E8",
          400: "#E0E0E0",
          500: "#D9D9D9",
          600: "#666666",
          700: "#4D4D4D",
          800: "#333333",
          900: "#191919",
          DEFAULT: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
