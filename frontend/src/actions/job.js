import { CREATE_JOB_REQUEST, CREATE_JOB_REQUEST_SUCCESS } from '../constants/actionTypes';

export const jobRequest = (payload) => ({
  type: CREATE_JOB_REQUEST,
  payload,
});

export const jobRequestSuccess = (payload) => ({
  type: CREATE_JOB_REQUEST_SUCCESS,
  payload,
});
