import * as actions from '../constants/actionTypes';

export const INITIAL_STATE = {
  expenses: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATE_EXPENSES_REQUEST_SUCCESS:
      return {
        ...state,
        expenses: action.payload,
      };
    case actions.GET_EXPENSES_REQUEST_SUCCESS:
      return {
        ...state,
        expenses: action.payload,
      };
    case actions.UPDATE_EXPENSES_REQUEST_SUCCESS:
      return {
        ...state,
        expenses: action.payload,
      };
    default:
      return state;
  }
};
