module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      yippie: '#F8F8A0',
      green: '#5FD157',
      blue: '#02ACE5',
      yellow: '#FCDF25',
      white: '#ffff',
      red: '#FF8049',
      gray: '#e7e7e7',
      shady: '#4c4c4c',
      black: '#000',
      pinball: '#d3d3d3',
    },
    minHeight: {
      '3/4': 'calc(75vh - 2rem)',
    },
    extend: {},
  },
  plugins: [],
};
