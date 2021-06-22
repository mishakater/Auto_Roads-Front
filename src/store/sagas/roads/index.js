import { all, takeLatest } from 'redux-saga/effects';
import { RoadsActionTypes } from '../../actions/types';
import { SagaWrapper } from '../index';

import getRoadsSaga from './getRoadsSaga';
import searchRoadsSaga from './searchRoadsSaga';
import rateRoadSaga from './rateRoadSaga';
import commentRoadSaga from './commentRoadSaga';

export default function* appRootSaga() {
  yield all([
    takeLatest(RoadsActionTypes.LIST, SagaWrapper.withRequest(getRoadsSaga)),
    takeLatest(RoadsActionTypes.SEARCH, SagaWrapper.withRequest(searchRoadsSaga)),
    takeLatest(RoadsActionTypes.RATE, SagaWrapper.withRequest(rateRoadSaga)),
    takeLatest(RoadsActionTypes.COMMENT, SagaWrapper.withRequest(commentRoadSaga))
  ]);
}
