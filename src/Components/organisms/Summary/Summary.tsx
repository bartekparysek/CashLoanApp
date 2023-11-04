import { FC } from 'react';
import { Button } from '@/components/atoms/Button';
import { Section } from '@/components/atoms/Section';
import { ValuesList } from '@/components/atoms/ValuesList';
import { useLoanApplication } from '@/contexts/LoanAppContext';
import { BackButton } from '@/components/atoms/BackButton';
import { StepProps } from '@/components/pages/LoanApplication/LaonAppStepRenderer';

export const Summary: FC<StepProps> = ({ key }) => {
  const { loan, clientInfo, setNextStep, setPrevStep } = useLoanApplication();

  const mappedLoanSummary = Object.keys(loan).map((val) => {
    const name = () => {
      if (val === 'interestRate') return 'interest rate';
      if (val === 'totalPayOff') return 'total pay off amount';
      return val;
    };
    return {
      name: name(),
      value: loan[val as keyof typeof loan] as number,
    };
  });

  const mappedClientInfoSummary = Object.keys(clientInfo).map((name) => ({
    name,
    value: clientInfo[name as keyof typeof clientInfo],
  }));

  return (
    <Section key={key}>
      <BackButton onClick={setPrevStep} />
      <h2 className="text-center text-xl mb-5">Summary</h2>
      <div className="flex flex-col lg:flex-row gap-5 mb-5">
        <ValuesList values={mappedLoanSummary} />
        <ValuesList values={mappedClientInfoSummary} />
      </div>
      <Button color="yippie" className="mx-auto" onClick={setNextStep}>
        Finish Application
      </Button>
    </Section>
  );
};
