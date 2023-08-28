import { FC } from 'react';
import { ValueInputProps } from './ValueInput.types';

export const ValueInput: FC<ValueInputProps> = ({
  onChange,
  calculateLoanParams,
  value,
  placeholder,
  minMax,
  step,
  label,
}) => {
  return (
    <div className="flex flex-col items-center w-52 ">
      <label className="font-bold">{label}</label>
      <input
        className=" block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border-2 border-solid border-gray rounded transition ease-in-out m-1 focus:text-gray-700 focus:bg-white focus:border-blue focus:outline-none"
        onChange={onChange}
        onBlur={calculateLoanParams}
        type="number"
        min={minMax.min}
        max={minMax.max}
        name="loanInput"
        step={step}
        value={value}
        placeholder={placeholder}
      ></input>
    </div>
  );
};
