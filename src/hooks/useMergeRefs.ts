import { MutableRefObject, ForwardedRef, useCallback } from 'react';

export function useMergeRefs<T>(
  refs: Array<MutableRefObject<T> | ForwardedRef<T>>
) {
  return useCallback(
    (ref: T | null) => {
      refs.forEach((r) => {
        if (typeof r === 'function') {
          r(ref);
        } else if (r !== null) {
          // eslint-disable-next-line no-param-reassign
          r.current = ref;
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...refs]
  );
}
