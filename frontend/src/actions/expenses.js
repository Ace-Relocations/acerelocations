import {
  CREATE_EXPENSES_REQUEST,
  CREATE_EXPENSES_REQUEST_SUCCESS,
  UPDATE_EXPENSES_REQUEST,
  UPDATE_EXPENSES_REQUEST_SUCCESS,
  GET_EXPENSES_REQUEST,
  GET_EXPENSES_REQUEST_SUCCESS,
} from '../constants/actionTypes';

export const createExpensesRequest = (payload) => ({
  type: CREATE_EXPENSES_REQUEST,
  payload,
});

export const createExpensesRequestSuccess = (payload) => ({
  type: CREATE_EXPENSES_REQUEST_SUCCESS,
  payload,
});

export const updateExpensesRequest = (payload) => ({
  type: UPDATE_EXPENSES_REQUEST,
  payload,
});

export const updateExpensesRequestSuccess = (payload) => ({
  type: UPDATE_EXPENSES_REQUEST_SUCCESS,
  payload,
});

export const getExpensesRequest = (payload) => ({
  type: GET_EXPENSES_REQUEST,
  gcnNo: payload.selectedGcnNo,
});

export const getExpensesRequestSuccess = (payload) => ({
  type: GET_EXPENSES_REQUEST_SUCCESS,
  payload,
});
