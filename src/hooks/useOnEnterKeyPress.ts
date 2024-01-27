import { useEffect, useRef } from 'react';

export function useOnEnterKeyPress(
  condition: boolean,
  callback: () => void,
  options?: boolean | EventListenerOptions
) {
  const currentRefs = useRef({ callback });

  useEffect(() => {
    if (!condition) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.stopPropagation();

        currentRefs.current.callback();
      }
    };

    // Passing in true for the third parameter causes the event to be captured on the way down
    window.addEventListener('keydown', onKeyDown, options);
    return () => {
      window.removeEventListener('keydown', onKeyDown, options);
    };
  }, [currentRefs, condition, options]);
}
