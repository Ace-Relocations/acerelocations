import { takeEvery, put } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import * as authAction from '../actions';

import axios from '../services';

function* loginRequest(action) {
  try {
    delete axios.defaults.headers.common['Authorization'];
    let response = yield axios.post('/login', action.payload);

    if (response.status === 200) {
      if (response.message === 'user successfully login') {
        yield put(authAction.loginRequestSuccess(response.data.userToken));
        localStorage.setItem('userData', JSON.stringify(response.data));
        localStorage.setItem('userToken', response.data.accessToken);
      } else {
        console.log('error');
      }
    }
  } catch (error) {
    console.log('error');
  }
}

export default function* rootsaga() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, loginRequest);
}
