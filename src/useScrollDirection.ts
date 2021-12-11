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
  const throttleOptions = {
    trailing: false,
  };

  const lastYPosition = useRef<number | null>(null);
  const lastXPosition = useRef<number | null>(null);
  const [direction, setDirection] = useState<ScrollDirectionType>('NONE');

  const handleResetDirection = () => {
    lastYPosition.current = null;
    lastXPosition.current = null;

    setDirection('NONE');
  };

  const handleWindowScrollThrottled = throttle(
    () => {
      handleResetDirectionTimeout(timeToReset, handleResetDirection);

      const currentYPosition = Math.round(window.pageYOffset);
      const currentXPosition = Math.round(window.pageXOffset);

      // Skip first iteration
      if (lastYPosition.current === null || lastXPosition.current === null) {
        lastYPosition.current = currentYPosition;
        lastXPosition.current = currentXPosition;

        return;
      }

      const xNotChangedPosition = currentXPosition === lastXPosition.current;
      const yNotChangedPosition = currentYPosition === lastYPosition.current;
      const xyNotChangedPosition =
        currentYPosition === lastYPosition.current &&
        currentXPosition === lastXPosition.current;

      // Set NONE for the same position
      if (xyNotChangedPosition) {
        setDirection('NONE');

        return;
      }

      let newDirection: ScrollDirectionType = 'NONE';

      // Check the new direction
      if (xNotChangedPosition) {
        newDirection = lastYPosition.current < currentYPosition ? 'DOWN' : 'UP';
      } else if (yNotChangedPosition) {
        newDirection =
          lastXPosition.current < currentXPosition ? 'RIGHT' : 'LEFT';
      }

      // If direction has changed, return it
      if (newDirection !== direction) {
        setDirection(newDirection);
      }

      // Reassign lastPosition
      lastYPosition.current = currentYPosition;
      lastXPosition.current = currentXPosition;

      return;
    },
    wait,
    throttleOptions
  );

  const handleRefScroll = throttle(
    () => {
      handleResetDirectionTimeout(timeToReset, handleResetDirection);

      const childRect = ref?.current?.children?.[0].getBoundingClientRect();

      if (childRect) {
        const currentYPosition = Math.round(childRect.y);
        const currentXPosition = Math.round(childRect.x);

        // Skip first iteration
        if (lastYPosition.current === null || lastXPosition.current === null) {
          lastYPosition.current = currentYPosition;
          lastXPosition.current = currentXPosition;

          return;
        }

        const xNotChangedPosition = currentXPosition === lastXPosition.current;
        const yNotChangedPosition = currentYPosition === lastYPosition.current;
        const xyNotChangedPosition =
          currentYPosition === lastYPosition.current &&
          currentXPosition === lastXPosition.current;

        // Set NONE for the same position
        if (xyNotChangedPosition) {
          setDirection('NONE');

          return;
        }

        let newDirection: ScrollDirectionType = 'NONE';

        if (xNotChangedPosition) {
          newDirection =
            lastYPosition.current > currentYPosition ? 'DOWN' : 'UP';
        } else if (yNotChangedPosition) {
          newDirection =
            lastXPosition.current > currentXPosition ? 'RIGHT' : 'LEFT';
        }

        // If direction has changed, return it
        if (newDirection !== direction) {
          setDirection(newDirection);
        }

        // Reassign lastYPosition
        lastYPosition.current = currentYPosition;
        lastXPosition.current = currentXPosition;

        return;
      }
    },
    wait,
    throttleOptions
  );

  useEffect(() => {
    initializeResetDirectionTimeout();
    const element = ref?.current;

    if (element) {
      element.addEventListener('scroll', handleRefScroll);
      return () => element.removeEventListener('scroll', handleRefScroll);
    } else {
      window.addEventListener('scroll', handleWindowScrollThrottled);
      return () =>
        window.removeEventListener('scroll', handleWindowScrollThrottled);
    }
  }, []);

  return getScrollDirectionBooleans(direction);
};
