/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floatBigX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100px)" },
        },
        floatBigY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-120px)" },
        },
        floatDiagonal: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(120px, -120px)" },
        },
        floatCrazy: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-100px, 80px)" },
          "50%": { transform: "translate(60px, -100px)" },
          "75%": { transform: "translate(-30px, 60px)" },
        },
        bounceArrow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" },
        },
      },
      animation: {
        floatBigX: "floatBigX 10s ease-in-out infinite",
        floatBigY: "floatBigY 12s ease-in-out infinite",
        floatDiagonal: "floatDiagonal 14s ease-in-out infinite",
        floatCrazy: "floatCrazy 16s ease-in-out infinite",
        bounceArrow: "bounceArrow 1.5s ease-in-out infinite",
      },
       fontSize: {
             '10xl': '10rem',  // Example using rem
             '11xl': '120px', // Example using pixels
           },
            screens: {
        sm: '320px',   // small screens
        md: '500px',   // medium screens
        lg: '1024px',  // large screens
        // You can also add xl or 2xl if needed
        // xl: '1280px',
        // '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
