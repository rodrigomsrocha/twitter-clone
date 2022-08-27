/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "1022px",
    },
    colors: {
      primary: "#000",
      secondary: "#15181c",
      search: "#202327",
      white: "#fff",
      gray: "#7a7a7a",
      outline: "#2f3336",
      retweet: "#00c068",
      like: "#e8265e",
      twitter: "#33a1f2",
      "twitter-dark-hover": "#011017",
      "twitter-light-hover": "#2c8ed6",
    },
    extend: {},
  },
  plugins: [],
};
