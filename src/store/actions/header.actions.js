import { HEADER } from './actions.type';

export const toggleDarkMode = (isDarkMode) => ({
  type: HEADER.TOGGLE_DARK_MODE,
  payload: isDarkMode,
});
