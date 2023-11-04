import { FC } from 'react';
import { LoanTerms } from './components/LoanTerms';
import { useLoanApplication } from '@/contexts/LoanAppContext';
import { ParametersForm } from './components/ParametersForm';
import { Button } from '@/components/atoms/Button';
import { Section } from '@/components/atoms/Section';
import { BackButton } from '@/components/atoms/BackButton';
import { StepProps } from '@/components/pages/LoanApplication/LaonAppStepRenderer';

export const LoanParams: FC<StepProps> = ({ key }) => {
  const { loan, setNextStep, setPrevStep } = useLoanApplication();

  return (
    <Section key={key}>
      <BackButton onClick={setPrevStep} />
      <h2 className="py-5 text-xl text-center text-gray-100">
        Your Loan Terms
      </h2>
      <LoanTerms loan={loan} />
      <ParametersForm />
      <div className="flex justify-center">
        <Button onClick={setNextStep} color="yippie" size="large">
          Next
        </Button>
      </div>
    </Section>
  );
};
