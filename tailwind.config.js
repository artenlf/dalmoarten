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
      keyframes: {
        slideDown:{
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp:{
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 0.3s cubic-bezier(0.87, 0, 0.13, 1) forwards',
        slideUp: 'slideUp 0.3s cubic-bezier(0.87, 0, 0.13, 1) forwards'

      }
    },
    
  },
  plugins: [],
}