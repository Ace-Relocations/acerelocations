import * as actions from '../constants/actionTypes';

export const INITIAL_STATE = {
  invoice: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATE_INVOICE_REQUEST:
      return {
        ...state,
        invoice: action.payload,
      };
    default:
      return state;
  }
};
