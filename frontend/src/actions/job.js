import {
  CREATE_JOB_REQUEST,
  CREATE_JOB_REQUEST_SUCCESS,
  GET_ALL_JOB_REQUEST_SUCCESS,
  GET_ALL_JOB_REQUEST,
} from '../constants/actionTypes';

export const jobRequest = (payload) => ({
  type: CREATE_JOB_REQUEST,
  payload,
});

export const jobRequestSuccess = (payload) => ({
  type: CREATE_JOB_REQUEST_SUCCESS,
  payload,
});

export const allJobRequest = () => ({
  type: GET_ALL_JOB_REQUEST,
});

export const allJobRequestSuccess = (payload) => ({
  type: GET_ALL_JOB_REQUEST_SUCCESS,
  payload,
});
