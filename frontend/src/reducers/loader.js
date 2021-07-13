import * as actions from '../constants/actionTypes';

export const INITIAL_STATE = {
  loader: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ON_SHOW_LOADER:
      return {
        ...state,
        loader: true,
      };

    case actions.ON_HIDE_LOADER:
      return {
        ...state,
        loader: false,
      };

    default:
      return state;
  }
};
