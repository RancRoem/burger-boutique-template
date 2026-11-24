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
        brand: {
          primary: "#EA580C",
          dark: "#111827",
          light: "#F9FAFB",
          accent: "#F59E0B",
        },
      },
    },
  },
  plugins: [],
};

export default config;
