import { useState, useEffect, useRef } from 'react';
import throttle from 'lodash.throttle';
import { getScrollDirectionBooleans } from './utils/getScrollDirectionBooleans';
import {
  initializeResetDirectionTimeout,
  handleResetDirectionTimeout,
} from './utils/resetDirection';
import { OptionsType, ScrollDirectionType } from './types';

export const useScrollDirection = (options?: OptionsType) => {
  const wait = options?.wait || 50;
  const timeToReset = options?.timeToReset || 150;
  const ref = options?.ref || null;

  const lastYPosition = useRef<number | null>(null);
  const [direction, setDirection] = useState<ScrollDirectionType>('NONE');

  const handleResetDirection = () => {
    lastYPosition.current = null;

    setDirection('NONE');
  };

  const handleWindowScroll = () => {
    handleResetDirectionTimeout(timeToReset, handleResetDirection);

    const currentYPosition = Math.round(window.pageYOffset);

    // Skip first iteration
    if (lastYPosition.current === null) {
      lastYPosition.current = currentYPosition;

      return;
    }

    // Set NONE for the same position
    if (currentYPosition === lastYPosition.current) {
      setDirection('NONE');

      return;
    }

    const newDirection =
      lastYPosition.current < currentYPosition ? 'DOWN' : 'UP';

    // If direction has changed, return it
    if (newDirection !== direction) {
      setDirection(newDirection);
    }

    // Reassign lastYPosition
    lastYPosition.current = currentYPosition;

    return;
  };

  const handleWindowScrollThrottled = throttle(handleWindowScroll, wait, {
    trailing: false,
  });

  const handleRefScroll = () => {
    handleResetDirectionTimeout(timeToReset, handleResetDirection);

    const childRect = ref?.current?.children?.[0].getBoundingClientRect();

    if (childRect) {
      const currentYPosition = Math.round(childRect.y);

      // Skip first iteration
      if (lastYPosition.current === null) {
        lastYPosition.current = currentYPosition;

        return;
      }

      // Set NONE for the same position
      if (currentYPosition === lastYPosition.current) {
        setDirection('NONE');

        return;
      }

      const newDirection =
        lastYPosition.current > currentYPosition ? 'DOWN' : 'UP';

      // If direction has changed, return it
      if (newDirection !== direction) {
        setDirection(newDirection);
      }

      // Reassign lastYPosition
      lastYPosition.current = currentYPosition;

      return;
    }
  };

  const handleRefScrollThrottled = throttle(handleRefScroll, wait, {
    trailing: false,
  });

  useEffect(() => {
    initializeResetDirectionTimeout();
    const element = ref?.current;

    if (element) {
      element.addEventListener('scroll', handleRefScrollThrottled);
      return () =>
        element.removeEventListener('scroll', handleRefScrollThrottled);
    } else {
      window.addEventListener('scroll', handleWindowScrollThrottled);
      return () =>
        window.removeEventListener('scroll', handleWindowScrollThrottled);
    }
  }, []);

  return getScrollDirectionBooleans(direction);
};
