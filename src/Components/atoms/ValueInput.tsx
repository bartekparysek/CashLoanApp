import { onInputChangeEvent } from './textInput';

export interface ValueInputProps {
	onChange: (event: onInputChangeEvent) => {};
	calculateLoanParams?: () => {};
	value: number;
	placeholder: string;
	minMax: { min: string; max: string };
	step?: string;
}

const ValueInput = ({
	onChange,
	calculateLoanParams,
	value,
	placeholder,
	minMax,
}: ValueInputProps) => {
	<input
		className='form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
		onChange={onChange}
		onBlur={calculateLoanParams}
		type='number'
		min={minMax.min}
		max={minMax.max}
		name='loan-amount'
		step='100'
		value={value}
		placeholder={placeholder}
	></input>;
};

export default ValueInput;
