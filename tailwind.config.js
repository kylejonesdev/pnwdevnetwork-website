/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "#101416",
        white: "#ffffff",
        "neon-green": "#b0ff4a",
        "light-blue": "#54a4b5",
      },
      backgroundImage: {
        "banner-bg": "url('../assets/banner-bg.png')",
      },
    },
    fontFamily: {
      RobotoMono: ["Roboto Mono", "monospace", "sans-serif"],
    },
  },
  plugins: [],
};
