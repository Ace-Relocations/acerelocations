import { all } from 'redux-saga/effects';

import authSagas from './auth';
import jobSagas from './job';
import dashboardSagas from './dashboard';

export default function* rootSaga(getState) {
  yield all([authSagas(), jobSagas(), dashboardSagas()]);
}
