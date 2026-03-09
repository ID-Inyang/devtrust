/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandGray: '#778190',
        buttonBlue: '#0e59f2',
      },
      fontFamily: {
        custom: [
          'Roboto', // your Google Font
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        dropshade: [
          'DropShade', 
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
}


