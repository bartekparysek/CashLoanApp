import { forwardRef } from 'react';

import { RangeInputProps } from './Range.types';

export const Range = forwardRef<HTMLInputElement, RangeInputProps>(
  ({ placeholder, minMax, step, ...rest }, ref) => (
    <div className="mr-5 w-full m-3 ">
      <input
        ref={ref}
        className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-4 w-full"
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
