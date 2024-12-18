/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme1Accent: "#F87070",
        theme2Accent: "#70F3F8",
        theme3Accent: "#D881F8",
        grayOne: "#EFF1FA",
        grayTwo: "#D7E0FF",
        darkOne: "#1E213F",
        darkTwo: "#161932",
        white: "#FFFFFF",
      },
      fontFamily: {
        theme1Font: "Kumbh Sans, sans-serif",
        theme2Font: "Roboto Slab, sans-serif",
        theme3Font: "Space Mono, sans-serif",
      },
      backgroundImage: {
        pomodoroContainerGradient:
          "linear-gradient(315deg, #2E325A 0%, #0E112A 100%)",
      },
      boxShadow: {
        pomodoroContainerShadow:
          "-50px -50px 100px 0px #272C5A, 50px 50px 100px 0px #121530",
      },
    },
  },
  plugins: [],
};
