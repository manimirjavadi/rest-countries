/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Nunito Sans"', "sans-serif"],
    },
    extend: {
      boxShadow: {
        "3xl": "0px 0px 11px -2px rgba(0, 0, 0, 0.41);",
      },
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
