import { useCallback, useEffect, useRef } from 'react';

export default function useDebounceCallback<A extends unknown[]>(callback: (...args: A) => void, delay: number) {
  const timeout = useRef<number>();

  const debouncedCallback = useCallback<(...args: A) => void>(
    (...args) => {
      clearTimeout(timeout.current);
      timeout.current = window.setTimeout(() => callback(...args), delay);
    },
    [callback, delay]
  );

  // cleanup
  useEffect(() => () => clearTimeout(timeout.current), [callback, delay]);

  return debouncedCallback;
}
