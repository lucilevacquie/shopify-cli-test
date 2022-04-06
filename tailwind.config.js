const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.liquid"],
  },
  theme: {
    extend: {
      colors: {
        darkGreen: "#494F45",
      }
    },
  },
  plugins: [],
}
