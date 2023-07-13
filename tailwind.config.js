/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        archivo : ['Archivo Narrow', 'sans-serif'],
        kanit : ['Kanit', 'sans-serif'],
        outfit : ['Outfit', 'sans-serif']
      },
      spacing : {
        17 : "4.5rem",
        100 : "30rem"
      }
    },
  },
  plugins: [],
}

