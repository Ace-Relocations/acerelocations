import * as actions from '../constants/actionTypes';

export const INITIAL_STATE = {
  dashboardStats: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.DASHBOARD_STATS_REQUEST_SUCCESS:
      return {
        ...state,
        dashboardStats: action.payload,
      };

    default:
      return state;
  }
};
