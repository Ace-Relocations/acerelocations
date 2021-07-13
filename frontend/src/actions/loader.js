import { ON_HIDE_LOADER, ON_SHOW_LOADER } from '../constants/actionTypes';

export const showLoader = (payload) => ({
  type: ON_SHOW_LOADER,
  payload,
});

export const hideLoader = (payload) => ({
  type: ON_HIDE_LOADER,
  payload,
});
