import { push } from 'react-router-redux';
import { all, takeEvery, put, delay } from 'redux-saga/effects';

import * as actionTypes from '../constants/actionTypes';
import * as authAction from '../actions';

import axios from '../services';
import toaster from '../utils/toaster';

function* dashboardStatsRequest() {
  try {
    // delete axios.defaults.headers.common['Authorization'];
    yield put(authAction.showLoader());
    let response = yield axios.get('/dashboard/view');

    if (response.status === 200) {
      yield put(authAction.dashbordStatsRequestSuccess(response.data.data));
      yield put(authAction.hideLoader());
    } else {
      yield put(authAction.hideLoader());
      toaster(response.message);
    }
  } catch (error) {
    yield put(authAction.hideLoader());
    // yield localStorage.clear();
    // toaster('Signing out ...');
    // yield put(authAction.logoutRequestSuccess(true));
  }
}

export default function* rootsaga() {
  yield all([yield takeEvery(actionTypes.DASHBOARD_STATS_REQUEST, dashboardStatsRequest)]);
}
