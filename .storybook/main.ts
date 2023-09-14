import type { StorybookConfig } from '@storybook/nextjs';
const path = require('path');
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js'),
      },
    },
  ],
  staticDirs: ['../public'],
  webpackFinal: async (config, { configType }) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      };
      /**
       * Fixes font import with /
       * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
       */
      config.resolve.roots = [
        path.resolve(__dirname, '../public'),
        'node_modules',
      ];
    }

    return config;
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  typescript: { reactDocgen: false },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
