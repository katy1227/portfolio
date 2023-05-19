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
    },
  },
  plugins: [],
};
