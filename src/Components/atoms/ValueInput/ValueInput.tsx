import { forwardRef } from 'react';
import { ValueInputProps } from './ValueInput.types';

export const ValueInput = forwardRef<HTMLInputElement, ValueInputProps>(
  ({ placeholder, minMax, step, label, name, ...rest }, ref) => (
    <div className="flex flex-col items-center w-full ">
      <input
        ref={ref}
        className="block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border-2 border-solid border-gray rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:outline-none"
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
