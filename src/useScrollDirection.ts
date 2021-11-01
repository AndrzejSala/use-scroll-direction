import { useState, useRef, useEffect, useCallback, RefObject } from 'react';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';

export type ScrollDirectionType = 'UP' | 'DOWN' | 'NONE';

type OptionsType = Readonly<{
  wait?: number;
  timeToReset?: number;
  ref?: RefObject<HTMLElement | null> | null;
}>;

export function getScrollDirectionBooleans(
  scrollDirection: ScrollDirectionType
) {
  return {
    isScrolling: scrollDirection !== 'NONE',
    isScrollingUp: scrollDirection === 'UP',
    isScrollingDown: scrollDirection === 'DOWN',
    scrollDirection,
  };
}

export const useScrollDirection = (options?: OptionsType) => {
  const wait = options?.wait || 50;
  const timeToReset = options?.timeToReset || 250;
  const ref = options?.ref || null;

  const lastYPosition = useRef(0);
  const [direction, setDirection] = useState<ScrollDirectionType>('NONE');

  const debouncedResetDirection = useCallback(
    debounce(() => {
      setDirection('NONE');
    }, timeToReset),
    []
  );

  function handleScroll() {
    let currentYPosition = window.pageYOffset;

    // Handle ref case
    if (ref?.current && ref.current.children.length === 1) {
      const { y: refY } = ref.current.children[0].getBoundingClientRect();

      currentYPosition = Math.abs(refY);
    }

    if (currentYPosition === lastYPosition.current) {
      return 'NONE';
    }

    const newDirection =
      lastYPosition.current < currentYPosition ? 'DOWN' : 'UP';

    if (newDirection !== direction) {
      setDirection(newDirection);
    }

    lastYPosition.current = currentYPosition;

    if (direction !== 'NONE') {
      debouncedResetDirection();
    }

    return undefined;
  }

  const handleScrollThrottled = throttle(handleScroll, wait, {
    trailing: false,
  });

  useEffect(() => {
    const scrollContext = ref?.current || window;
    scrollContext.addEventListener('scroll', handleScrollThrottled);
    return () =>
      scrollContext.removeEventListener('scroll', handleScrollThrottled);
  });

  return getScrollDirectionBooleans(direction);
};
