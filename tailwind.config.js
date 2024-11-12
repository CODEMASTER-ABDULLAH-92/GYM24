/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        itim: ['Playwrite', 'sans-serif'], // Added custom font
      },
    },
  },
  plugins: [],
}
