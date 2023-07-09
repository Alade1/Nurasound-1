/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg" : "url('./src/assets/images/Hero-Background-Image.png')",
        "sub-bg" : "url('./src/assets/images/Earphones.png')"
      }
    },
  },
  plugins: [],
}