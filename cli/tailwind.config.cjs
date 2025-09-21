/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,ts,js}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          marronOscuro: '#735837',
          grisClaro: '#cfcec8',
          marronClaro: '#ab7c62',
          marronRojizo: '#b45533',
          cremaClaro: '#f8efde',
          verdeAgua: '#5e998d',
          verdeOscuro: '#3d4d40',
          beigeCalido: '#cba58c',
        }
      }
    }
  },
  plugins: []
}