/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,json}",
  ],
  safelist: [
    {
      pattern: /blue-100/,
    }
  ],
  theme: {
    fontFamily: {
      sans: 'Poppins, sans-serif',
      sans: 'Regular, sans-serif',
      sans: 'Semi-bold, sans-serif'
    },
    extend: {
      colors: {
        gold: {
          50: '#fff9db',
          100: '#fff3b3',
          200: '#ffec8b',
          300: '#ffe563',
          400: '#ffde3b',
          500: '#ffd713', // Основний колір "gold"
          600: '#ffcd00',
          700: '#f4bb00',
          800: '#e0a100',
          900: '#c68a00',
        },
        "blue-100": "var(--blue-100)",
        "blue-400": "var(--blue-400)",
        "blue-600": "var(--blue-600)",
        "purple-100": "var(--purple-100)",
        "purple-600": "var(--purple-600)",
        "red-100": "var(--red-100)",
        "red-600": "var(--red-600)",
        "green-100": "var(--green-100)",
        "green-600": "var(--green-600)",
        "gold-100": "var(--gold-100)",
        "gold-600": "var(--gold-600)",
        "gray-100": "var(--gray-100)",
        "gray-300": "var(--gray-300)",
        "gray-500": "var(--gray-500)",
        "gray-600": "var(--gray-600)",
        "dark-400": "var(--dark-400)",
        "dark-500": "var(--dark-500)",
        "dark-600": "var(--dark-600)"
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
  }
}

