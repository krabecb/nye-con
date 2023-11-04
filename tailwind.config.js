/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/src/assets/images/20230917_160446.jpg')",
      }
    },
  },
  plugins: [],
}

