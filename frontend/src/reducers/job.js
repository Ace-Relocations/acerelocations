import * as actions from '../constants/actionTypes';

export const INITIAL_STATE = {
  job: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATE_JOB_REQUEST_SUCCESS:
      return {
        ...state,
        job: action.payload,
      };

    default:
      return state;
  }
};
