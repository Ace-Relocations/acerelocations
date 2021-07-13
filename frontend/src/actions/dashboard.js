import { DASHBOARD_STATS_REQUEST, DASHBOARD_STATS_REQUEST_SUCCESS } from '../constants/actionTypes';

export const dashbordStatsRequest = (payload) => ({
  type: DASHBOARD_STATS_REQUEST,
  payload,
});

export const dashbordStatsRequestSuccess = (payload) => ({
  type: DASHBOARD_STATS_REQUEST_SUCCESS,
  payload,
});
