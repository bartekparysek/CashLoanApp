import React, { FC } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { BackButtonProps } from './BackButton.types';
import { Button } from '../Button';
import { cn } from '@/helpers/cn';

export const BackButton: FC<BackButtonProps> = ({ onClick, className }) => (
  <Button
    color="iron"
    onClick={onClick}
    className={cn(
      'p-2.5 justify-self-start flex text-xs text-neutral-600',
      className
    )}
  >
    <FiChevronLeft className="ml-[-2px] w-5 h-5 mr-1" /> Back
  </Button>
);
