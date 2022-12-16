/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#00ADB5",
        "text-primary": "#EEEEEE",
        alternative: "#393E46",
      },
    },
  },
  plugins: [],
}
