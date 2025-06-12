import { m } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', 'sans-serif'],
      },
      colors: {
        blackPage: {
          background: '#000000',
          body: '#171717',
          heading: '#FFFFFF',
          text: '#E9E9E9',
          secondary: {
            blue: '#007BC9',
            lightBlue: '#0093D7',
            green: '#0BBBA9',
            red: '#C62828',
          },
        },
        whitePage: {
          background: '#E9E9E9',
          divider: '#343434',
          heading: '#000000',
          text: '#171717',
          secondary: {
            blue: '#0093D7',
            orange: '#FF6837',
            red: '#C62828',
          },
        },
      },
      animation: {
        spin: 'spin 3s linear infinite',
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
