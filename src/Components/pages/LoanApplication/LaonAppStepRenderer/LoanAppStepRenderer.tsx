import React from 'react';
import { useLoanApplication } from '@/contexts/LoanAppContext';
import { LoanParams } from '@/components/organisms/LoanParams';
import { ClientInfo } from '@/components/organisms/ClientInfo';
import FinishApplication from '@/components/organisms/FinishApplication/FinishApplication';
import { Summary } from '@/components/organisms/Summary';

export const LoanAppStepRenderer = () => {
  const { step } = useLoanApplication();
  return (
    <>
      {(() => {
        switch (step) {
          case 1:
            return <LoanParams />;
          case 2:
            return <ClientInfo />;
          case 3:
            return <Summary />;
          case 4:
            return <FinishApplication />;
          default:
            return null;
        }
      })()}
    </>
  );
};
