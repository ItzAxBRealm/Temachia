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
        lexend: ["Lexend", "sans-serif"],
        smoochSans: ["Smooch Sans", "sans-serif"],
        thescore: ["THE SCORE", "sans-serif"],
      },
      colors: {
        primary: "#4E31AA",
        secondary: "#03001C",
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    }
  },
  plugins: [],
}