import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0A0A0F",
        "bg-secondary": "#111118",
        "bg-card": "#16161E",
        "accent-red": "#FF1A1A",
        "accent-blue": "#1A8FFF",
        "text-primary": "#F0F0F5",
        "text-secondary": "#8888A0",
        "text-accent": "#CCCCDD",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        space: ["var(--font-space)", "sans-serif"],
        dm: ["var(--font-dm)", "sans-serif"],
        jetbrains: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "scroll-down": "scrollDown 2s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "marquee-pause": "marquee 40s linear infinite paused",
        twinkle: "twinkle 3s ease-in-out infinite",
        drift: "drift 60s linear infinite",
        "ken-burns": "kenBurns 20s ease-in-out infinite alternate",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "draw-line": "drawLine 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        scrollDown: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.4" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.8" },
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        kenBurns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.1) translate(-2%, -2%)" },
        },
        drawLine: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,26,26,0.3)" },
          "50%": { boxShadow: "0 0 50px rgba(255,26,26,0.7)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #FF1A1A 0%, #1A8FFF 100%)",
        "gradient-subtle": "linear-gradient(180deg, #0A0A0F 0%, #111118 100%)",
        "gradient-radial": "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
