import type { Meta, StoryObj } from '@storybook/react';

import { Range } from './Range';

export default {
  component: Range,
} as Meta<typeof Range>;

type Story = StoryObj<typeof Range>;

export const Default: Story = {
  render: (props) => <Range {...props} />,
};

Default.args = {
  minMax: {
    min: 100,
    max: 200,
  },
};
