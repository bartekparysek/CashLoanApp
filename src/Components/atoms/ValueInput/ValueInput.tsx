import { forwardRef, useRef } from 'react';
import { ValueInputProps } from './ValueInput.types';
import { cn } from '@/helpers/cn';
import { useMergeRefs } from '@/hooks/useMergeRefs';

export const ValueInput = forwardRef<HTMLInputElement, ValueInputProps>(
  (
    { placeholder, minMax, step, label, name, className, onChange, ...rest },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null!);
    const btnStyles = 'px-5 py-2 text-gray-300 hover:text-black';

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
      <div className="flex items-center border border-solid border-gray-300 rounded min-w-[12.5rem] md:min-w-[300px]">
        <button className={btnStyles} type="button" onClick={handleDecrease}>
          -
        </button>
        <input
          ref={useMergeRefs([inputRef, ref])}
          id={name}
          className={cn(
            'block w-full text-center px-2 py-1.5 text-base font-normal rounded-full  transition ease-in-out focus:text-gray-700',
            'focus:bg-white focus:outline-none',
            className
          )}
          onChange={onChange}
          type="number"
          min={minMax.min}
          max={minMax.max}
          step={step}
          placeholder={placeholder}
          {...rest}
        />
        <button className={btnStyles} type="button" onClick={handleIncrease}>
          +
        </button>
      </div>
    );
  }
);
