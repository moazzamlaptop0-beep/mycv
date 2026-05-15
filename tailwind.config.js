/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'auto-rotate': 'auto-rotate 25s linear infinite',
      },
      keyframes: {
        'auto-rotate': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        }
      }
    },
  },
  plugins: [],
}