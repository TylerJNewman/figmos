/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // national_2: ["National 2", "sans-serif"],
        sans: ["National", "sans-serif"],
      },
      colors: {
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        "th-background": "var(--background)",
        "th-background-secondary": "var(--background-secondary)",
        "th-foreground": "var(--foreground)",
        "th-primary-dark": "var(--primary-dark)",
        "th-primary-medium": "var(--primary-medium)",
        "th-primary-light": "var(--primary-light)",
        "th-accent-dark": "var(--accent-dark)",
        "th-accent-medium": "var(--accent-medium)",
        "th-accent-light": "var(--accent-light)",
        // bianca: {
        // 	50: "#faf7eb",
        // 	100: "#f3ecd2",
        // 	200: "#e6d8a1",
        // 	300: "#d9c070",
        // 	400: "#d0ac4f",
        // 	500: "#c6923a",
        // 	600: "#af7430",
        // 	700: "#92582b",
        // 	800: "#784628",
        // 	900: "#633b24",
        // },
        "bianca-dark": {
          50: "#faf7eb",
          100: "#f1eeed",
          200: "#e1dada",
          300: "#c0b7b5",
          400: "#9b8f8c",
          500: "#7e6e69",
          600: "#67534e",
          700: "#503f3c",
          800: "#372c2b",
          900: "#231c1c",
        },
        "link-water": {
          50: "#f1f4fc",
          100: "#ebeefa",
          200: "#d2d8f3",
          300: "#b6beeb",
          400: "#999de0",
          500: "#7f7fd5",
          600: "#6d66c5",
          700: "#5e55ad",
          800: "#4d478c",
          900: "#413f70",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
