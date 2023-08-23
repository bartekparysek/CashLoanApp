module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      blue: 'rgba(68, 104, 192, 0.71)',
      white: '#ffff',
      gray: 'rgba(17, 26, 48, 0.15)',
      blue1: 'rgba(68, 104, 192, 1)',
    },
    minHeight: {
      '3/4': 'calc(75vh - 2rem)',
    },
    extend: {},
  },
  plugins: [],
};
