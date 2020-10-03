import { all } from 'redux-saga/effects';

import authSagas from './auth';
import jobSagas from './job';

export default function* rootSaga(getState) {
  yield all([authSagas(), jobSagas()]);
}
