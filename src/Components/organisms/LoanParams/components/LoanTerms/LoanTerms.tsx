import { FC } from 'react';
import { TermItem } from '@/components/atoms/TermItem';
import { LoanTermsProps } from './LoanTerms.types';

export const LoanTerms: FC<LoanTermsProps> = ({ loan }) => (
  <div className="mb-3 flex w-full">
    <ul className=" w-full grid grid-cols-2 auto-cols-auto justify-items-center justify-center lg:items-center gap-3 lg:grid-cols-[1fr_1fr_1fr] lg:grid-flow-col lg:grid-rows-2">
      <TermItem
        value={loan.installment}
        description="Installment"
        smallValue="PLN"
      />
      <TermItem
        value={loan.totalPayOff}
        description="Total Pay Off Amount"
        smallValue="PLN"
      />
      <TermItem value={loan.interest} description="Interest" smallValue="PLN" />
      <TermItem
        value={loan.apr}
        description="Annual Percantage Rate"
        smallValue="%"
      />
      <TermItem
        value={loan.interestRate}
        description="Interest Rate"
        smallValue="%"
        className="col-span-2 w-full lg:row-span-2 h-full "
      />
    </ul>
  </div>
);
