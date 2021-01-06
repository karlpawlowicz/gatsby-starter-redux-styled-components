import { HEADER } from '../actions/actions.type';

export const INITIAL_STATE = {
  isDarkMode: false,
};

export const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HEADER.TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkMode: action.payload,
      };
    default:
      return state;
  }
};
