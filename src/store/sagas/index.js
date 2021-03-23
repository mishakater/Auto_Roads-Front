import { all } from 'redux-saga/effects';
import { createWrapper } from '../lib';

// import appRootSaga from './app';
// import userRootSaga from './user';

export const SagaWrapper = createWrapper();

export default function* rootSaga() {
  yield all([
    // fork(appRootSaga),
    // fork(userRootSaga),
  ]);
}
