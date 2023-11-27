import { forwardRef } from 'react';
import { ValueInputProps } from './ValueInput.types';
import { cn } from '@/helpers/cn';

export const ValueInput = forwardRef<HTMLInputElement, ValueInputProps>(
  ({ placeholder, minMax, step, label, name, className, ...rest }, ref) => (
    <div className="flex flex-col items-center w-full">
      <input
        ref={ref}
        className={cn(
          'block w-full px-3 py-1.5 text-base font-normal border border-solid border-gray-300 rounded-full transition ease-in-out focus:text-gray-700',
          'focus:bg-white focus:outline-none',
          className
        )}
        type="number"
        min={minMax.min}
        max={minMax.max}
        step={step}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
);
