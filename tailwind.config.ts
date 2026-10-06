import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        royal: {
          ink: "#0b1110",
          charcoal: "#131816",
          gold: "#d4af68",
          pearl: "#f4efe6",
          mist: "#d9d2c5",
          emerald: "#16352f",
        },
      },
      boxShadow: {
        glow: "0 0 80px rgba(212, 175, 104, 0.22)",
        card: "0 24px 70px rgba(0, 0, 0, 0.28)",
      },
      backgroundImage: {
        "noise-soft":
          "radial-gradient(circle at 20% 20%, rgba(212,175,104,.16), transparent 28%), radial-gradient(circle at 80% 0%, rgba(255,255,255,.10), transparent 26%), linear-gradient(135deg, #0b1110 0%, #16352f 48%, #111513 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
