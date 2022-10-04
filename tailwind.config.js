/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./location.html"],
  theme: {
    extend: {
      backgroundImage: {
        'beach-noon': 'url(/assets/beach-noon.jpg)',
        'cloudy-sky': 'url(/assets/cloudy-sky.jpg)',
      },
      colors: {
        'brighter': '#f0f6f6',
        'bright': '#dbf0f3',
        'normal': '#99dbea',
        'dark': '#5fb0cd',
        'darken': '#2585b0',
        'darkest': '#084b83'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    // require('autoprefixer'),
  ],
}
