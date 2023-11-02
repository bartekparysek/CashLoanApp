import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { ParamsInput } from '@/components/atoms/ParamsInput';
import { Range } from '@/components/atoms/Range';
import { ValueInput } from '@/components/atoms/ValueInput';
import { content } from '@/config';
import { useLoanApplication } from '@/contexts/LoanAppContext';
import { OnInputChangeEvent } from '@/types/ts-utils';

export const ParametersForm = () => {
  const { loan, setLoan, calculateLoanParams } = useLoanApplication();
  const { register, watch, setValue } = useForm<{
    amount: string | number;
    period: string | number;
  }>({
    defaultValues: { amount: loan.amount, period: loan.period },
  });

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

  const values = watch();

  const handleAmountChange = (e: OnInputChangeEvent) => {
    if (e.target.value === '') return;
    setValue('amount', parseFloat(e.target.value));
  };

  const handlePeriodChange = (e: OnInputChangeEvent) => {
    if (e.target.value === '') return;
    setValue('period', parseFloat(e.target.value));
  };

  const handleMouseUp = () => {
    calculateLoanParams();
  };

  useEffect(() => {
    register('amount');
    register('period');
  }, [register]);

  useEffect(() => {
    const subscription = watch((value) => {
      setLoan((prev) => ({
        ...prev,
        amount: parseFloat(value?.amount! as string),
        period: parseFloat(value?.period! as string),
      }));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [setLoan, watch]);

  return (
    <form>
      <div className="w-full">
        <ParamsInput label={amountLabel} name="amount">
          <Range
            {...register('amount')}
            onMouseUp={handleMouseUp}
            placeholder={amountPlaceholder}
            minMax={amountMinMax}
            step={amountStep}
          />
          <ValueInput
            name="amountNumber"
            onChange={handleAmountChange}
            value={Number(values.amount)}
            placeholder={amountPlaceholder}
            minMax={amountMinMax}
            step={amountStep}
          />
        </ParamsInput>
        <ParamsInput label={periodLabel} name="period">
          <Range
            {...register('period')}
            onMouseUp={handleMouseUp}
            placeholder={periodPlaceholder}
            minMax={periodMinMax}
            step={periodStep}
          />
          <ValueInput
            name="periodNumber"
            onChange={handlePeriodChange}
            value={Number(values.period)}
            placeholder={periodPlaceholder}
            minMax={periodMinMax}
            step={periodStep}
          />
        </ParamsInput>
      </div>
    </form>
  );
};
