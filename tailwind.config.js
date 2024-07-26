/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dist/*.html"], // Adjust this to match the paths to your HTML files
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

