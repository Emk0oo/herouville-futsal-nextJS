import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        bleuNuitHerouville: "#1D3764",
        bleuHerouville: "#3286C8",
        jauneHerouville: "#FFD400",
        bleuBorder: "#4A5F83",
        marron: "#4C4003",
      },
      backgroundImage: {
        'photo1': "url('../public/photo1.png')",
        'actu': "url('../public/bg-actu.png')",
        'histoire': "url('../public/histoire.png')",
        'calendrierCard': "url('../public/calendrierCard.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          
      },
    },
  },
  plugins: [],
};
export default config;
