// @type {import('tailwindcss').Config}
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        black: "#14171A",
        blue_dark: "#004AAD",
        yellow: "#FACE33",
        green: "#97BB68",
      },
      backgroundColor: {
        white: "#FFF",
        black: "#14171A",
        blue_dark: "#004AAD",
        yellow: "#FACE33",
        green: "#97BB68",
      },
    },
  },
  plugins: [],
});
