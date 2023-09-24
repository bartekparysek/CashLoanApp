import { LoanApplicationProvider } from '@/contexts/LoanAppContext';
import { LoanParams } from '@/components/organisms/LoanParams';

export const LoanApplication = () => {
  return (
    <LoanApplicationProvider>
      <LoanParams />
    </LoanApplicationProvider>
  );
};
