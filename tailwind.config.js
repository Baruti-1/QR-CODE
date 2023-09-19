/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          blue: 'hsl(212, 45%, 89%)',
          darkBlue: 'hsl(218, 44%, 22%)',
          white: 'hsl(0, 0%, 100%)',
          lightGray: 'hsl(212, 45%, 89%)',
          grayishBlue: 'hsl(220, 15%, 55%)',
        },
      },
    },
  },
  plugins: [],
};
