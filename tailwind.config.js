/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'beach-noon': 'url(/assets/beach-noon.jpg)',
        'cloudy-sky': 'url(/assets/cloudy-sky.jpg)',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    // require('autoprefixer'),
  ],
}
