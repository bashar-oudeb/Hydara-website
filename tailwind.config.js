/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C0B7E8",
        customPurpleLight: "#C0B7E8",
        customPurpleDark: "#8176AF",
      },
      screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    }
    },

    
    fontFamily: {
      Edu: ["Edu Australia VIC WA NT Hand"],
      poppins: ["Poppins", "sans-serif"],
      Montserrat: ["Montserrat"],
    },
  },
  plugins: [],
};
