import { all, takeEvery, call, put } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';
import * as authAction from '../actions';

import axios from '../services';

function* loginRequest(action) {
  try {
    delete axios.defaults.headers.common['Authorization'];
    let response = yield axios.post('/login', action.payload);

    if (response.status == 200) {
      if (response.data.message == 'user successfully login') {
        yield put(authAction.loginRequestSuccess(response.data.userToken));
        localStorage.setItem('userData', JSON.stringify(response.data));
        localStorage.setItem('userToken', response.data.userToken);
      } else {
        yield put(
          authAction.modalOpen({
            modalType: 'error',
            modalMessage: response.data.message,
            redirectURL: '',
          }),
        );
      }
    }
  } catch (error) {
    yield put(
      authAction.modalOpen({
        modalType: 'error',
        modalMessage: error.response.data.message,
        redirectURL: '',
      }),
    );
  }
}

export default function* rootsaga() {
  yield takeEvery(actionTypes.LOGIN_REQUEST, loginRequest);
}
