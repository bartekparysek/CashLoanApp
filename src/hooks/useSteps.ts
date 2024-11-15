"use client";
import { useSearchParams } from "next/navigation";
export function useSteps() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(window.location.search);
  const step = searchParams.get("step");

  const handleNextStep = () => {
    const nextStep = step ? +step + 1 : 2;
    params.set("step", nextStep.toString());
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  const handlePrevStep = () => {
    const prevStep = step ? +step - 1 : 1;
    params.set("step", prevStep.toString());
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return {
    step: step ? +step : 1,
    nextStep: handleNextStep,
    prevStep: handlePrevStep,
  };
}
