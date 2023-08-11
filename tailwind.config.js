/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily : {
        archivo : ['Archivo Narrow', 'sans-serif'],
        kanit : ['Kanit', 'sans-serif'],
        outfit : ['Outfit', 'sans-serif']
      },
      spacing : {
        100 : "37rem",
        106 : "39rem"
      },
      keyframes : {
          load : {
            "50%" : {
              height : "9rem"
            },
            "100%" : {
              height : "6rem"
            }
          }
      },
      animation : {
        load : 'load 2s cubic-bezier(.62,.05,.37,.61) infinite'
      },
      boxShadow : {
        "cover" : "0px 0px 0px 53vw #1514148a",
        "normal" : "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1);"
      }
    },
  },
  plugins: [],
}

