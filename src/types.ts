import { RefObject } from 'react';

export type ScrollDirectionType = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' | 'NONE';

export type OptionsType = Readonly<{
  wait?: number;
  timeToReset?: number;
  ref?: RefObject<HTMLElement | null> | null;
}>;
