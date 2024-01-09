/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  fontFamily: {
    display: ["Oswald"],
    body: ["Open Sans"],
  },
  plugins: [],
});
