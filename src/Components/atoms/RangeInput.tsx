import { ValueInputProps } from './ValueInput';

const RangeInput = ({
	onChange,
	calculateLoanParams,
	value,
	placeholder,
	minMax,
	step,
}: ValueInputProps): JSX.Element => {
	return (
		<div className=' mr-5 w-64 m-3 '>
			<input
				className='rounded-lg overflow-hidden appearance-none bg-gray h-4 w-full'
				onChange={onChange}
				onMouseUp={calculateLoanParams}
				onTouchEnd={calculateLoanParams}
				type='range'
				min={minMax.min}
				max={minMax.max}
				name='loanRange'
				step={step}
				value={value}
				placeholder={placeholder}
			></input>
		</div>
	);
};

export default RangeInput;
