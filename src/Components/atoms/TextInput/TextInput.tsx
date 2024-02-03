import { forwardRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
          'block w-full px-3 h-10 text-base font-normal bg-white border border-solid border-gray-300 rounded transition ease-in-out',
          'focus:outline-none',
          { 'border-red': error },
        ])}
        type={type}
        name={name}
      />
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-red font-thin absolute mt-[2px] text-sm justify-center flex"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
);
