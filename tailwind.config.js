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
        bold: '700',
        extrabold: '800'
      },
      colors: {
        active: '#2e4d9e',
        whiteColor: 'hsl(0, 7%, 97%)',
        blackColor: '#161622',
        darkBlue: '#24263B',
        greyishBlue: 'hsl(234, 39%, 85%)',
        customBlue: 'hsl(192, 100%, 67%)',
        customPurple: 'hsl(280, 187%, 65%)'
      },
      borderImage: {
        'gradient-blue-purple': 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)) 1'
      }
    },
  },
  plugins: [],
}

