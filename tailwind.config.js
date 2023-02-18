/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#e1e1e6",
          300: "#A6A6A6",
          400: "#8d8d99",
          600: "#545454",
          700: "#323238",
          800: "#202024",
          900: "#121214",
      },
      gold: {
        700: "#AF9543",
      }
    },
      fontFamily: {
        'sans': 'Montserrat, sans-serif',
      },
    },
    
  },
  plugins: [],
}