import { addDecorator } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import { configureActions } from '@storybook/addon-actions';

configureActions({
  clearOnStoryChange: true,
});

const panelExclude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
  panelExclude: [...panelExclude, /deprecated/],
});

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
