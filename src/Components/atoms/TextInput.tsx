import { ChangeEvent } from 'react';
export type onInputChangeEvent = ChangeEvent & { target: HTMLInputElement };

interface InputProps {
	onChange: (event: onInputChangeEvent) => void;
	placeholder: string;
	value: string | number;
	submitted: boolean;
	errorMessage: string;
	pattern?: string;
}

const Input = ({
	onChange,
	placeholder,
	value,
	submitted,
	errorMessage,
	pattern,
}: InputProps): JSX.Element => {
	return (
		<div>
			<input
				className='
        block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border-2 border-solid border-gray rounded transition ease-in-out m-1 focus:text-gray-700 focus:bg-white focus:border-blue focus:outline-none'
				onChange={onChange}
				type='text'
				name={placeholder}
				placeholder={placeholder}
				value={value}
				pattern={pattern}
			/>
			{submitted && !value && (
				<span className='text-[#ef4444] text-sm ml-1'>{errorMessage}</span>
			)}
		</div>
	);
};
export default Input;
