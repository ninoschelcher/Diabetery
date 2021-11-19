module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        black: "#292929",
        grey: "#545454",
        lightgrey: "#B0B0B0",
        greytrans: "#DFDFDF",
        lightwhite: "#F8F8F8",
        greenlight: "#D1FFD1",
        greenmid: "#93FF93",
        greendark: "#5ED27D",
        bluelight: "#D1E6FF",
        bluemid: "#93B1FF",
        bluedark: "#5E8CD2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
