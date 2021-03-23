import { all, takeLatest } from 'redux-saga/effects';
import { UserActionTypes } from '../../actions/types';
import { SagaWrapper } from '../index';

import loginSaga from './loginSaga';
import registerSaga from './registerSaga';

export default function* appRootSaga() {
  yield all([
    takeLatest(UserActionTypes.LOGIN, SagaWrapper.withRequest(loginSaga)),
    takeLatest(UserActionTypes.REGISTER, SagaWrapper.withRequest(registerSaga))
  ]);
}
