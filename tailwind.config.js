/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Nunito Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        darkBg: "#202c37",
        darkElement: "#2B3945",
        darkText: "#fff",
        lightBg: "#fafafa",
        ligtElement: "#fff",
        lightInput: "#858585",
        lightText: "#111517",
      },
    },
  },
  plugins: [],
};
