import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17201d",
        "ink-light": "#31413b",
        paper: "#f6f8f7",
        panel: "#ffffff",
        accent: "#0f7665",
        "accent-dim": "#e2f1ec",
        warm: "#9a5b2e",
        line: "#d9e2df",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
