import { Keys } from '@/types/ts-utils';

export const TailwindSizes = {
  xs: '375px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

/**
 *
 * @param sizes
 * @returns string '(max-width: 768px) 100vw, 33vw'
 * @example getSizes({ default: '33vw', md: '100vw' }
 */
export function getSizes(
  sizes: { [key in Keys<typeof TailwindSizes>]?: string } & { default: string }
) {
  const mapToString = [];

  if (TailwindSizes) {
    // eslint-disable-next-line array-callback-return
    Object.keys(TailwindSizes).map((key) => {
      const size = key as keyof typeof TailwindSizes;
      if (sizes[size]) {
        mapToString.push(
          `(max-width: ${TailwindSizes![size]}px) ${sizes[size]}`
        );
      }
    });
  }

  mapToString.push(sizes.default);

  return mapToString.join(', ');
}
