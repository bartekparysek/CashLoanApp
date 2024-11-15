"use client";
import { forwardRef, useRef } from "react";
import { ValueInputProps } from "./ValueInput.types";
import { cn } from "@/helpers/cn";
import { useMergeRefs } from "@/hooks/useMergeRefs";

export const ValueInput = forwardRef<HTMLInputElement, ValueInputProps>(({ placeholder, minMax, step, label, name, className, onChange, ...rest }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null!);
  const btnStyles = "px-5 py-2 text-gray-300 hover:text-black";

  const handleIncrease = () => {
    if (inputRef.current) {
      inputRef.current.stepUp();
      onChange?.(undefined, inputRef.current.value);
    }
  };

  const handleDecrease = () => {
    if (inputRef.current) {
      inputRef.current.stepDown();
      onChange?.(undefined, inputRef.current.value);
    }
  };

  return (
    <div className="flex w-full items-center rounded border border-solid border-gray-300 md:min-w-[300px]">
      <button
        className={cn(btnStyles, "mr-auto")}
        type="button"
        onClick={handleDecrease}
      >
        -
      </button>
      <input
        ref={useMergeRefs([inputRef, ref])}
        id={name}
        className={cn(
          "focus:text-gray-700 block w-full rounded-full px-2 py-1.5 text-center text-base font-normal transition ease-in-out",
          "focus:bg-white focus:outline-none",
          className,
        )}
        onChange={onChange}
        type="number"
        min={minMax.min}
        max={minMax.max}
        step={step}
        placeholder={placeholder}
        {...rest}
      />
      <button
        className={cn(btnStyles, "ml-auto")}
        type="button"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
});

ValueInput.displayName = "ValueInput";
