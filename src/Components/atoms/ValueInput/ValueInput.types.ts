import { onInputChangeEvent } from '@/types/ts-utils';

export type ValueInputProps = {
  onChange?: (event: onInputChangeEvent) => void;
  value?: number;
  placeholder: string;
  minMax: { min: number; max: number };
  step?: string;
  label?: string;
  name?: string;
};
