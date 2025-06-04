// tailwind.config.js
// const {heroui} = require("@heroui/theme");
const customHeroui = require("./src/plugins/custom-heroui-plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // or you can use a glob pattern (multiple component styles)
    './node_modules/@heroui/theme/dist/components/(button|snippet|code|input|modal|tabs).js'
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'scroll': 'scroll 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scroll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(5px)' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [ customHeroui()],
};