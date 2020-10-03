import { all, takeEvery, put } from 'redux-saga/effects';

import * as actionTypes from '../constants/actionTypes';
import * as jobAction from '../actions';

import axios from '../services';
import toaster from '../utils/toaster';

function* createJobRequest({ payload }) {
  try {
    const {
      cnsFirstName: consignor,
      cneFirstName: consignee,
      cneMobile: contact,
      cneEmail: email,
      originAddress1: oaddress1,
      originAddress2: oaddress2,
      originCity: ocity,
      ooriginState: ostate,
      originPincode: opincode,
      destinationAddress1: daddress1,
      destinationAddress2: daddress2,
      destinationCity: dcity,
      destinationState: dstate,
      destinationPincode: dpincode,
      status,
      car = false,
      insuranceP,
      insuranceA,
      type,
      date,
    } = payload;
    let response = yield axios.post('/job/create', {
      consignor,
      consignee,
      email,
      oaddress1,
      oaddress2,
      ocity,
      ostate,
      opincode,
      daddress1,
      daddress2,
      dcity,
      dstate,
      dpincode,
      status,
      car,
      insuranceP,
      insuranceA,
      type,
      date,
    });

    if (response.status === 200) {
      yield put(jobAction.jobRequestSuccess(response.data));
      toaster(response.message);
    } else {
      toaster(response.message);
    }
  } catch (error) {
    toaster(error.message);
  }
}

export default function* rootsaga() {
  yield all([yield takeEvery(actionTypes.CREATE_JOB_REQUEST, createJobRequest)]);
}
