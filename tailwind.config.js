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
    extend: {
      container: {
          screens: {
              'sm': '640px',
              'md': '768px',
              'lg': '1024px',
              'xl': '1280px',
          },
          padding: {
            DEFAULT: '2rem',
            sm: '0'
          }
      }
    },
  },
  plugins: [],
}
