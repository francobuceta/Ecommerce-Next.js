/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: "Montserrat, sans-serif",
    },
    extend: {
      primary: "#C0FF6B",
      secondary: "#656565",
      gray: "#D5D5D5",
      black: "#000000",
      lightblack: "#292929",
      white: "#ffffff",
      transparent: "transparent"
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
    styled: false,
    utils: true
  }
};
