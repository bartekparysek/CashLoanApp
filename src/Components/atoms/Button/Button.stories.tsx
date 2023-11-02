import type { Meta, StoryObj } from '@storybook/react';
import { ButtonColors, ButtonSizes } from '.';

import { Button } from './Button';

export default {
  component: Button,
  argTypes: {
    color: {
      options: ButtonColors,
      control: { type: 'radio' },
    },
    size: {
      options: ButtonSizes,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (props) => <Button {...props}>Button</Button>,
};
