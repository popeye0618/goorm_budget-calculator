/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        strong:
          "0 5px 6px 1px rgba(0, 0, 0, 0.4), 0 5px 4px -1px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
