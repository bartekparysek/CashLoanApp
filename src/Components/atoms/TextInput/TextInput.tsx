import { forwardRef } from 'react';
import { TextInputProps } from './TextInput.types';
import { cn } from '@/helpers/cn';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { placeholder, value, name, type = 'text', className, error, ...rest },
    ref
  ) => (
    <div className="w-full relative">
      <label className="block mb-1" htmlFor={name}>
        {placeholder}
      </label>
      <input
        ref={ref}
        {...rest}
        className={cn([
          className,
          'block w-full px-3 h-10 text-base font-normal text-black bg-white bg-clip-padding border-2 border-solid border-gray rounded transition ease-in-out',
          'focus:outline-none',
          { 'border-red': error },
        ])}
        type={type}
        name={name}
      />
      {error && (
        <span className="text-red font-thin absolute mt-[2px] text-sm justify-center flex">
          {error}
        </span>
      )}
    </div>
  )
);
