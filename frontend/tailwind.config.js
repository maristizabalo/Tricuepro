/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryRed: '#e80b2c',
        secondaryRed: "#AF0D20",
        deselectRed: '#af1738',
        hoverRed: "#db8682",
        shadowRed: "#530400",
        todayRed: "#e9cac8"
      },
    },
  },
  plugins: [],
}