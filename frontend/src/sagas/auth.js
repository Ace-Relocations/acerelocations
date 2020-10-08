import { push } from 'react-router-redux';
import { all, takeEvery, put, delay } from 'redux-saga/effects';

import * as actionTypes from '../constants/actionTypes';
import * as authAction from '../actions';

import axios from '../services';
import toaster from '../utils/toaster';

function* loginRequest({ payload }) {
  try {
    const { username, password } = payload;
    // delete axios.defaults.headers.common['Authorization'];
    yield put(authAction.showLoader());
    let response = yield axios.post('/auth/signin', { username, password });

    if (response.status === 200) {
      localStorage.setItem('userData', JSON.stringify(response.data));
      localStorage.setItem('userToken', response.data.accessToken);
      yield put(authAction.loginRequestSuccess(response.data.userToken));
      yield put(push('/'));
    } else {
      yield put(authAction.hideLoader());
      toaster(response.message);
    }
  } catch (error) {
    yield put(authAction.hideLoader());
    toaster('User Not Found');
  }
}

function* logoutRequest() {
  yield localStorage.clear();

  // try {
  //   let response = yield axios.post(`/logout`);
  //   if (response.status == 200) {
  //     yield put(authAction.logoutRequestSuccess(true));
  //     localStorage.clear();
  //   }
  // } catch (error) {
  //   if (error == 'Error: Request failed with status code 422')
  //     yield put(authAction.logoutRequestSuccess(true));
  //   else if (error == 'Error: Request failed with status code 401') {
  //     yield put(authAction.logoutRequestSuccess(true));
  //     localStorage.clear();
  //   } else {
  //     localStorage.clear();
  //   }
  // }
}

export default function* rootsaga() {
  yield all([
    yield takeEvery(actionTypes.LOGIN_REQUEST, loginRequest),
    yield takeEvery(actionTypes.LOGOUT_REQUEST, logoutRequest),
  ]);
}
