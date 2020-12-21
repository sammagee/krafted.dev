const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        orange: colors.orange,
      },
      fontFamily: {
        'sans': '"Catamaran", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
}
