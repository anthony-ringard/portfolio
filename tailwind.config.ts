import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#202321",
        "ink-light": "#4D514C",
        paper: "#F5F1E8",
        panel: "#ffffff",
        accent: "#009FAF",
        "accent-dim": "#DCF3F5",
        warm: "#D8C8A8",
        line: "#E4DED0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
