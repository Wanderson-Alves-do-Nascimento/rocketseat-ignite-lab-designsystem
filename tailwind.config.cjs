/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      tranparent: 'transparent',
      black:'#000000',
      white:'#ffffff',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },
      cyan: {
        500: '#81d8f7',
        300: '#9BE1FB',
      },
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}
