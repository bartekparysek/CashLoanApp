import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { ParamsInput } from '@/components/atoms/ParamsInput';
import { Range } from '@/components/atoms/Range';
import { ValueInput } from '@/components/atoms/ValueInput';
import { content } from '@/config';
import { useLoanApplication } from '@/contexts/LoanAppContext';
import { onInputChangeEvent } from '@/types/ts-utils';

export const ParametersForm = () => {
  const { loan, setLoan, calculateLoanParams } = useLoanApplication();
  const { register, watch, setValue } = useForm<{
    amount: string | number;
    period: string | number;
  }>({
    defaultValues: { amount: loan.amount, period: loan.period },
  });
  const [isDragging, setIsDragging] = useState(false);

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

  const handleAmountChange = (e: onInputChangeEvent) => {
    if (e.target.value === '') return;
    setValue('amount', parseFloat(e.target.value));
  };

  const handlePeriodChange = (e: onInputChangeEvent) => {
    if (e.target.value === '') return;
    setValue('period', parseFloat(e.target.value));
  };

  const handleInputChange = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
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
  }, [isDragging, setLoan, watch]);

  useEffect(() => {
    if (!isDragging) {
      calculateLoanParams();
    }
  }, [calculateLoanParams, isDragging]);

  return (
    <form>
      <div className="p-5">
        <ParamsInput>
          <Range
            {...register('amount')}
            onInput={handleInputChange}
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
            label={amountLabel}
          />
        </ParamsInput>
        <ParamsInput>
          <Range
            {...register('period')}
            onInput={handleInputChange}
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
            label={periodLabel}
          />
        </ParamsInput>
      </div>
    </form>
  );
};
