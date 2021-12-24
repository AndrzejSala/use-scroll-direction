import { TIMEOUT_ID } from '../consts';

export const initializeResetDirection = () => {
  window[TIMEOUT_ID] = null;
};

export const handleResetDirection = (
  timeToReset: number,
  onReset: () => void
) => {
  clearTimeout(window[TIMEOUT_ID]);

  window[TIMEOUT_ID] = setTimeout(onReset, timeToReset);
};
