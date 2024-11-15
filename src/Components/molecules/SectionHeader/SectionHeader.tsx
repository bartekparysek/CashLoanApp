import { BackButton } from "@/components/atoms/BackButton";
import React, { FC } from "react";
import { SectionHeaderProps } from "./SectionHeader.types";
import { useSetAtom } from "jotai";
import { prevStepAtom } from "@/stores/loanStep";

export const SectionHeader: FC<SectionHeaderProps> = ({ title }) => {
  const setPrevAtom = useSetAtom(prevStepAtom);
  return (
    <div className="mb-5 flex items-center justify-between">
      <BackButton onClick={setPrevAtom} />
      <h2 className="absolute left-1/2 ml-2 -translate-x-1/2 py-5 text-center font-playfair text-gray-100 lg:text-xl">{title}</h2>
    </div>
  );
};
