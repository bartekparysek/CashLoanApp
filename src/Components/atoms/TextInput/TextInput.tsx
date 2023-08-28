import { FC } from 'react';
import { TextInputProps } from './TextInput.types';

const Input: FC<TextInputProps> = ({
  onChange,
  placeholder,
  value,
  submitted,
  errorMessage,
  pattern,
  type = 'text',
  required,
}) => {
  return (
    <div>
      <label className="block px-2 mb-3" htmlFor={placeholder}>
        {placeholder}
      </label>
      <input
        className="
        block w-full px-3 h-10  mb-2 text-base font-normal text-black bg-white bg-clip-padding border-2 border-solid border-gray rounded transition ease-in-out m-1 focus:text-gray-700 focus:bg-white focus:border-blue focus:outline-none"
        onChange={onChange}
        type={type}
        name={placeholder}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        required={required}
      />
      {submitted && !value && (
        <span className="text-[#ef4444] text-sm mb-1 justify-center flex">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
export default Input;
