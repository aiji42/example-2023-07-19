/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  important: "react-portable-preview",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
