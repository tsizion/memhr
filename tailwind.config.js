module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust to include your project's file types
  ],
  theme: {
    extend: {
      screens: {
        xsm: { max: "400px" }, // Smaller devices (e.g., large phones).
        sm: "400px", // Tablets.
        md: "768px", // Small laptops.
        lg: "1024px", // Desktops.
        xl: "1280px", // Larger screens.
      },

      fontFamily: {
        titleFont: ["Montserrat", "sans-serif"], // For headings
        bodyFont: ["Open Sans", "sans-serif"], // For body text
      },
      colors: {
        textColor: "#1f1f1f",
        lightText: "#d8cfc4", // Light beige text color
        boxBg: "linear-gradient(145deg, #6a4e23, #5b3e1e)", // Gradient from light to dark brown
        redPrimary: "#db0202",
        bluePrimary: "#32468f", // Light brown for subtle accents
        primaryColor: "#16104f", // Firebrick red for buttons and highlights
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #5a2b1a, -10px -10px 19px #3c1f10", // Brown shadow effect
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
};
