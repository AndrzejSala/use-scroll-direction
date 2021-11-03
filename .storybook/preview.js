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

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};
