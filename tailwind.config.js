/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'], // Add Fira Code
      },
      colors: {
        dark: "#111827",      // A cool, dark gray (almost black)
        light: "#f9fafb",     // A very light gray
        accent: {
          DEFAULT: "#8A2BE2", // Vibrant violet
          hover: "#7B1FA2",   // Darker violet
          glow: "rgba(138, 43, 226, 0.4)", // Glow color for shadows
        },
        textLight: "#111827",
        textDark: "#f9fafb",
      },
      // Adding a custom box-shadow for the glow effect
      boxShadow: {
        'glow-accent': '0 0 15px 0px rgba(138, 43, 226, 0.6)',
      }
    },
  },
  plugins: [],
}