/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-secondary": "var(--surface-secondary)",

        primary: "var(--primary)",
        secondary: "var(--secondary)",

        border: "var(--border)",

        accent: "var(--accent)",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },

      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },

      maxWidth: {
        content: "var(--content-width)",
        layout: "var(--layout-width)",
      },
    },
  },

  plugins: [],
};