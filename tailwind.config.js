const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      red: colors.red,
      gray: colors.blueGray,
      white: colors.white,
      blue: colors.lightBlue,
      black: colors.black,
      transparent: 'transparent'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
