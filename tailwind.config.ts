import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          DEFAULT: "var(--surface)",
          muted: "var(--surface-muted)",
          elevated: "var(--surface-elevated)",
        },
        primary: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          subtle: "#EFF6FF",
          dark: "#3B82F6",
        },
        border: "var(--border)",
        muted: "var(--muted)",
        card: "var(--card)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
