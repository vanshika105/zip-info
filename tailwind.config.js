const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      emerald: colors.emerald,
      white: colors.white,
      'green-bg': '#F2FFE9',
      'dark-green-bg': '#A6CF98',
      'darker-green': '#557C55',
    },
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
}

