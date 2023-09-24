import { forwardRef } from 'react';
import { ValueInputProps } from './ValueInput.types';

export const ValueInput = forwardRef<HTMLInputElement, ValueInputProps>(
  ({ placeholder, minMax, step, label, name, ...rest }, ref) => (
    <div className="flex flex-col items-center w-52 ">
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <input
        ref={ref}
        className=" block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border-2 border-solid border-gray rounded transition ease-in-out m-1 focus:text-gray-700 focus:bg-white focus:border-blue focus:outline-none"
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
