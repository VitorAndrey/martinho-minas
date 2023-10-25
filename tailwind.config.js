/** @type {import('tailwindcss').Config} */

const colors = require("./src/theme/colors");

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins-400": "Poppins_400Regular",
        "itim-400": "Itim_400Regular",
      },
      colors: colors,
    },
  },
  plugins: [],
};
