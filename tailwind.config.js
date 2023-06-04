/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "ocean-img": "url('/src/assets/images/ocean.png')",
        "architecture-img": "url('/src/assets/images/architecture.png')",
      },
      fontFamily: {
        name: ["Josefin Sans"],
        title: ["Zen Maru Gothic"],
        subTitle: ["Bruno Ace SC"],
        tag: ["Gruppo"],
        link: ["Mukta"],
      },
      animation: {
        "slide-in-fwd-center": "slide-in-fwd-center 2s linear both",
        "tracking-in-contract":
          "tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.5s  both",
      },
      keyframes: {
        "slide-in-fwd-center": {
          "0%": {
            transform: "translateZ(-1400px)",
            opacity: "0",
          },
          to: {
            transform: "translateZ(0)",
            opacity: "1",
          },
        },
        "tracking-in-contract": {
          "0%": {
            "letter-spacing": "1em",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            "letter-spacing": "normal",
            opacity: "1",
          },
        },
      },
    },
    screens: {
      sp: { max: "750px" },
      pc: "950px",
    },
  },
  plugins: [],
};
