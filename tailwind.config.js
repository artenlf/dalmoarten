/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090A',
      }
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}