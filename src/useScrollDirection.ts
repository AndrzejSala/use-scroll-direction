import { useState, useRef, useEffect, RefObject } from 'react';
import throttle from 'lodash.throttle';

export type ScrollDirection = 'UP' | 'DOWN' | 'NONE';

type OptionsType = Readonly<{
  wait?: number;
  ref?: RefObject<HTMLElement | null> | null;
}>;

export const useScrollDirection = (options?: OptionsType) => {
  const wait = options?.wait || 50;
  const ref = options?.ref || null;

  const lastYPosition = useRef(0);
  const [direction, setDirection] = useState<ScrollDirection>('NONE');

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

  return direction;
};
