import LoanTerms from '../../molecules/LoanTerms/LoanTerms';
import { useLoanApplication } from '@/contexts/LoanAppContext';
import { ParametersForm } from './components/ParametersForm';

export const LoanParams = () => {
  const { loan } = useLoanApplication();

  return (
    <div className="bg-white rounded min-h-[60vh] min-w-[70vw] px-10">
      <LoanTerms loan={loan} />
      <ParametersForm />
      {/* <Button path="/clientinfo" nextPage="Client information" /> */}
    </div>
  );
};
