// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem"
      }
    },
    extend: {
      screens: {
        sm: "640px",   // mobile landscape / small tablets
        md: "768px",   // tablets
        lg: "1024px",  // small laptops / desktop
        xl: "1280px",  // large screens
        "2xl": "1536px"
      },
      colors: {
        veridiaBg: "#f3f1ef",
        accent1: "#8b5cf6",
        accent2: "#fb7185",
        accent3: "#f97316"
      },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui"],
        switzer: ["Switzer", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};
