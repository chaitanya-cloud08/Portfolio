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
        mono: ['Fira Code', 'monospace'], 
      },
      colors: {
        dark: "#111827",    
        light: "#f9fafb",    
        accent: {
          DEFAULT: "#8A2BE2", 
          hover: "#7B1FA2",  
          glow: "rgba(138, 43, 226, 0.4)", 
        },
        textLight: "#111827",
        textDark: "#f9fafb",
      },
  
      boxShadow: {
        'glow-accent': '0 0 15px 0px rgba(138, 43, 226, 0.6)',
      }
    },
  },
  plugins: [],
}