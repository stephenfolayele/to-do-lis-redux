/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Josefin Sans", "serif"],
      },
      fontWeight: {
        normal: '400',
        bold: '700'
      },
      colors: {
        whiteColor: 'hsl(0, 7%, 97%)',
        blackColor: '#161622',
        darkBlue: '#24263B',
        greyishBlue: 'hsl(234, 39%, 85%)'
      }
    },
  },
  plugins: [],
}

