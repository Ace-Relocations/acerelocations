import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actionTypes from '../constants/actionTypes';
import * as jobAction from '../actions';

import axios from '../services';
import toaster from '../utils/toaster';

function* createJobRequest({ payload }) {
  try {
    yield put(jobAction.showLoader());

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
      contact,
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

    yield put(jobAction.hideLoader());

    if (response.status === 200) {
      yield put(jobAction.jobRequestSuccess(response.data));
      toaster(response.message);
    } else {
      toaster(response.message);
    }
  } catch (error) {
    yield put(jobAction.hideLoader());
    toaster(error.message);
  }
}

function* allJobRequest() {
  try {
    let response = yield axios.get('/job/view/all');

    if (response.status === 200) {
      yield put(jobAction.allJobRequestSuccess(response.data));
      toaster(response.message);
    } else {
      toaster(response.message, { type: 'error' });
    }
  } catch (error) {
    console.log(error);
    if (error == 'Error: Request failed with status code 401') {
      yield put(push('/login'));
      // yield put(actions.userSignOutSuccess());
      yield localStorage.clear();
      toaster(error.message, { type: 'error' });
    }
  }
}

function* getJobRequest(payload) {
  try {
    const { gcnNo } = payload;

    let response = yield axios.get(`/job/view?gcnno=${gcnNo}`);

    if (response.status === 200) {
      yield put(jobAction.getJobRequestSuccess(response.data));
      toaster(response.message);
    } else {
      toaster(response.message, { type: 'error' });
    }
  } catch (error) {
    console.log(error);
    if (error == 'Error: Request failed with status code 401') {
      yield put(push('/login'));
      // yield put(actions.userSignOutSuccess());
      yield localStorage.clear();
      toaster(error.message, { type: 'error' });
    }
  }
}

function* updateJobRequest(payload) {
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
      gcnNo,
    } = payload;
    let response = yield axios.post(`/job/update?gcnno=${gcnNo}`, {
      consignor,
      consignee,
      email,
      contact,
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
    });

    if (response.status === 200) {
      yield put(jobAction.updateJobRequestSuccess(response.data));
      toaster(response.message);
    } else {
      toaster(response.message, { type: 'error' });
    }
  } catch (error) {
    console.log(error);
    if (error == 'Error: Request failed with status code 401') {
      yield put(push('/login'));
      // yield put(actions.userSignOutSuccess());
      yield localStorage.clear();
      toaster(error.message, { type: 'error' });
    }
  }
}

function* deleteJobRequest(payload) {
  try {
    const { gcnNo } = payload;
    let response = yield axios.post(`/job/delete?gcnno=${gcnNo}`);

    if (response.status === 200) {
      yield put(jobAction.deleJobRequestSuccess(response.data));
      toaster(response.message);
    } else {
      toaster(response.message, { type: 'error' });
    }
  } catch (error) {
    if (error == 'Error: Request failed with status code 401') {
      yield put(push('/login'));
      // yield put(actions.userSignOutSuccess());
      yield localStorage.clear();
      toaster(error, { type: 'error' });
    }
    toaster(error, { type: 'error' });
  }
}

function* updateJobStatusRequest(payload) {
  try {
    const {
      payload: { status, gcnNo },
    } = payload;
    let response = yield axios.post(`/job/update?gcnno=${gcnNo}`, { status });

    if (response.status === 200) {
      yield put(jobAction.updateJobRequestSuccess(response.data));
      toaster(response.message);
    } else {
      toaster(response.message, { type: 'error' });
    }
  } catch (error) {
    console.log(error);
    if (error == 'Error: Request failed with status code 401') {
      yield put(push('/login'));
      // yield put(actions.userSignOutSuccess());
      yield localStorage.clear();
      toaster(error.message, { type: 'error' });
    }
  }
}

export default function* rootsaga() {
  yield all([
    yield takeEvery(actionTypes.CREATE_JOB_REQUEST, createJobRequest),
    yield takeEvery(actionTypes.GET_JOB_REQUEST, getJobRequest),
    yield takeEvery(actionTypes.GET_ALL_JOB_REQUEST, allJobRequest),
    yield takeEvery(actionTypes.UPDATE_JOB_REQUEST, updateJobRequest),
    yield takeEvery(actionTypes.DELETE_JOB_REQUEST, deleteJobRequest),
    yield takeEvery(actionTypes.UPDATE_JOB_STATUS_REQUEST, updateJobStatusRequest),
  ]);
}
