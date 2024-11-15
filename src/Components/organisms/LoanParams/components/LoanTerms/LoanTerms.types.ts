import { LoanParams } from "@/stores/loan";

export type LoanTermsProps = {
  loan: { amount: number; period: number } & LoanParams;
};
