import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heavy: ["var(--font-bebas)", "sans-serif"],
        mono: ["var(--font-courier)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        obsidian: '#050505',
        ghost: '#F5F5F7',
        steel: '#8E8E93',
        cyanAccent: '#00F0FF',
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
      },
      backgroundImage: {
        "purple-gradient": "linear-gradient(135deg, #4C1D95 0%, #7C3AED 50%, #C084FC 100%)",
      },
    },
  },
  plugins: [],
};
export default config;