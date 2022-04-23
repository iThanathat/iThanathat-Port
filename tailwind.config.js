module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        'fit-content': 'fit-content',
        '420px': '26.25rem',
      },
      width: {
        'fit-content': 'fit-content',
      },
      maxHeight: {
        '420px': '26.25rem',
      },
      minHeight: {
        '420px': '26.25rem',
      },
      minWidth: {
        80: '20rem',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        corporate: {
          ...require('daisyui/src/colors/themes')['[data-theme=corporate]'],
          primary: '#a0ebff',
          'primary-content': '#000000',
          'primary-focus': '#0014d0',
        },
      },
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: 'rgb(255, 240, 116)',
          'primary-content': '#000000',
          'primary-focus': '#0014d0',
        },
      },
    ],
  },
};
