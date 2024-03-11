/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#F5C044',
        'custom-grey': '#52525A'
      },
      fontFamily: {
        sora: ['Sora', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}