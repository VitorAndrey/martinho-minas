/** @type {import('tailwindcss').Config} */

const colors = require("./src/theme/colors");

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins-400": "Poppins_400Regular",
        "poppins-600": "Poppins_600SemiBold",
        "poppins-700": "Poppins_700Bold",
      },
      colors: colors,
    },
  },
  plugins: [],
};
