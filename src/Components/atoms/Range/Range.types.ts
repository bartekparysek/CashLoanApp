import { ValueInputProps } from '../ValueInput';

export type RangeInputProps = ValueInputProps & {
  className?: string;
  onInput?: () => void;
  onMouseUp?: () => void;
};
