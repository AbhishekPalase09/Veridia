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
        "2xl": "3rem",
      },
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        veridiaBg: "#f3f1ef",
        accent1: "#8b5cf6",
        accent2: "#fb7185",
        accent3: "#f97316",
      },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui"],
        switzer: ["Switzer", "ui-sans-serif", "system-ui"],
        heading: ['Merriweather', 'serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
