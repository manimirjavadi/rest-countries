/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#1a202c",
        "dark-light": "#2d3748",
      },
      textColor: {
        dark: "#fff",
        "dark-light": "#cbd5e0",
      },
    },
  },
  plugins: [],
};
