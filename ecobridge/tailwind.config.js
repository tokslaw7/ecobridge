/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black:{
          DEFAULT: '#2c2e3e',
          gray: '#a6a9b7'
        },
        primary: {
          DEFAULT: '#8e54e9',
        },
        white: {
          DEFAULT: '#fff',
          light: '#999'
        }
      },
      screens: {
        max_width: '1700px'
      },
      fontSize:{
        10: '10px',
        12: '12px',
        14: '14px'
      },
      backgroundImage: {
        login_gradient: 'linear-gradient(to right, #8e54e9 0, #4776e6 100%)'
      },
      boxShadow: {
        shadow_round: '0 0px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19)'
      }
    },
  },
  plugins: [],
}