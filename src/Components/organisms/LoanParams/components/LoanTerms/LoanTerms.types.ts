import { LoanParams } from '@/store/loan';

export type LoanTermsProps = {
  loan: { amount: number; period: number } & LoanParams;
};
