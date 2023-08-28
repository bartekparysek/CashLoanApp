import { PropsWithChildren, createContext, useContext, useState } from 'react';

import type React from 'react';
import { nullNumberUnion } from '@/types/ts-utils';

export type loanParams = {
  amount: number;
  period: number;
  installment: nullNumberUnion;
  interestRate: number;
  interest: nullNumberUnion;
  apr: nullNumberUnion;
  totalPayOff: nullNumberUnion;
};

export type clientInfo = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
};

export const LoanAppContext = createContext<
  | {
      loan: loanParams;
      setLoan: React.Dispatch<React.SetStateAction<loanParams>>;
      clientInfo: clientInfo;
      setClientInfo: React.Dispatch<React.SetStateAction<clientInfo>>;
    }
  | undefined
>(undefined);

export const LoanAppContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [loan, setLoan] = useState<loanParams>({
    amount: 1000,
    period: 6,
    installment: null,
    interestRate: 7.2,
    interest: null,
    apr: null,
    totalPayOff: null,
  });
  const [clientInfo, setClientInfo] = useState<clientInfo>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  });
  const value = { loan, setLoan, clientInfo, setClientInfo };
  return (
    <LoanAppContext.Provider value={value}>{children}</LoanAppContext.Provider>
  );
};

export const useInfo = () => {
  const context = useContext(LoanAppContext);
  if (context === undefined) {
    throw new Error('useLoan muse be used within a LoanParamsProvider');
  }
  return context;
};
