const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      yippie: '#F8F8A0',
      green: '#5FD157',
      blue: '#02ACE5',
      yellow: '#FCDF25',
      white: '#ffff',
      red: '#FF8049',
      gray: {
        '100': '#1C1C1C',
        '200': '#585757',
        '300': '#969696',
        '400': '#E8E8E8',
      },
      shady: '#4c4c4c',
      black: '#000',
      pinball: '#d3d3d3',
      lynxWhite: '#f7f7f7',
      neutral: {
        '50': '#fafafa',
        '100': '#f5f5f5',
        '200': '#e5e5e5',
        '300': '#d4d4d4',
        '400': '#a3a3a3',
        '500': '#737373',
        '600': '#525252',
        '700': '#404040',
        '800': '#262626',
        '900': '#171717',
        '950': '#0a0a0a',
      },
    },
    minHeight: {
      '3/4': 'calc(75vh - 2rem)',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        libre: ['LibreBaskerville', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
