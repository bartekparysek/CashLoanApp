import { ValueInputProps } from '../ValueInput';

export type RangeInputProps = ValueInputProps & {
  onInput?: () => void;
  onMouseUp?: () => void;
};
