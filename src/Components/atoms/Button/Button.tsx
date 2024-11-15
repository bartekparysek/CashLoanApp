import React, { ElementType, PropsWithChildren, ReactNode, Ref, forwardRef } from "react";
import { ButtonColors, ButtonSizes, type ButtonOwnProps, type ButtonProps } from "./Button.types";

import { cn } from "@/helpers/cn";

export const Button: <E extends ElementType = "button">(props: ButtonProps<E>) => ReactNode | null = forwardRef(
  (props: PropsWithChildren<ButtonOwnProps>, ref: Ref<Element>) => {
    const { as: Element = "button", children, color = "yippie", size, loading, disabled, className, ...rest } = props;
    return (
      <Element
        ref={ref}
        className={cn(
          "text-md flex justify-center rounded px-8 py-3 font-medium leading-5 hover:bg-opacity-70",
          {
            "cursor-not-allowed opacity-50 hover:bg-opacity-100 focus-visible:bg-opacity-100": disabled,
            "bg-yippie hover:bg-[#f2eb52]": color && color === ButtonColors.Yippie,
            "bg-blue": color && color === ButtonColors.Blue,
            "bg-shady": color && color === ButtonColors.Shady,
            "bg-red": color && color === ButtonColors.Red,
            "bg-yellow": color && color === ButtonColors.Yellow,
            "bg-green-300 text-white": color && color === ButtonColors.Green,
            "bg-white": color && color === ButtonColors.White,
            "bg-iron-200 hover:bg-iron-400": color && color === ButtonColors.Iron,
            "w-full": size === ButtonSizes.Full,
            "w-52": size === ButtonSizes.Large,
            "w-32": size === ButtonSizes.Medium,
            "w-24": size === ButtonSizes.Small,
          },
          className,
        )}
        disabled={loading || disabled}
        {...rest}
      >
        <span
          className={cn("flex items-center transition-opacity", {
            "opacity-0": loading,
          })}
        >
          {children}
        </span>
      </Element>
    );
  },
);
Button.displayName = "Button";
