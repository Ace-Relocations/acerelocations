import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import * as actionTypes from '../constants/actionTypes';
import * as authAction from '../actions';

import axios from '../services';
import toaster from '../utils/toaster';

function* loginRequest({ payload }) {
  try {
    const { username, password } = payload;
    // delete axios.defaults.headers.common['Authorization'];
    let response = yield axios.post('/auth/signin', { username, password });

    if (response.status === 200) {
      yield put(authAction.loginRequestSuccess(response.data.userToken));
      yield put(push('/'));
      localStorage.setItem('userData', JSON.stringify(response.data));
      localStorage.setItem('userToken', response.data.accessToken);
    } else {
      toaster(response.message);
    }
  } catch (error) {
    toaster('User Not Found');
  }
}

export default function* rootsaga() {
  yield all([yield takeEvery(actionTypes.LOGIN_REQUEST, loginRequest)]);
}
