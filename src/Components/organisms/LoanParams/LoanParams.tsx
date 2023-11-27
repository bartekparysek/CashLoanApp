import { LoanTerms } from './components/LoanTerms';
import { useLoanApplication } from '@/contexts/LoanAppContext';
import { ParametersForm } from './components/ParametersForm';
import { Button } from '@/components/atoms/Button';
import { Section } from '@/components/atoms/Section';
import { BackButton } from '@/components/atoms/BackButton';

export const LoanParams = () => {
  const { loan, setNextStep, setPrevStep } = useLoanApplication();

  return (
    <Section>
      <BackButton onClick={setPrevStep} />
      <h2 className="py-5 text-xl text-center text-gray-100">
        Your Loan Terms
      </h2>
      <LoanTerms loan={loan} />
      <ParametersForm />
      <div className="flex justify-center">
        <Button onClick={setNextStep} color="green" size="large">
          Next
        </Button>
      </div>
    </Section>
  );
};
