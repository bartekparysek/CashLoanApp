import { LoanApplicationProvider } from '@/contexts/LoanAppContext';
import { LoanAppStepRenderer } from './LaonAppStepRenderer/LoanAppStepRenderer';

export const LoanApplication = () => (
  <LoanApplicationProvider>
    <LoanAppStepRenderer />
  </LoanApplicationProvider>
);
