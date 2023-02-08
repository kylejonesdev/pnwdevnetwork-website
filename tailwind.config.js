/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "300px",
      md: "768px",
    },
    extend: {
      colors: {
        black: "#101416",
        white: "#ffffff",
        "neon-green": "#b0ff4a",
        "light-blue": "#54a4b5",
      },
      backgroundImage: {
        "banner-bg": "url('/dist/assets/banner-bg.png')",
      },
    },
    fontFamily: {
      RobotoMono: ["Roboto Mono", "monospace", "sans-serif"],
    },
  },
  plugins: [],
};
