import { LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS } from '../constants/actionTypes';

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginRequestSuccess = (payload) => ({
  type: LOGIN_REQUEST_SUCCESS,
  payload,
});
