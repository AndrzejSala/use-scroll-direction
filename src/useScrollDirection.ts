import { useState, useEffect, useRef } from 'react';
import throttle from 'lodash.throttle';
import {
  initializeResetDirection,
  handleResetDirection,
  getDirectionBooleans,
  computeDirection,
} from './utils';
import { OptionsType, ScrollDirectionType } from './types';

export const useScrollDirection = (options?: OptionsType) => {
  const wait = options?.wait || 50;
  const timeToReset = options?.timeToReset || 150;
  const ref = options?.ref || null;
  const lastY = useRef<number | null>(null);
  const lastX = useRef<number | null>(null);
  const [direction, setDirection] = useState<ScrollDirectionType>('NONE');

  const handleReset = () => {
    lastY.current = null;
    lastX.current = null;

    setDirection('NONE');
  };

  const handleWindowScroll = () => {
    const currentY = Math.round(window.pageYOffset);
    const currentX = Math.round(window.pageXOffset);

    // Skip first iteration
    if (lastY.current === null || lastX.current === null) {
      lastY.current = currentY;
      lastX.current = currentX;

      return;
    }

    const newDirection = computeDirection({
      isRef: false,
      currentY,
      currentX,
      lastY: lastY.current,
      lastX: lastX.current,
    });
    setDirection(newDirection);

    // Reassign lastPosition
    lastY.current = currentY;
    lastX.current = currentX;

    return;
  };

  const handleRefScroll = () => {
    const childRect = ref?.current?.children?.[0].getBoundingClientRect();

    if (childRect) {
      const currentY = Math.round(childRect.y);
      const currentX = Math.round(childRect.x);

      // Skip first iteration
      if (lastY.current === null || lastX.current === null) {
        lastY.current = currentY;
        lastX.current = currentX;

        return;
      }

      const newDirection = computeDirection({
        isRef: true,
        currentY,
        currentX,
        lastY: lastY.current,
        lastX: lastX.current,
      });
      setDirection(newDirection);

      // Reassign lastY
      lastY.current = currentY;
      lastX.current = currentX;

      return;
    }
  };

  const handleScroll = throttle(
    () => {
      handleResetDirection(timeToReset, handleReset);

      if (ref) {
        return handleRefScroll();
      }

      return handleWindowScroll();
    },
    wait,
    {
      trailing: false,
    }
  );

  useEffect(() => {
    initializeResetDirection();
    const scrollContext = ref?.current || window;

    scrollContext.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollContext.removeEventListener('scroll', handleScroll);
  }, []);

  return getDirectionBooleans(direction);
};
