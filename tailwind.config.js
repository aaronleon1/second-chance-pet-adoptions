module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
      },
      colors: {
        header: "#F7882F",
        footer: "#262626",
        "image-bg": "#DCC7AA",
      },
    },
  },
  plugins: [],
};
