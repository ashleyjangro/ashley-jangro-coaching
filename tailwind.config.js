/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#2d6b70',
        seafoam: '#7fb3b8',
        mint: '#b4d9dc',
        fog: '#e6f0f1',
        cream: '#faf8f5',
        blue: '#d6e7e9',
      },
    },
  },
  plugins: [],
}