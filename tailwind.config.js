/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: { 'custom': '0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06)', },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        smoochSans: ["Smooch Sans", "sans-serif"],
        thescore: ["THE SCORE", "sans-serif"],
      },
      colors: {
        primary: ["#4E31AA"],
        secondary: ["#03001C"],

      }
    },
    screens: {
      sm: "640px",
      md: "767px",
      lg: "1140px",
      xl: "1440px",
      "2xl": "1800px",
    }
  },
  plugins: [],
}