/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff4757',
        secondary: '#5352ed',
        accent: '#ffa502',
        dark: '#333',
        light: '#f8f9fa',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'custom-hover': '0 15px 40px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'custom': '8px',
      },
    },
  },
  plugins: [],
} 