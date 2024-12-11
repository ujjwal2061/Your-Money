/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        bungee:["Bungee Spice","sans-serif"] ,
        jetbrains:[ "JetBrains Mono", "serif"] ,
        itim:[ "Itim"]
      }
    },
  },
  plugins: [
    
  ],
}

