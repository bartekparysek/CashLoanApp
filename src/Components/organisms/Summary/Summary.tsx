import { Button } from '@/components/atoms/Button';
import { Section } from '@/components/atoms/Section';
import { ValuesList } from '@/components/atoms/ValuesList';
import { useLoanApplication } from '@/contexts/LoanAppContext';
import { BackButton } from '@/components/atoms/BackButton';

export const Summary = () => {
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
    <Section>
      <BackButton onClick={setPrevStep} />
      <h2 className="text-center text-xl mb-5">Summary</h2>
      <div className="flex mb-5 w-full justify-center">
        <div className="w-full flex flex-col lg:flex-row gap-5 2xl:max-w-[60vw]">
          <ValuesList values={mappedLoanSummary} />
          <ValuesList values={mappedClientInfoSummary} />
        </div>
      </div>
      <Button color="yippie" className="mx-auto" onClick={setNextStep}>
        Finish Application
      </Button>
    </Section>
  );
};
