/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease forwards',
      },
      animationDelay: {
        150: '150ms',
        300: '300ms',
        450: '450ms',
        600: '600ms',
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.animation-delay-150': { 'animation-delay': '150ms' },
        '.animation-delay-300': { 'animation-delay': '300ms' },
        '.animation-delay-450': { 'animation-delay': '450ms' },
        '.animation-delay-600': { 'animation-delay': '600ms' },
      });
    }
  ],
};