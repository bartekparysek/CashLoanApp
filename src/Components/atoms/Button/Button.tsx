import {
  ButtonColors,
  ButtonSizes,
  type ButtonOwnProps,
  type ButtonProps,
} from '.';
import {
  ElementType,
  PropsWithChildren,
  ReactNode,
  Ref,
  forwardRef,
} from 'react';

import { cn } from '@/helpers';

export const Button: <E extends ElementType = 'button'>(
  props: ButtonProps<E>
) => ReactNode | null = forwardRef(function Button(
  props: PropsWithChildren<ButtonOwnProps>,
  ref: Ref<Element>
) {
  const {
    as: Element = 'button',
    children,
    color,
    size,
    loading,
    disabled,
    className,
  } = props;
  return (
    <Element
      ref={ref}
      className={cn(
        'py-4 px-8 font-inter text-md font-light flex justify-center leading-5 border rounded-lg border-black border-solid',
        {
          'opacity-50 cursor-not-allowed hover:bg-opacity-100 focus-visible:bg-opacity-100':
            disabled,
          'bg-yippie': color && color === ButtonColors.Yippie,
          'bg-blue': color && color === ButtonColors.Blue,
          'bg-shady': color && color === ButtonColors.Shady,
          'bg-red': color && color === ButtonColors.Red,
          'bg-yellow': color && color === ButtonColors.Yellow,
          'bg-green': color && color === ButtonColors.Green,
          'bg-white': color && color === ButtonColors.White,
          'bg-pinball': color && color === ButtonColors.Pinball,
          'w-full': size === ButtonSizes.Full,
          'w-52': size === ButtonSizes.Large,
          'w-32': size === ButtonSizes.Medium,
          'w-24': size === ButtonSizes.Small,
        },
        className
      )}
      disabled={loading || disabled}
    >
      <span className={cn('transition-opacity', { 'opacity-0': loading })}>
        {children}
      </span>
    </Element>
  );
});
