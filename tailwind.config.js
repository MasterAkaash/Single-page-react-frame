module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        blue_gray: { 400: "#74839d" },
        blue: { A700: "#0061ff" },
        gray: { 50: "#f9fbff", 900: "#0d1624", "600_19": "#7e7e7e19" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { gilroy: "Gilroy" },
      boxShadow: { bs: "0px 12px  31px 0px #7e7e7e19" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
