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
    colors: {
      primary: "#C0FF6B",
      secondary: "#656565",
      gray: "D5D5D5",
      black: "#000000",
      white: "#ffffff",
      transparent: "transparent"
    },
  },
  plugins: [],
};
