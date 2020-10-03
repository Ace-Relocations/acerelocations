import {
  CREATE_JOB_REQUEST,
  CREATE_JOB_REQUEST_SUCCESS,
  GET_ALL_JOB_REQUEST_SUCCESS,
  GET_ALL_JOB_REQUEST,
  DELETE_JOB_REQUEST,
  DELETE_JOB_REQUEST_SUCCESS,
  GET_JOB_REQUEST,
  GET_JOB_REQUEST_SUCCESS,
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

export const deleteJobRequest = (payload) => ({
  type: DELETE_JOB_REQUEST,
  gcnNo: payload,
});

export const deleJobRequestSuccess = (payload) => ({
  type: DELETE_JOB_REQUEST_SUCCESS,
  payload,
});

export const getJobRequest = (payload) => ({
  type: GET_JOB_REQUEST,
  gcnNo: payload,
});

export const getJobRequestSuccess = (payload) => ({
  type: GET_JOB_REQUEST_SUCCESS,
  payload,
});
