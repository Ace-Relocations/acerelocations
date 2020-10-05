import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
} from '../constants/actionTypes';

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginRequestSuccess = (payload) => ({
  type: LOGIN_REQUEST_SUCCESS,
  payload,
});

export const showLoader = () => ({
  type: ON_SHOW_LOADER,
});

export const hideLoader = (payload) => ({
  type: ON_HIDE_LOADER,
});
