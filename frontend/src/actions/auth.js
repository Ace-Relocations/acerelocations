import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_REQUEST_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_REQUEST_SUCCESS,
} from '../constants/actionTypes';

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});
export const loginFail = (payload) => ({
  type: LOGIN_FAIL,
  payload,
});
export const loginRequestSuccess = (payload) => ({
  type: LOGIN_REQUEST_SUCCESS,
  payload,
});

export const logoutRequest = (payload) => ({
  type: LOGOUT_REQUEST,
  payload,
});

export const logoutRequestSuccess = () => ({
  type: LOGOUT_REQUEST_SUCCESS,
});