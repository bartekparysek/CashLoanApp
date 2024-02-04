import { BackButton } from '@/components/atoms/BackButton';
import React, { FC } from 'react';
import { SectionHeaderProps } from './SectionHeader.types';
import { useSetAtom } from 'jotai';
import { prevStepAtom } from '@/store/loanStep';

export const SectionHeader: FC<SectionHeaderProps> = ({ title }) => {
  const setPrevAtom = useSetAtom(prevStepAtom);
  return (
    <div className="flex items-center justify-between mb-5">
      <BackButton onClick={setPrevAtom} />
      <h2 className="py-5 ml-2 lg:text-xl text-center font-playfair absolute -translate-x-1/2 left-1/2 text-gray-100">
        {title}
      </h2>
    </div>
  );
};
