import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actionTypes from '../constants/actionTypes';
import * as jobAction from '../actions';

import axios from '../services';
import toaster from '../utils/toaster';

function* createJobRequest({ payload }) {
  try {
    yield put(jobAction.showLoader());

    let response = yield axios.post('/job/create', {
      ...payload,
    });

    yield put(jobAction.hideLoader());

    if (response.status === 200) {
      yield put(jobAction.jobRequestSuccess(response.data.data));
      toaster(response.data.message);
    } else {
      toaster(response.data.message);
    }
  } catch (error) {
    yield put(jobAction.hideLoader());
    // yield localStorage.clear();
    toaster(error, { type: 'error' });
    // yield put(jobAction.logoutRequestSuccess(true));
  }
}

function* allJobRequest() {
  try {
    let response = yield axios.get('/job/view/all');
    yield put(jobAction.showLoader());
    if (response.status === 200) {
      yield put(jobAction.allJobRequestSuccess(response.data));
      yield put(jobAction.hideLoader());
    } else {
      toaster(response.data.message, { type: 'error' });
      yield put(jobAction.hideLoader());
    }
  } catch (error) {
    if (error == 'Error: Request failed with status code 401') {
      yield put(push('/login'));
      yield put(jobAction.hideLoader());
      // yield localStorage.clear();
      toaster(error, { type: 'error' });
      // yield put(jobAction.logoutRequestSuccess(true));
    }
  }
}

function* getJobRequest(payload) {
  try {
    const { gcnNo } = payload;
    yield put(jobAction.showLoader());

    let response = yield axios.get(`/job/view?gcnno=${gcnNo}`);

    if (response.status === 200) {
      yield put(jobAction.getJobRequestSuccess(response.data));
      yield put(jobAction.hideLoader());
      toaster(response.data.message);
    } else {
      yield put(jobAction.hideLoader());
      toaster(response.data.message, { type: 'error' });
    }
  } catch (error) {
    yield put(jobAction.hideLoader());
    if (error == 'Error: Request failed with status code 401') {
      yield localStorage.clear();
      toaster('Signing out ...', { type: 'error' });
      yield put(jobAction.logoutRequestSuccess(true));
    }
  }
}

function* updateJobRequest(payload) {
  try {
    let response = yield axios.post(`/job/update?gcnno=${payload.gcnno}`, {
      ...payload.payload,
    });

    if (response.status === 200) {
      yield put(jobAction.updateJobRequestSuccess(response.data));
      toaster(response.data.message);
    } else {
      toaster(response.data.message, { type: 'error' });
    }
  } catch (error) {
    if (error == 'Error: Request failed with status code 401') {
      yield localStorage.clear();
      toaster('Signing out ...', { type: 'error' });
      yield put(jobAction.logoutRequestSuccess(true));
    }
  }
}

function* deleteJobRequest(payload) {
  try {
    const { gcnNo } = payload;
    yield put(jobAction.showLoader());
    let response = yield axios.post(`/job/delete?gcnno=${gcnNo}`);
    if (response.status === 200) {
      yield put(jobAction.deleJobRequestSuccess(response.data));
      yield put(jobAction.hideLoader());
      toaster(response.data.message);
    } else {
      toaster(response.data.message, { type: 'error' });
      yield put(jobAction.hideLoader());
    }
  } catch (error) {
    yield put(jobAction.hideLoader());
    if (error == 'Error: Request failed with status code 401') {
      yield localStorage.clear();
      toaster('Signing out ...', { type: 'error' });
      yield put(jobAction.logoutRequestSuccess(true));
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
    yield put(jobAction.showLoader());
    if (response.status === 200) {
      yield put(jobAction.updateJobStatusRequestSuccess(response.data));
      yield put(jobAction.hideLoader());
      toaster(response.data.message);
    } else {
      yield put(jobAction.hideLoader());
      toaster(response.data.message, { type: 'error' });
    }
  } catch (error) {
    yield put(jobAction.hideLoader());
    if (error == 'Error: Request failed with status code 401') {
      yield localStorage.clear();
      toaster('Signing out ...', { type: 'error' });
      yield put(jobAction.logoutRequestSuccess(true));
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
