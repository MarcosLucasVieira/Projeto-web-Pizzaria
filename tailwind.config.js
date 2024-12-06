/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ["Inter", "sans-serif"],
        'p':'"Inter", "sans-serif"'
      },

      colors: {
        'red-800': '#2C0000',
        'gray-200':'#969494' // Substitua pelo código da sua cor personalizada
      },
    },
  },
  plugins: [],
}

