import { FC } from 'react';
import { TermItem } from '@/components/atoms/TermItem';
import { LoanTermsProps } from './LoanTerms.types';

export const LoanTerms: FC<LoanTermsProps> = ({ loan }) => (
  <div className="mb-3">
    <h2 className="font-bold mx-4"> Your Loan Terms</h2>
    <hr className="mx-4 text-gray" />
    <div className="p-4">
      <ul className="grid gap-6 grid-cols-[1fr_minmax(0,_1fr)_1fr] grid-flow-col grid-rows-3 ">
        <TermItem value={loan.amount} description="Amount" smallValue="PLN" />
        <TermItem
          value={loan.period}
          description="Period"
          smallValue="months"
        />
        <TermItem
          value={loan.interestRate}
          description="Interest Rate"
          smallValue="%"
        />
        <TermItem
          value={loan.interest}
          description="Interest"
          smallValue="PLN"
        />
        <TermItem
          value={loan.installment}
          description="Installment"
          smallValue="PLN"
        />
        <TermItem
          value={loan.apr}
          description="Annual Percantage Rate"
          smallValue="%"
        />
        <TermItem
          value={loan.totalPayOff}
          description="Total Pay Off Amount"
          smallValue="PLN"
        />
      </ul>
    </div>
  </div>
);
