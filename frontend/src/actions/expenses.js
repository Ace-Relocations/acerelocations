import { CREATE_EXPENSES_REQUEST, CREATE_EXPENSES_REQUEST_SUCCESS } from '../constants/actionTypes';

export const createExpensesRequest = (payload) => ({
  type: CREATE_EXPENSES_REQUEST,
  payload,
});

export const createExpensesRequestSuccess = (payload) => ({
  type: CREATE_EXPENSES_REQUEST_SUCCESS,
  payload,
});
