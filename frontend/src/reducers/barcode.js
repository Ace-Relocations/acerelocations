import * as actions from '../constants/actionTypes';

export const INITIAL_STATE = {
  barcode: {},
  allBarcodes: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATE_BARCODE_REQUEST_SUCCESS:
      return {
        ...state,
        barcode: action.payload,
      };

    case actions.GET_ALL_BARCODE_REQUEST_SUCCESS:
      return {
        ...state,
        allBarcodes: action.payload.length > 0 ? action.payload : [],
      };

    case actions.GET_BARCODE_REQUEST_SUCCESS:
      return {
        ...state,
        barcode: action.payload,
      };

    default:
      return state;
  }
};
