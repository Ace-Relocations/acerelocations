import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actionTypes from '../constants/actionTypes';
import * as invoiceAction from '../actions';

import axios from '../services';
import toaster from '../utils/toaster';

function* createInvoiceRequest({ payload }) {
  try {
    yield put(invoiceAction.showLoader());

    let response = yield axios.post('/invoice/create', {
      ...payload,
    });

    yield put(invoiceAction.hideLoader());

    if (response.status === 200) {
      yield put(invoiceAction.createInvoiceRequestSuccess(response.data));
      toaster(response.data.message);
    } else {
      toaster(response.data.message);
    }
  } catch (error) {
    yield put(invoiceAction.hideLoader());
    toaster('Error Creating Invoice failed, Please Try again', { type: 'error' });
  }
}

export default function* rootsaga() {
  yield all([yield takeEvery(actionTypes.CREATE_INVOICE_REQUEST, createInvoiceRequest)]);
}
