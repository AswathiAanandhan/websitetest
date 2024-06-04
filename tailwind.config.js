/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#938d8d',
        "custom-blue" :"#5D50C6",
        "custom-pink":"#F85E9F"
      },
    },
  },
  plugins: [],
}

