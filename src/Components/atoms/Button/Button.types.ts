import { ComponentProps, ElementType } from 'react';

import { Values } from '@/types/ts-utils';

export const ButtonSizes = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
  Full: 'full',
} as const;

export const ButtonColors = {
  Yippie: 'yippie',
  Green: 'green',
  Blue: 'blue',
  Yellow: 'yellow',
  White: 'white',
  Red: 'red',
  Gray: 'gray',
  Shady: 'shady',
  Black: 'black',
  Iron: 'iron',
} as const;

export type ButtonColor = Values<typeof ButtonColors>;

export type ButtonSize = Values<typeof ButtonSizes>;

export type ButtonOwnProps<E extends ElementType = ElementType> = {
  as?: E;
  disabled?: boolean;
  loading?: boolean;
  size?: ButtonSize;
  color?: ButtonColor;
  className?: string;
};

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;
