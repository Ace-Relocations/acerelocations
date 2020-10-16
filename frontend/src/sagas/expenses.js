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
    // yield localStorage.clear();
    toaster(error, { type: 'error' });
    // yield put(expensesAction.logoutRequestSuccess(true));
  }
}

function* updateExpensesRequest({ payload }) {
  try {
    yield put(expensesAction.showLoader());

    let response = yield axios.post('/expense/update', {
      ...payload,
    });

    yield put(expensesAction.hideLoader());

    if (response.status === 200) {
      yield put(expensesAction.updateExpensesRequestSuccess(response.data));
      toaster(response.data.message);
    } else {
      toaster(response.data.message);
    }
  } catch (error) {
    yield put(expensesAction.hideLoader());
    // yield localStorage.clear();
    toaster(error, { type: 'error' });
    // yield put(expensesAction.logoutRequestSuccess(true));
  }
}

function* getExpensesRequest({ payload }) {
  try {
    yield put(expensesAction.showLoader());

    let response = yield axios.post('/expense/update', {
      ...payload,
    });

    yield put(expensesAction.hideLoader());

    if (response.status === 200) {
      yield put(expensesAction.getExpensesRequestSuccess(response.data));
      toaster(response.data.message);
    } else {
      toaster(response.data.message);
    }
  } catch (error) {
    yield put(expensesAction.hideLoader());
    // yield localStorage.clear();
    toaster(error, { type: 'error' });
    // yield put(expensesAction.logoutRequestSuccess(true));
  }
}

export default function* rootsaga() {
  yield all([
    yield takeEvery(actionTypes.CREATE_EXPENSES_REQUEST, createExpensesRequest),
    yield takeEvery(actionTypes.UPDATE_EXPENSES_REQUEST, updateExpensesRequest),
    yield takeEvery(actionTypes.GET_EXPENSES_REQUEST, getExpensesRequest),
  ]);
}
