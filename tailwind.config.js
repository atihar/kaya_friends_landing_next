/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'gruppo': ['Gruppo', 'cursive'],
      'alfa': ['Alfa Slab One', 'cursive'],
      'libre': ['Libre Baskerville', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
