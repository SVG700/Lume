import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f6fbff",
        ink: "#0d1b3d",
        electric: "#3169ff",
        violet: "#6f49ff",
        mist: "#e8f1ff",
      },
      boxShadow: {
        panel: "0 12px 40px rgba(22, 71, 191, 0.12)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.82" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        pulseSoft: "pulseSoft 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
