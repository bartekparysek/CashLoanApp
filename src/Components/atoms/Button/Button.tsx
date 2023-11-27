import {
  ElementType,
  PropsWithChildren,
  ReactNode,
  Ref,
  forwardRef,
} from 'react';
import {
  ButtonColors,
  ButtonSizes,
  type ButtonOwnProps,
  type ButtonProps,
} from './Button.types';

import { cn } from '@/helpers/cn';

export const Button: <E extends ElementType = 'button'>(
  props: ButtonProps<E>
) => ReactNode | null = forwardRef(
  (props: PropsWithChildren<ButtonOwnProps>, ref: Ref<Element>) => {
    const {
      as: Element = 'button',
      children,
      color = 'yippie',
      size,
      loading,
      disabled,
      className,
      ...rest
    } = props;
    return (
      <Element
        ref={ref}
        className={cn(
          'py-3 px-8 text-md flex justify-center leading-5 rounded-full hover:bg-opacity-70',
          {
            'opacity-50 cursor-not-allowed hover:bg-opacity-100 focus-visible:bg-opacity-100':
              disabled,
            'bg-yippie ': color && color === ButtonColors.Yippie,
            'bg-blue': color && color === ButtonColors.Blue,
            'bg-shady': color && color === ButtonColors.Shady,
            'bg-red': color && color === ButtonColors.Red,
            'bg-yellow': color && color === ButtonColors.Yellow,
            'bg-green-300 text-white': color && color === ButtonColors.Green,
            'bg-white': color && color === ButtonColors.White,
            'bg-iron-300 hover:bg-iron-600':
              color && color === ButtonColors.Iron,
            'w-full': size === ButtonSizes.Full,
            'w-52': size === ButtonSizes.Large,
            'w-32': size === ButtonSizes.Medium,
            'w-24': size === ButtonSizes.Small,
          },
          className
        )}
        disabled={loading || disabled}
        {...rest}
      >
        <span
          className={cn('transition-opacity flex items-center', {
            'opacity-0': loading,
          })}
        >
          {children}
        </span>
      </Element>
    );
  }
);
