/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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