import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366F1",
          100: "#EEF2FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
        },
        accent: "#22D3EE",
        surface: "rgba(255, 255, 255, 0.08)",
        border: "rgba(255, 255, 255, 0.15)",
      },
      backgroundImage: {
        "gradient-glow": "radial-gradient(circle at top, rgba(99,102,241,0.35), transparent 55%), radial-gradient(circle at 20% 20%, rgba(34,211,238,0.25), transparent 40%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(99,102,241,0.25)",
        soft: "0 20px 35px -15px rgba(15, 23, 42, 0.45)",
      },
      borderRadius: {
        xl: "1.25rem",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 2.8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
