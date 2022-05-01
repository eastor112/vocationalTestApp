const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#533E85',
          2: '#6D5BA8',
        },
        secondary: {
          1: '#488FB1',
          2: '#5f96af',
        },
        terciary: {
          1: '#4FD3C4',
          2: '#7FD5C4',
        },
        cuaternary: {
          1: '#C1F8CF',
          2: '#cff1d8',
        },
        neutral: {
          1: '#0D6EFD',
          2: '#3686fd',
        },
        success: {
          1: '#198754',
          2: '#319b62',
        },
        danger: {
          1: '#971540',
          2: '#B71540',
        },
        warning: {
          1: '#FF9F43',
          2: '#FFB74D',
        },
        info: {
          1: '#0DCAF0',
          2: '#4DDAF5',
        },
        light: {
          1: '#e2e2e2',
          2: '#F5F5F5',
        },
        dark: {
          1: '#202020',
          2: '#363636',
        },
      },
      lineHeight: {
        1: '.5rem',
        2: '1rem',
        3: '1.5rem',
        4: '2rem',
        5: '2.5rem',
        6: '3rem',
        7: '3.5rem',
        8: '4rem',
        9: '4.5rem',
        10: '5rem',
        11: '5.5rem',
        12: '6rem',
      },
      transitionProperty: {
        'width': 'width',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
