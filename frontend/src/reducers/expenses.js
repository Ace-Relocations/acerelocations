import * as actions from '../constants/actionTypes';

export const INITIAL_STATE = {
  expenses: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATE_EXPENSES_REQUEST:
      return {
        ...state,
        expenses: action.payload,
      };
    default:
      return state;
  }
};
