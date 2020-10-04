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

export default function* rootsaga() {
  yield all([yield takeEvery(actionTypes.LOGIN_REQUEST, loginRequest)]);
}
