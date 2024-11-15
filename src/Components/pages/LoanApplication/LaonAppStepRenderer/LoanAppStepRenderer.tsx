import React from "react";
import { AnimatePresence } from "framer-motion";
import { LoanParams } from "@/components/organisms/LoanParams";
import { ClientInfo } from "@/components/organisms/ClientInfo";
import { FinishApplication } from "@/components/organisms/FinishApplication";
import { Summary } from "@/components/organisms/Summary";
import { useSearchParams } from "next/navigation";

const Step = {
  1: <LoanParams />,
  2: <ClientInfo />,
  3: <Summary />,
  4: <FinishApplication />,
};

export function LoanAppStepRenderer() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  if (!step) return null;

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
    >
      {Step[+step as keyof typeof Step]}
    </AnimatePresence>
  );
}
