import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': {
            transform: 'translateX(0) translateY(0) scaleY(1)',
          },
          '25%': {
            transform: 'translateX(5%) translateY(-2%) scaleY(1.05)',
          },
          '50%': {
            transform: 'translateX(0) translateY(-4%) scaleY(0.95)',
          },
          '75%': {
            transform: 'translateX(-5%) translateY(-2%) scaleY(1.02)',
          },
        },
      },
      animation: {
        'wave': 'wave 20s ease-in-out infinite',
        'wave-reverse': 'wave 25s ease-in-out infinite reverse',
        'wave-slow': 'wave 30s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
