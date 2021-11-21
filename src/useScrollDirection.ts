import { useRefScrollDirection } from './useRefScrollDirection';
import { useWindowScrollDirection } from './useWindowScrollDirection';
import { getScrollDirectionBooleans } from './utils/getScrollDirectionBooleans';
import type { OptionsType } from './utils/types';

export const useScrollDirection = (options?: OptionsType) => {
  const wait = options?.wait || 50;
  const timeToReset = options?.timeToReset || 150;
  const ref = options?.ref || null;
  const optionsWithDefaults = {
    wait,
    timeToReset,
    ref,
  };
  const direction = ref
    ? useRefScrollDirection(optionsWithDefaults)
    : useWindowScrollDirection(optionsWithDefaults);

  return getScrollDirectionBooleans(direction);
};
