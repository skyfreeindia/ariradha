import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07090f",
        surface: "#0f1524",
        glow: "#4de2c5",
        sky: "#71a8ff",
        ember: "#f8a764",
      },
      boxShadow: {
        glow: "0 0 35px rgba(77, 226, 197, 0.35)",
        card: "0 12px 40px rgba(2, 8, 24, 0.6)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 20% 20%, rgba(113,168,255,0.22), transparent 42%), radial-gradient(circle at 80% 12%, rgba(77,226,197,0.18), transparent 40%), radial-gradient(circle at 50% 80%, rgba(248,167,100,0.14), transparent 42%)",
      },
      animation: {
        drift: "drift 10s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        orbit: "orbit 18s linear infinite",
        pulseSoft: "pulseSoft 4s ease-in-out infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.9" },
        },
        orbit: {
          from: { transform: "rotate(0deg) translateX(116px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(116px) rotate(-360deg)" },
        },
        pulseSoft: {
          "0%, 100%": { boxShadow: "0 0 25px rgba(113, 168, 255, 0.25)" },
          "50%": { boxShadow: "0 0 45px rgba(77, 226, 197, 0.4)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;