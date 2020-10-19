import {
  CREATE_INVOICE_REQUEST,
  CREATE_INVOICE_REQUEST_SUCCESS,
  UPDATE_INVOICE_REQUEST,
  UPDATE_INVOICE_REQUEST_SUCCESS,
  GET_INVOICE_REQUEST,
  GET_INVOICE_REQUEST_SUCCESS,
} from '../constants/actionTypes';

export const createInvoiceRequest = (payload) => ({
  type: CREATE_INVOICE_REQUEST,
  payload,
});

export const createInvoiceRequestSuccess = (payload) => ({
  type: CREATE_INVOICE_REQUEST_SUCCESS,
  payload,
});

export const updateInvoiceRequest = (payload) => ({
  type: UPDATE_INVOICE_REQUEST,
  payload,
});

export const updateInvoiceRequestSuccess = (payload) => ({
  type: UPDATE_INVOICE_REQUEST_SUCCESS,
  payload,
});

export const getInvoiceRequest = (payload) => ({
  type: GET_INVOICE_REQUEST,
  gcnNo: payload.selectedGcnNo,
});

export const getInvoiceRequestSuccess = (payload) => ({
  type: GET_INVOICE_REQUEST_SUCCESS,
  payload,
});
