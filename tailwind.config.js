/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custome: {
          primary: "#BAFF29",
          secondary: "#1E1E1E",
          gray: "#D5D5D5",
          black: "#000000",
          lightblack: "#2C2C2C",
          white: "#ffffff",
          transparent: "transparent",
        },
      },
      fontFamily: {
        main: ["var(--font-oswald)", ...fontFamily.sans],
        alternate: ["var(--font-share_tech)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
    styled: true,
    utils: true,
  },
};
