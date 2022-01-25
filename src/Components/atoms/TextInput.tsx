import { ChangeEvent } from 'react';
export type onInputChangeEvent = ChangeEvent & { target: HTMLInputElement };

interface InputProps {
	onChange: (event: onInputChangeEvent) => {};
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
}: InputProps) => {
	<>
		<input
			className='
        form-control
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
			type='text'
			name={placeholder}
			placeholder={placeholder}
			value={value}
			pattern={pattern}
		/>
		{submitted && !value && <span id='email-error'>{errorMessage}</span>}
	</>;
};
export default Input;
