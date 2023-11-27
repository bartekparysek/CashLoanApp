import { OnInputChangeEvent } from '@/types/ts-utils';

export type ValueInputProps = {
  className?: string;
  onChange?: (event: OnInputChangeEvent) => void;
  value?: number;
  placeholder: string;
  minMax: { min: number; max: number };
  step?: string;
  label?: string;
  name?: string;
};
