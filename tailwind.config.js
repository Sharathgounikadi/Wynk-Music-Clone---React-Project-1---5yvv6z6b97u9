/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./public/index.html",
  "./src/**/*.{js,ts,jsx,tsx,html}",],
  theme: {
    extend: {
      screens: {
        'xs': '320px', 
      },
    },
  },
  plugins: [],
}