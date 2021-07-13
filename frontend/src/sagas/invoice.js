import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actionTypes from '../constants/actionTypes';
import * as invoiceAction from '../actions';

import axios from '../services';
import toaster from '../utils/toaster';

function* getInvoiceRequest(payload) {
  try {
    const { gcnNo } = payload;
    yield put(invoiceAction.showLoader());

    let response = yield axios.get(`/invoice/view?gcnno=${gcnNo}`);

    yield put(invoiceAction.hideLoader());
    if (!!response) {
      yield put(invoiceAction.getInvoiceRequestSuccess(response.data.data));
      toaster(response.data.message);
    } else {
      toaster(response.data.message);
    }
  } catch (error) {
    yield put(invoiceAction.hideLoader());
    toaster(error, { type: 'error' });
  }
}

function* createInvoiceRequest({ payload }) {
  try {
    yield put(invoiceAction.showLoader());
    console.log("PAYLOAD", payload);
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
    // yield localStorage.clear();
    toaster(error, { type: 'error' });
    // yield put(invoiceAction.logoutRequestSuccess(true));
  }
}

function* updateInvoiceRequest({ payload }) {
  try {
    yield put(invoiceAction.showLoader());
    let response = yield axios.post('/invoice/update', {
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
    // yield localStorage.clear();
    toaster(error, { type: 'error' });
    // yield put(invoiceAction.logoutRequestSuccess(true));
  }
}

export default function* rootsaga() {
  yield all([
    yield takeEvery(actionTypes.GET_INVOICE_REQUEST, getInvoiceRequest),
    yield takeEvery(actionTypes.CREATE_INVOICE_REQUEST, createInvoiceRequest),
    yield takeEvery(actionTypes.UPDATE_INVOICE_REQUEST, updateInvoiceRequest),
  ]);
}
