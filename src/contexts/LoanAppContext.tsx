import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

import type React from 'react';
import { debounce } from 'lodash';
import { useRouter } from 'next/router';
import { NullNumberUnion } from '@/types/ts-utils';
import { routes } from '@/routes';

export type LoanParams = {
  amount: number;
  period: number;
  installment: NullNumberUnion;
  interestRate: number;
  interest: NullNumberUnion;
  apr: NullNumberUnion;
  totalPayOff: NullNumberUnion;
};

export type ClientInfo = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
};

const LoanDefaultValues = {
  amount: 1000,
  period: 6,
  installment: null,
  interestRate: 7.2,
  interest: null,
  apr: null,
  totalPayOff: null,
};

const ClientInfoDefaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
};

export type LoanContextValues = {
  loan: LoanParams;
  clientInfo: ClientInfo;
  step: number;
  setLoan: Dispatch<SetStateAction<LoanParams>>;
  setClientInfo: Dispatch<SetStateAction<ClientInfo>>;
  calculateLoanParams: () => void;
  setNextStep: () => void;
  setPrevStep: () => void;
};

export const LoanAppContext = createContext<LoanContextValues>({
  loan: LoanDefaultValues,
  clientInfo: ClientInfoDefaultValues,
  step: 1,
  setLoan: () => {},
  setClientInfo: () => {},
  calculateLoanParams: () => {},
  setNextStep: () => {},
  setPrevStep: () => {},
});

export const LoanApplicationProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [loan, setLoan] = useState<LoanParams>(LoanDefaultValues);
  const [clientInfo, setClientInfo] = useState<ClientInfo>(
    ClientInfoDefaultValues
  );
  const [step, setStep] = useState<number>(1);
  const router = useRouter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculateLoanParams = useCallback(
    debounce(() => {
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

      setLoan((prev) => ({
        ...prev,
        interest: totalInterest,
        totalPayOff,
        installment,
        apr,
      }));
    }, 800),
    [loan]
  );

  const setNextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const setPrevStep = useCallback(() => {
    if (step === 1) {
      void router.push(routes.home());
    } else {
      setStep((prev) => prev - 1);
    }
  }, [step]);

  const value: LoanContextValues = useMemo(
    () => ({
      loan,
      clientInfo,
      step,
      setClientInfo,
      setLoan,
      calculateLoanParams,
      setNextStep,
      setPrevStep,
    }),
    [calculateLoanParams, clientInfo, loan, setNextStep, setPrevStep, step]
  );

  useEffect(() => {
    calculateLoanParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LoanAppContext.Provider value={value}>{children}</LoanAppContext.Provider>
  );
};

export const useLoanApplication = () => {
  const context = useContext(LoanAppContext);
  if (context === undefined) {
    throw new Error(
      'useLoanApplication must be used within a LoanParamsProvider'
    );
  }
  return context;
};
