import { atom } from 'jotai';
import { NullNumberUnion } from '@/types/ts-utils';
import {
  loanAmountAtom,
  loanPeriodAtom,
} from '@/components/organisms/LoanParams/components/ParametersForm';

const LoanDefaultValues: LoanParams = {
  installment: null,
  interestRate: 7.2,
  interest: null,
  apr: null,
  totalPayOff: null,
};

export type LoanParams = {
  installment: NullNumberUnion;
  interestRate: number;
  interest: NullNumberUnion;
  apr: NullNumberUnion;
  totalPayOff: NullNumberUnion;
};

export const loanAtom = atom((get) => {
  const amount = get(loanAmountAtom);
  const period = get(loanPeriodAtom);

  const loanPeriodDays = Math.round(period * 30.41666);
  const interest = parseFloat(
    (
      ((amount *
        parseFloat((LoanDefaultValues.interestRate / 100).toFixed(3))) /
        365) *
      loanPeriodDays
    ).toFixed(2)
  );
  const totalPayOff = parseFloat((amount + interest).toFixed(2));
  const installment = parseFloat((totalPayOff / period).toFixed(2));
  const apr = parseFloat(
    (((totalPayOff / amount) ** (365 / loanPeriodDays) - 1) * 100).toFixed(2)
  );

  return {
    ...LoanDefaultValues,
    interest,
    installment,
    apr,
    totalPayOff,
  };
});
