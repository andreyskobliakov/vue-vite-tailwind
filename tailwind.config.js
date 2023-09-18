/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme1: {
        blue: '#4288B5',
        purple: '#BA90CE',
      },
      theme2: {
        blue: '#0077FF',
        purple: '#6A5ACD',
      },
      colors: {
        blue: {
          DEFAULT: '#4288B5', 
          '2': '#072E53',     
        },
        purple: {
          DEFAULT: '#BA90CE', 
          '2': '#F4DCFF',     
        },
        red: {
          DEFAULT: '#9B1C13', 
          '2': '#F2E1E0',     
        },
        green: {
          DEFAULT: '#0F5132', 
          '2': '#D1E7DD',     
        },
        gold: {
          DEFAULT: '#664D03', 
          '2': '#FFF3CD',     
        },
        gray: {
          'DEFAULT': '#F6F6FA', 
          '2': '#E9E9E9',       
          '3': '#989898',       
          '4': '#323232',       
        },
        dark: {
          'DEFAULT': '#0E3046', 
          '2': '#202637',       
          '3': '#001223',       
        },
      },
      fontFamily: {
        'regular': ['RegularFont', 'sans'],     
        'semi-bold': ['SemiBoldFont', 'sans'], 
      },
      fontSize: {
        'h1': '36px',
        'h2': '24px',
        'h3': '20px',
        'h4': '20px',
        'h5': '18px',
        'h6': '16px',
        'caption': '14px',
        'button': '20px',
        'button-small': '16px',
        'paragraph': '18px',
        'link': '16px',
      },
    },
  },
  variants: {},
  plugins: [],
}



