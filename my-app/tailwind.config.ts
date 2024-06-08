import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "body-bg": "url('/ecommerce.jpg')",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(80px)",
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ["responsive"],
    },
  },
  plugins: [],
};

export default config;
