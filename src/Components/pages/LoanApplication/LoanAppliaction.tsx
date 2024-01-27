import { LoanAppStepRenderer } from './LaonAppStepRenderer/LoanAppStepRenderer';
import { Provider } from 'jotai';

export const LoanApplication = () => (
  <Provider>
    <LoanAppStepRenderer />
  </Provider>
);
