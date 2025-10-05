/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['"Outfit"', 'sans-serif'], // Sets up a 'font-outfit' class
        plata: ['"Plata"', 'serif'], // Sets up a 'font-plata' class
      },
    },
  },
  plugins: [],
};
