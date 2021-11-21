import { TIMEOUT_ID } from '../consts';

export const initializeResetDirectionTimeout = () => {
  window[TIMEOUT_ID] = null;
};

export const handleResetDirectionTimeout = (
  timeToReset: number,
  onReset: () => void
) => {
  clearTimeout(window[TIMEOUT_ID]);

  window[TIMEOUT_ID] = setTimeout(onReset, timeToReset);
};
