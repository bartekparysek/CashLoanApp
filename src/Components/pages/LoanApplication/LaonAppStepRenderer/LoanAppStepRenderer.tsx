import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoanParams } from '@/components/organisms/LoanParams';
import { ClientInfo } from '@/components/organisms/ClientInfo';
import { FinishApplication } from '@/components/organisms/FinishApplication';
import { Summary } from '@/components/organisms/Summary';
import { useAtom } from 'jotai';
import { step } from '@/store/loanStep';

export function LoanAppStepRenderer() {
  const [value] = useAtom(step);

  if (!value) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {(() => {
        switch (value) {
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
    </AnimatePresence>
  );
}
