import React, { FC, PropsWithChildren } from 'react';
import { SectionProps } from './Section.types';
import { cn } from '@/helpers/cn';

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  className,
  children,
}) => (
  <section
    className={cn(
      'bg-white rounded min-h-[50vh] w-full p-5 sm:p-10 border border-solid border-gray-400',
      className
    )}
  >
    {children}
  </section>
);
