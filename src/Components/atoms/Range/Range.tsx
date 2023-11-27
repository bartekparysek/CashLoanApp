import { forwardRef } from 'react';
import { cn } from '@/helpers/cn';
import { RangeInputProps } from './Range.types';

export const Range = forwardRef<HTMLInputElement, RangeInputProps>(
  ({ placeholder, minMax, step, className, ...rest }, ref) => (
    <div className="mr-5 w-full m-3 ">
      <input
        ref={ref}
        id={rest.name}
        className={cn(
          'rounded-lg overflow-hidden appearance-none bg-gray-400 h-4 w-full',
          className
        )}
        type="range"
        min={minMax.min}
        max={minMax.max}
        step={step}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
);
