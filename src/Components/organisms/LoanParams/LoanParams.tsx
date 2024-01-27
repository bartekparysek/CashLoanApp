import { useAtom, useSetAtom } from 'jotai';
import { LoanTerms } from './components/LoanTerms';
import { useLoanApplication } from '@/contexts/LoanAppContext';
import {
  ParametersForm,
  loanAmountAtom,
  loanPeriodAtom,
} from './components/ParametersForm';
import { Button } from '@/components/atoms/Button';
import { Section } from '@/components/atoms/Section';
import { BackButton } from '@/components/atoms/BackButton';
import { loanDerived } from '@/store/loan';
import { nextStepAtom, prevStepAtom } from '@/store/loanStep';

export const LoanParams = () => {
  const [loan] = useAtom(loanDerived);
  const [loanAmount] = useAtom(loanAmountAtom);
  const [periodAmount] = useAtom(loanPeriodAtom);
  const setNextAtom = useSetAtom(nextStepAtom);
  const setPrevAtom = useSetAtom(prevStepAtom);

  return (
    <Section>
      <BackButton onClick={setPrevAtom} />
      <h2 className="py-5 text-xl text-center text-gray-100">
        Your Loan Terms
      </h2>
      <LoanTerms
        loan={{
          ...loan,
          period: periodAmount,
          amount: loanAmount,
        }}
      />
      <ParametersForm />
      <div className="flex justify-center">
        <Button onClick={setNextAtom} color="yippie" size="large">
          Next
        </Button>
      </div>
    </Section>
  );
};
