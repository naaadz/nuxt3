/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'  
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      container: {
          padding: {
            DEFAULT: '2rem'
          }
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        'max-phone': {'max': '639px'}
    },
    },
  },
  plugins: [],
}
