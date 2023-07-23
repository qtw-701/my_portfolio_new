/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        grblue: '#67728C',
        grorange: '#FFB996',
      },
      backgroundImage: {
        contact: "url('../public/images/contact_bg.png')",
      },
      fontFamily: {
        hangul: 'SpoqaHanSansNeo-Regular',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slide: '10s slide infinite linear',
      },
    },
  },
  plugins: [],
};
