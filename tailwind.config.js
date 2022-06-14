module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
        inter: ["inter", "sans-serif"],
        script: ["bad script", "sans-serif"],
      },
      colors: {
        header: "#F7882F",
        footer: "#262626",
        "cta-bg": "#DCC7AA",
      },
      spacing: {
        "1-5": "20%",
      },
    },
  },
  plugins: [],
};
