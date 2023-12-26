/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#0B1221', // Custom primary color variable
        side: '#FF9305', // Custom secondary color variable
        third: '#e3e3e3'
      },
    },
  },
  plugins: [],
}

