import { DependencyList, useMemo } from 'react';
import debounce from 'lodash/debounce';
import type { DebounceSettings, DebouncedFunc } from 'lodash';

export function useDebounce<T extends (...args: any) => any>(
  func: T,
  wait: number,
  deps: DependencyList,
  opts?: DebounceSettings
): DebouncedFunc<T> {
  return useMemo(() => debounce(func, wait, opts), deps);
}

export function useLeadingDebounce<T extends (...args: any) => any>(
  func: T,
  wait: number,
  deps: DependencyList
): DebouncedFunc<T> {
  return useDebounce(func, wait, deps, {
    leading: true,
    trailing: false,
  });
}
