import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kpoint: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      keyframes: {
        pulseHighlight: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(37, 99, 235, 0.7)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 0 8px rgba(37, 99, 235, 0)',
            transform: 'scale(1.02)',
          },
        },
      },
      animation: {
        'pulse-highlight': 'pulseHighlight 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
