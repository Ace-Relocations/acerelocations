import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actionTypes from '../constants/actionTypes';
import * as barcodeAction from '../actions';

import axios from '../services';
import toaster from '../utils/toaster';

function* createBarcodeRequest({ payload }) {
  try {
    yield put(barcodeAction.showLoader());

    let response = yield axios.post('/barcode/create', {
      ...payload,
    });

    yield put(barcodeAction.hideLoader());

    if (response.status === 200) {
      yield put(barcodeAction.barcodeRequestSuccess(response.data.data));
      toaster(response.data.message);
    } else {
      toaster(response.data.message);
    }
  } catch (error) {
    yield put(barcodeAction.hideLoader());
    // yield localStorage.clear();
    toaster(error, { type: 'error' });
    // yield put(barcodeAction.logoutRequestSuccess(true));
  }
}

function* allBarcodeRequest() {
  try {
    let response = yield axios.get('/barcode/view/all');
    yield put(barcodeAction.showLoader());
    if (response.status === 200) {
      yield put(barcodeAction.allBarcodeRequestSuccess(response.data));
      yield put(barcodeAction.hideLoader());
    } else {
      toaster(response.data.message, { type: 'error' });
      yield put(barcodeAction.hideLoader());
    }
  } catch (error) {
    if (error == 'Error: Request failed with status code 401') {
      yield put(push('/login'));
      yield put(barcodeAction.hideLoader());
      // yield localStorage.clear();
      toaster(error, { type: 'error' });
      // yield put(barcodeAction.logoutRequestSuccess(true));
    }
  }
}

function* getBarcodeRequest(payload) {
  try {
    const { empCode } = payload;
    yield put(barcodeAction.showLoader());

    let response = yield axios.get(`/barcode/view?empCode=${empCode}`);

    if (response.status === 200) {
      yield put(barcodeAction.getBarcodeRequestSuccess(response.data));
      yield put(barcodeAction.hideLoader());
      toaster(response.data.message);
    } else {
      yield put(barcodeAction.hideLoader());
      toaster(response.data.message, { type: 'error' });
    }
  } catch (error) {
    yield put(barcodeAction.hideLoader());
    if (error == 'Error: Request failed with status code 401') {
      yield localStorage.clear();
      toaster('Signing out ...', { type: 'error' });
      yield put(barcodeAction.logoutRequestSuccess(true));
    }
  }
}

function* updateBarcodeRequest(payload) {
  console.log("Payload", payload);
  try {
    let response = 0 ;
    response = yield axios.post(`/barcode/update?empCode=${payload.empCode}`, {
      ...payload.payload,
    });
    if (response.status === 200) {
      yield put(barcodeAction.updateBarcodeRequestSuccess(response.data));
      toaster(response.data.message);
    } else {
      toaster(response.data.message, { type: 'error' });
    }
  } catch (error) {
    if (error == 'Error: Request failed with status code 401') {
      yield localStorage.clear();
      toaster('Signing out ...', { type: 'error' });
      yield put(barcodeAction.logoutRequestSuccess(true));
    }
  }
}

function* deleteBarcodeRequest(payload) {
  try {
    console.log("Payload", payload);

    const { empCode } = payload;
    yield put(barcodeAction.showLoader());
    let response = yield axios.post(`/barcode/delete?empCode=${empCode}`);
    if (response.status === 200) {
      yield put(barcodeAction.deleBarcodeRequestSuccess(response.data));
      yield put(barcodeAction.hideLoader());
      toaster(response.data.message);
    } else {
      toaster(response.data.message, { type: 'error' });
      yield put(barcodeAction.hideLoader());
    }
  } catch (error) {
    yield put(barcodeAction.hideLoader());
    if (error == 'Error: Request failed with status code 401') {
      yield localStorage.clear();
      toaster('Signing out ...', { type: 'error' });
      yield put(barcodeAction.logoutRequestSuccess(true));
    }
    toaster(error, { type: 'error' });
  }
}

// function* updateBarcodeStatusRequest(payload) {
//   try {
//     const {
//       payload: { status, empCode },
//     } = payload;
//     let response = yield axios.post(`/barcode/update?empCode=${empCode}`, { status });
//     yield put(barcodeAction.showLoader());
//     if (response.status === 200) {
//       yield put(barcodeAction.updateBarcodeStatusRequestSuccess(response.data));
//       yield put(barcodeAction.hideLoader());
//       toaster(response.data.message);
//     } else {
//       yield put(barcodeAction.hideLoader());
//       toaster(response.data.message, { type: 'error' });
//     }
//   } catch (error) {
//     yield put(barcodeAction.hideLoader());
//     if (error == 'Error: Request failed with status code 401') {
//       yield localStorage.clear();
//       toaster('Signing out ...', { type: 'error' });
//       yield put(barcodeAction.logoutRequestSuccess(true));
//     }
//   }
// }

export default function* rootsaga() {
  yield all([
    yield takeEvery(actionTypes.CREATE_BARCODE_REQUEST, createBarcodeRequest),
    yield takeEvery(actionTypes.GET_BARCODE_REQUEST, getBarcodeRequest),
    yield takeEvery(actionTypes.GET_ALL_BARCODE_REQUEST, allBarcodeRequest),
    yield takeEvery(actionTypes.UPDATE_BARCODE_REQUEST, updateBarcodeRequest),
    yield takeEvery(actionTypes.DELETE_BARCODE_REQUEST, deleteBarcodeRequest),
  ]);
}
