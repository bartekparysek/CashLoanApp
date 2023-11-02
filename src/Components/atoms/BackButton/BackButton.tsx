import React, { FC } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { BackButtonProps } from './BackButton.types';
import { Button } from '../Button';

export const BackButton: FC<BackButtonProps> = ({ onClick }) => (
  <Button color="pinball" onClick={onClick} className="px-3 justify-self-start">
    <FiChevronLeft className="ml-[-2px] w-5 h-5" />
  </Button>
);
