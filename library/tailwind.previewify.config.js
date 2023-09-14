/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  important: "rp-preview",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
