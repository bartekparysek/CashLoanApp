import { FC, PropsWithChildren } from 'react';
import { ParamsInputProps } from './ParamsInput.types';

export const ParamsInput: FC<PropsWithChildren<ParamsInputProps>> = ({
  children,
  label,
  name,
}) => (
  <div className="w-full text-center mb-5">
    <label htmlFor={name} className="block font-bold mb-5">
      {label}
    </label>
    <div className="flex flex-col items-center mb-2 w-full ">{children}</div>
  </div>
);
