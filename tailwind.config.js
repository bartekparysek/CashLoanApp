module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{html,js,tsx,ts}',
    '.src/Components/**/*.{tsx,ts}',
    '.src/pages/**'
  ],
  theme: {
    colors: {
      'blue': 'rgba(68, 104, 192, 0.71)',
      'white': '#ffff',
      'gray': 'rgba(17, 26, 48, 0.15)',
      'blue1': 'rgba(68, 104, 192, 1)',
    },
    minHeight: {
      '3/4': 'calc(75vh - 2rem)'
    },
    extend: {},
  },
  plugins: [],
}
