import React, { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from './Section.types';
import { cn } from '@/helpers/cn';

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  className,
  children,
}) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
    className={cn(
      'bg-white rounded lg:min-h-[50vh] md:max-w-[75vw] 2xl:max-w-[60vw] w-full p-5 sm:p-10 border border-solid border-gray-400 mb-5',
      className
    )}
  >
    {children}
  </motion.section>
);
