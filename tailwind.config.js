const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: "media",
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Helvetica", "Open Sans", "sans-serif"],
    },
    colors: {
      ...colors,
      gray: colors.trueGray,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
