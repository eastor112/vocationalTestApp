module.exports = {
  content: ['./pages/*.{js,html}'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#533E85',
          2: '#6D5BA8',
        },
        secondary: {
          1: '#488FB1',
          2: '#6A9FBB',
        },
        terciary: {
          1: '#4FD3C4',
          2: '#7FD5C4',
        },
        cuaternary: {
          1: '#C1F8CF',
          2: '#DDF8CF',
        },
        success: '#198754',
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
          1: '#E6E6E6',
          2: '#F5F5F5',
        },
        dark: {
          1: '#212529',
          2: '#313131',
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
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
