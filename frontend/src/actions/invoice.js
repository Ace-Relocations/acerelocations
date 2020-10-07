import { CREATE_INVOICE_REQUEST, CREATE_INVOICE_REQUEST_SUCCESS } from '../constants/actionTypes';

export const createInvoiceRequest = (payload) => ({
  type: CREATE_INVOICE_REQUEST,
  payload,
});

export const createInvoiceRequestSuccess = (payload) => ({
  type: CREATE_INVOICE_REQUEST_SUCCESS,
  payload,
});
