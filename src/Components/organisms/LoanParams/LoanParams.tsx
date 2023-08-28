import React, { useEffect } from 'react';

import LoanTerms from '../../molecules/LoanTerms/LoanTerms';
import NavButton from '../../atoms/NavButton';
import Parameters from '../../molecules/Parameters/Parameters';
import { onInputChangeEvent } from '@/types/ts-utils';
import { useInfo } from '@/contexts/LoanAppContext';

export const LoanParams = () => {
  const { loan, setLoan } = useInfo();
  useEffect(() => {
    calculateLoanParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculateLoanParams = () => {
    const loanPeriodDays = Math.round(loan.period * 30.41666);
    const totalInterest = parseFloat(
      (
        ((loan.amount * parseFloat((loan.interestRate / 100).toFixed(3))) /
          365) *
        loanPeriodDays
      ).toFixed(2)
    );
    const totalPayOff = parseFloat((loan.amount + totalInterest).toFixed(2));
    const installment = parseFloat((totalPayOff / loan.period).toFixed(2));
    const apr = parseFloat(
      (
        ((totalPayOff / loan.amount) ** (365 / loanPeriodDays) - 1) *
        100
      ).toFixed(2)
    );

    setLoan({
      ...loan,
      interest: totalInterest,
      totalPayOff,
      installment,
      apr,
    });
  };

  const handleAmountChange = (event: onInputChangeEvent) => {
    setLoan({
      ...loan,
      amount: parseInt(event.target.value),
    });
  };

  const handlePeriodChange = (event: onInputChangeEvent) => {
    setLoan({
      ...loan,
      period: parseInt(event.target.value),
    });
  };

  return (
    <div className="bg-white rounded min-h-[60vh] min-w-[70vw] px-10">
      <form>
        <Parameters
          handleAmountChange={handleAmountChange}
          handlePeriodChange={handlePeriodChange}
          calculateLoanParams={calculateLoanParams}
          loan={loan}
        />
      </form>
      <LoanTerms loan={loan} />
      <NavButton path="/clientinfo" nextPage="Client information" />
    </div>
  );
};
