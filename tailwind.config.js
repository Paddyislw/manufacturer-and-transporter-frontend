/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#32A3C5",
        primaryLight: "#d5e8ee",
        primaryDark: "#0288b0",
      },
      animation: {
        "bounce-slow": "bounce 2.0s infinite",
        "hover-scale": "transition ease-in-out duration-500 hover:scale-105",
      },
      fontFamily: {
        sans: ["Manrope"],
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1200px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "850px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "800px" },
      // => @media (max-width: 639px) { ... }
      mb: { max: "520px" },
    },
  },
  plugins: [],
};
