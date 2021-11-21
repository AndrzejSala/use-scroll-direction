import { RefObject } from 'react';

export type ScrollDirectionType = 'UP' | 'DOWN' | 'NONE';

export type OptionsType = Readonly<{
  wait?: number;
  timeToReset?: number;
  ref?: RefObject<HTMLElement | null> | null;
}>;
