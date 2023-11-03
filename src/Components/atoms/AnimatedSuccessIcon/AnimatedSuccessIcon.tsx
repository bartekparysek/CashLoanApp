import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSuccessIconProps } from './AnimatedSuccessIcon.types';

export const AnimatedSuccessIcon: FC<AnimatedSuccessIconProps> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <motion.circle
      cx="12"
      cy="12"
      r="11.5"
      fill="none"
      transform="rotate(-90, 12,12)"
      initial={{ pathLength: 0, opacity: 0, stroke: '#F8F8A0' }}
      animate={{
        pathLength: 1.1,
        opacity: 1,
        stroke: '#5FD157',
        transition: {
          pathLength: {
            delay: 0.5,
            type: 'spring',
            duration: 1.5,
            bounce: 0,
          },
          opacity: { delay: 0.5, duration: 0.01 },
          stroke: {
            delay: 0.8,
            duration: 1.5,
          },
        },
      }}
    />

    <motion.path
      d="M2 5 4.8646 8 12 2"
      transform="translate(5,7)"
      fill="transparent"
      initial={{ pathLength: 0, stroke: '#F8F8A0' }}
      animate={{
        pathLength: 1,
        stroke: '#5FD157',
        transition: { duration: 1, delay: 0.8 },
      }}
    />
  </svg>
);
