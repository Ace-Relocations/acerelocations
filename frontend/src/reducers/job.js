import * as actions from '../constants/actionTypes';

export const INITIAL_STATE = {
  job: {},
  allJobs: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CREATE_JOB_REQUEST_SUCCESS:
      return {
        ...state,
        job: action.payload,
      };

    case actions.GET_ALL_JOB_REQUEST_SUCCESS:
      return {
        ...state,
        allJobs: action.payload.length > 0 ? action.payload : [],
      };

    case actions.GET_JOB_REQUEST_SUCCESS:
      return {
        ...state,
        job: action.payload,
      };

    default:
      return state;
  }
};
