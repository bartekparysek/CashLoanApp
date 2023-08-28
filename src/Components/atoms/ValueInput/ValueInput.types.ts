import { onInputChangeEvent } from '@/types/ts-utils';

export type ValueInputProps = {
  onChange: (event: onInputChangeEvent) => void;
  calculateLoanParams?: () => void;
  value: number;
  placeholder: string;
  minMax: { min: string; max: string };
  step?: string;
  label?: string;
};
