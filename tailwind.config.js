module.exports = {
  purge: [
    './pages/**/*.js',
    './components/**/*.js',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'sans': '"Catamaran", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
