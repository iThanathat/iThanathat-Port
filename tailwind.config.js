module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'fit-content': 'fit-content',
        '420px': '26.25rem'
      },
      width: {
        'fit-content': 'fit-content'
      },
      maxHeight: {
        '420px': '26.25rem'
      },
      minHeight: {
        '420px': '26.25rem'
      },
      minWidth: {
        '80': '20rem'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate"]
  }
}
