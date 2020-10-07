import { all } from 'redux-saga/effects';

import authSagas from './auth';
import jobSagas from './job';
import dashboardSagas from './dashboard';
import invoiceSagas from './invoice';

export default function* rootSaga(getState) {
  yield all([authSagas(), jobSagas(), dashboardSagas(), invoiceSagas()]);
}
