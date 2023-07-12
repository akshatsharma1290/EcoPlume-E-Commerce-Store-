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
        kanit : ['Kanit', 'sans-serif']
      }
    },
  },
  plugins: [],
}

