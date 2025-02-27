/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6CC426',
          1: '#6CC426',
          2: '#426F28',
          3: '#2D4429',
          4: '#232F2A'
        },
        secondary: {
          DEFAULT: '#E2974D',
          1: '#E2974D',
          2: '#7D583C',
          3: '#4B3933',
          4: '#32292F'
        },
        tertiary: {
          DEFAULT: '#346356',
          1: '#346356',
          2: '#649265',
          3: '#7CAA6C',
          4: '#88B670',
          5: '#8EBC72'
        }
        // quaternary: {
        //   DEFAULT: '#FFFFFF',
        //   1: '#FFFFFF',
        //   2: '#FFFFFF',
        //   3: '#FFFFFF',
        //   4: '#FFFFFF',
        //   5: '#FFFFFF'
        // },
        // fifth: {
        //   DEFAULT: '#000000',
        //   1: '#000000',
        //   2: '#000000',
        //   3: '#000000',
        //   4: '#000000',
        //   5: '#000000'
        // }
        // secondaryRed: "#AF0D20",
        // deselectRed: '#af1738',
        // hoverRed: "#db8682",
        // shadowRed: "#530400",
        // todayRed: "#e9cac8"
      },
    },
  },
  plugins: [],
}