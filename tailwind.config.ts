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
        yellow: {
          DEFAULT: "#ffe17c",
          hover: "#f5d45d",
          light: "#fff3be",
        },
        charcoal: {
          DEFAULT: "#171e19",
          muted: "#202a24",
          border: "rgba(23, 30, 25, 0.1)",
        },
        darkgray: {
          DEFAULT: "#272727",
          border: "#3a3a3a",
        },
        sage: {
          DEFAULT: "#b7c6c2",
          dark: "#8fa29d",
        },
        surface: {
          DEFAULT: "var(--surface)",
          muted: "var(--surface-muted)",
          elevated: "var(--surface-elevated)",
        },
        primary: {
          DEFAULT: "#171e19",
          hover: "#272727",
          subtle: "#ffe17c",
          dark: "#ffe17c",
        },
        border: "var(--border)",
        muted: "var(--muted)",
        card: "var(--card)",
      },
      fontFamily: {
        display: ["var(--font-anton)", "Anton", "Impact", "sans-serif"],
        heading: ["var(--font-anton)", "Anton", "Impact", "sans-serif"],
        sans: ["Satoshi", "var(--font-inter)", "-apple-system", "sans-serif"],
        body: ["Satoshi", "var(--font-inter)", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      transitionTimingFunction: {
        brutalist: "cubic-bezier(0.4, 0, 0.2, 1)",
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
