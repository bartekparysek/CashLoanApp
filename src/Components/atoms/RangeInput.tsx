import { ValueInputProps } from './ValueInput';

const RangeInput = ({
	onChange,
	calculateLoanParams,
	value,
	placeholder,
	minMax,
	step,
}: ValueInputProps) => {
	<input
		className='form-range
    appearance-none
    w-full
    h-6
    p-0
    bg-transparent
    focus:outline-none focus:ring-0 focus:shadow-none'
		onChange={onChange}
		onMouseUp={calculateLoanParams}
		onTouchEnd={calculateLoanParams}
		type='range'
		min={minMax.min}
		max={minMax.max}
		name='loan-amount'
		step={step}
		value={value}
		placeholder={placeholder}
	></input>;
};

export default RangeInput;
