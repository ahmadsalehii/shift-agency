/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    "app-graphite-6": "#253238",
    "app-main-text": "#2D2D2D",
    "app-text-details": "#3C3C3C",
    "app-main": "#3366E8",
  },
};

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
