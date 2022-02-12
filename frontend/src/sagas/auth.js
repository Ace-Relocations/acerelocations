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
      toaster(response.message);
      yield localStorage.setItem('userToken', response.data.accessToken);
      yield localStorage.setItem('userData', JSON.stringify(response.data));
      yield localStorage.setItem('dp', JSON.stringify(response.data.displayPicture));
      yield localStorage.setItem('email', JSON.stringify(response.data.email));
      yield put(authAction.loginRequestSuccess(response.data.accessToken));
      window.location.reload(false);
    } else {
      toaster(response.message);
      yield put(authAction.hideLoader());
      
    }
  } catch (error) {
    yield put(authAction.hideLoader());
    toaster(error);
  }
}

function* logoutRequest() {
  try {
    let response = yield axios.post('/auth/logout');
    if (response.status == 200) {
      yield put(authAction.logoutRequestSuccess(true));
      localStorage.clear();
    }
  } catch (error) {
    if (error == 'Error: Request failed with status code 422')
      yield put(authAction.logoutRequestSuccess(true));
    else if (error == 'Error: Request failed with status code 401') {
      yield put(authAction.logoutRequestSuccess(true));
      localStorage.clear();
    } else {
      localStorage.clear();
    }
  }
}

export default function* rootsaga() {
  yield all([
    yield takeEvery(actionTypes.LOGIN_REQUEST, loginRequest),
    yield takeEvery(actionTypes.LOGOUT_REQUEST, logoutRequest),
  ]);
}
