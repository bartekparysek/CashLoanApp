import { atom, useAtom, SetStateAction } from 'jotai';
import { ParamsInput } from '@/components/atoms/ParamsInput';
import { ValueInput } from '@/components/atoms/ValueInput';
import { content } from '@/config';
import { OnInputChangeEvent } from '@/types/ts-utils';

export const loanAmountAtom = atom(1000);
export const loanPeriodAtom = atom(6);

export const ParametersForm = () => {
  const [loanAmount, setLoanAmount] = useAtom(loanAmountAtom);
  const [periodAmount, setPeriodAmount] = useAtom(loanPeriodAtom);

  const {
    amountLabel,
    amountMinMax,
    amountPlaceholder,
    amountStep,
    periodPlaceholder,
    periodLabel,
    periodMinMax,
    periodStep,
  } = content;

  const handleChange =
    (setter: (val: number) => void) =>
    (e?: OnInputChangeEvent, value?: string) => {
      if (e && e.target.value !== '') {
        setter(+e.target.value);
      } else if (value && value !== '') {
        setter(+value);
      }
    };

  const handleAmountChange = handleChange(setLoanAmount);

  const handlePeriodChange = handleChange(setPeriodAmount);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:flex-row w-full gap-6">
        <ParamsInput label={amountLabel} name="amount">
          <ValueInput
            name="amount"
            onChange={handleAmountChange}
            value={loanAmount}
            placeholder={amountPlaceholder}
            minMax={amountMinMax}
            step={amountStep}
            className="max-w-[300px]"
          />
        </ParamsInput>
        <ParamsInput label={periodLabel} name="period">
          <ValueInput
            name="period"
            onChange={handlePeriodChange}
            value={periodAmount}
            placeholder={periodPlaceholder}
            minMax={periodMinMax}
            step={periodStep}
            className="max-w-[300px]"
          />
        </ParamsInput>
      </div>
    </div>
  );
};
