import { useState, useEffect, useRef } from 'react';
import throttle from 'lodash.throttle';
import { ScrollDirectionType, FinalOptionsType } from './utils/types';
import {
  initializeResetDirectionTimeout,
  handleResetDirectionTimeout,
} from './utils/resetDirection';

export const useRefScrollDirection = ({
  wait,
  timeToReset,
  ref,
}: FinalOptionsType) => {
  const lastYPosition = useRef<number | null>(null);
  const [direction, setDirection] = useState<ScrollDirectionType>('NONE');

  const handleResetDirection = () => {
    lastYPosition.current = null;

    setDirection('NONE');
  };

  const handleScroll = () => {
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

  const handleScrollThrottled = throttle(handleScroll, wait, {
    trailing: false,
  });

  useEffect(() => {
    const element = ref?.current;

    if (element) {
      initializeResetDirectionTimeout();

      element.addEventListener('scroll', handleScrollThrottled);
      return () => element.removeEventListener('scroll', handleScrollThrottled);
    }

    return;
  }, []);

  return direction;
};
