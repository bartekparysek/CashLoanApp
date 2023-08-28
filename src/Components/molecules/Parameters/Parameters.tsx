import { ParamsInput } from '../../atoms/ParamsInput';
import { Range } from '../../atoms/Range';
import { ValueInput } from '../../atoms/ValueInput';
import { loanParams } from '@/contexts/LoanAppContext';
import { onInputChangeEvent } from '@/types/ts-utils';

interface ParemetersProps {
  handleAmountChange: (event: onInputChangeEvent) => void;
  handlePeriodChange: (event: onInputChangeEvent) => void;
  calculateLoanParams: () => void;
  loan: loanParams;
}

const Parameters = ({
  handleAmountChange,
  handlePeriodChange,
  calculateLoanParams,
  loan,
}: ParemetersProps): JSX.Element => {
  const amountMinMax = { min: '1000', max: '108000' };
  const periodMinMax = { min: '6', max: '120' };
  const amountPlaceholder = 'Amount between 1000 PLN and 108 000 PLN';
  const periodPlaceholder = 'Period between 6 and 120 months';
  const amountStep = '100';
  const periodStep = '1';
  const amountLabel = 'Amount';
  const periodLabel = 'Period';
  return (
    <div className="p-5">
      <ParamsInput>
        <Range
          onChange={handleAmountChange}
          calculateLoanParams={calculateLoanParams}
          value={loan.amount}
          placeholder={amountPlaceholder}
          minMax={amountMinMax}
          step={amountStep}
        />
        <ValueInput
          onChange={handleAmountChange}
          calculateLoanParams={calculateLoanParams}
          value={loan.amount}
          placeholder={amountPlaceholder}
          minMax={amountMinMax}
          step={amountStep}
          label={amountLabel}
        />
      </ParamsInput>
      <ParamsInput>
        <Range
          onChange={handlePeriodChange}
          calculateLoanParams={calculateLoanParams}
          value={loan.period}
          placeholder={periodPlaceholder}
          minMax={periodMinMax}
          step={periodStep}
        />
        <ValueInput
          onChange={handlePeriodChange}
          calculateLoanParams={calculateLoanParams}
          value={loan.period}
          placeholder={periodPlaceholder}
          minMax={periodMinMax}
          step={periodStep}
          label={periodLabel}
        />
      </ParamsInput>
    </div>
  );
};

export default Parameters;
