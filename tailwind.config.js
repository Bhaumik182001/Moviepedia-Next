/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: ['last'], //setting last element 
      resolution: {
        "3xl": "2000px" //adding 3xl as for 2000px
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide') //following line makes scrollbar-hide styling works everytime
  ],
}
