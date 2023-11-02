import { Button } from '@/components/atoms/Button';
import { Section } from '@/components/atoms/Section';
import { ValuesList } from '@/components/atoms/ValuesList';
import { useLoanApplication } from '@/contexts/LoanAppContext';
import { BackButton } from '@/components/atoms/BackButton';

export const Summary = () => {
  const { loan, clientInfo, setNextStep, setPrevStep } = useLoanApplication();

  const mappedLoanSummary = Object.keys(loan).map((key) => {
    const name = () => {
      if (key === 'interestRate') return 'interest rate';
      if (key === 'totalPayOff') return 'total pay off amount';
      return key;
    };
    return {
      name: name(),
      value: loan[key as keyof typeof loan] as number,
    };
  });

  const mappedClientInfoSummary = Object.keys(clientInfo).map((key) => ({
    name: key,
    value: clientInfo[key as keyof typeof clientInfo],
  }));

  return (
    <Section>
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
