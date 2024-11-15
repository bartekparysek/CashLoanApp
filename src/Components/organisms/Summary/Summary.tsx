import { Button } from "@/components/atoms/Button";
import { Section } from "@/components/atoms/Section";
import { ValuesList } from "@/components/atoms/ValuesList";
import { useSetAtom, useAtomValue } from "jotai";
import { nextStepAtom } from "@/stores/loanStep";
import { loanAtom } from "@/stores/loan";
import { clientInfoAtom } from "@/stores/clientInfo";
import { SectionHeader } from "@/components/molecules/SectionHeader";

export const Summary = () => {
  const loan = useAtomValue(loanAtom);
  const clientInfo = useAtomValue(clientInfoAtom);
  const setNextAtom = useSetAtom(nextStepAtom);

  const mappedLoanSummary = Object.keys(loan).map((val) => {
    const name = () => {
      if (val === "interestRate") return "interest rate";
      if (val === "totalPayOff") return "total pay off amount";
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
      <SectionHeader title="Summary" />
      <div className="mb-5 flex w-full justify-center">
        <div className="flex w-full flex-col gap-5 lg:flex-row 2xl:max-w-[60vw]">
          <ValuesList values={mappedLoanSummary} />
          <ValuesList values={mappedClientInfoSummary} />
        </div>
      </div>
      <Button
        color="yippie"
        className="mx-auto"
        type="button"
        onClick={setNextAtom}
      >
        Finish Application
      </Button>
    </Section>
  );
};
