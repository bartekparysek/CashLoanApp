import { onInputChangeEvent } from '@/types/ts-utils';

export type TextInputProps = {
  onChange: (event: onInputChangeEvent) => void;
  placeholder: string;
  value: string | number;
  submitted: boolean;
  errorMessage: string;
  pattern?: string;
  type?: string;
  required: boolean;
};
