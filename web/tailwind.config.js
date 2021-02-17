const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      colors: {
        gray: colors.trueGray,
        red: colors.red,
        blue: colors.blue,
        black: colors.black,
        white: colors.white,
        transparent: 'transparent',
        current: 'currentColor',
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }