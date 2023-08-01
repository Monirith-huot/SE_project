const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: '#7459D9',
        secondary: '#422F8A',
        success: '#52B788',
        warining: '#FCD34D',
        dark: '#11263C',
        white: '#FFF',
        background: '#F0F0F0',
        grey: '#808080',
        textField: "#E0E0E0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
