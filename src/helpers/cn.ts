import { ClassValue, clsx } from 'clsx';

import { twMerge } from 'tailwind-merge';

/**
 * helper function to merge and override conflicting tailwind classes
 */
export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}
