import {
    CREATE_BARCODE_REQUEST,
    CREATE_BARCODE_REQUEST_SUCCESS,
    GET_ALL_BARCODE_REQUEST_SUCCESS,
    GET_ALL_BARCODE_REQUEST,
    GET_BARCODE_REQUEST,
    GET_BARCODE_REQUEST_SUCCESS,
    DELETE_BARCODE_REQUEST,
    DELETE_BARCODE_REQUEST_SUCCESS,
    UPDATE_BARCODE_REQUEST,
    UPDATE_BARCODE_REQUEST_SUCCESS,
  } from '../constants/actionTypes';
  
  export const barcodeRequest = (payload) => ({
    type: CREATE_BARCODE_REQUEST,
    payload,
  });
  
  export const barcodeRequestSuccess = (payload) => ({
    type: CREATE_BARCODE_REQUEST_SUCCESS,
    payload,
  });
  
  export const allBarcodeRequest = () => ({
    type: GET_ALL_BARCODE_REQUEST,
  });
  
  export const allBarcodeRequestSuccess = (payload) => ({
    type: GET_ALL_BARCODE_REQUEST_SUCCESS,
    payload,
  });

  export const getBarcodeRequest = (payload) => ({
    type: GET_BARCODE_REQUEST,
    gcnNo: payload,
  });
  
  export const getBarcodeRequestSuccess = (payload) => ({
    type: GET_BARCODE_REQUEST_SUCCESS,
    payload,
  });
  
  export const deleteBarcodeRequest = (payload) => ({
    type: DELETE_BARCODE_REQUEST,
    gcnNo: payload,
  });
  
  export const deleBarcodeRequestSuccess = (payload) => ({
    type: DELETE_BARCODE_REQUEST_SUCCESS,
    payload,
  });

  export const updateBarcodeRequest = (payload, gcnno) => ({
    type: UPDATE_BARCODE_REQUEST,
    gcnno,
    payload,
  });
  
  export const updateBarcodeRequestSuccess = (payload) => ({
    type: UPDATE_BARCODE_REQUEST_SUCCESS,
    payload,
  });