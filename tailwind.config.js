const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...fontFamily.sans],
        jersey: ['"Jersey 10"', 'cursive'],
      },
    },
  },
  plugins:  [require('tailwind-scrollbar')],
} 