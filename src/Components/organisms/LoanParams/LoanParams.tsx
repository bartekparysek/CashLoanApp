import { useAtom, useSetAtom } from 'jotai';
import { LoanTerms } from './components/LoanTerms';
import {
  ParametersForm,
  loanAmountAtom,
  loanPeriodAtom,
} from './components/ParametersForm';
import { Button } from '@/components/atoms/Button';
import { Section } from '@/components/atoms/Section';
import { loanAtom } from '@/store/loan';
import { nextStepAtom } from '@/store/loanStep';
import { SectionHeader } from '@/components/molecules/SectionHeader';

export const LoanParams = () => {
  const [loan] = useAtom(loanAtom);
  const [loanAmount] = useAtom(loanAmountAtom);
  const [periodAmount] = useAtom(loanPeriodAtom);
  const setNextAtom = useSetAtom(nextStepAtom);

  return (
    <Section>
      <SectionHeader title="Your Loan Terms" />
      <ParametersForm />
      <LoanTerms
        loan={{
          ...loan,
          period: periodAmount,
          amount: loanAmount,
        }}
      />

      <div className="flex justify-center">
        <Button onClick={setNextAtom} color="yippie" size="large">
          Next
        </Button>
      </div>
    </Section>
  );
};
