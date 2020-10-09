import { all, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actionTypes from '../constants/actionTypes';
import * as expensesAction from '../actions';

import axios from '../services';
import toaster from '../utils/toaster';

function* createExpensesRequest({ payload }) {
  try {
    yield put(expensesAction.showLoader());

    let response = yield axios.post('/expense/create', {
      ...payload,
    });

    yield put(expensesAction.hideLoader());

    if (response.status === 200) {
      yield put(expensesAction.createExpensesRequestSuccess(response.data));
      toaster(response.data.message);
    } else {
      toaster(response.data.message);
    }
  } catch (error) {
    yield put(expensesAction.hideLoader());
    yield localStorage.clear();
    toaster('Error Creating Expenses failed, Please Try again', { type: 'error' });
  }
}

export default function* rootsaga() {
  yield all([yield takeEvery(actionTypes.CREATE_EXPENSES_REQUEST, createExpensesRequest)]);
}
