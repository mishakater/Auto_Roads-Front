import { all, call, put } from 'redux-saga/effects';

export const createResponseDispatcher = (action, errorListeners) => {
  return function* ({ data, error }, successPattern, errorPattern, overrideMeta) {
    const { meta, callbacks } = action;

    if (error) {
      yield all(errorListeners.map(call));

      yield put({
        type: errorPattern,
        payload: error,
        meta: overrideMeta || meta
      });

      if (callbacks?.onError) {
        yield call(callbacks.onError, error);
      }
      return;
    }

    yield put({
      type: successPattern,
      payload: data,
      meta: overrideMeta || meta
    });

    if (callbacks?.onSuccess) {
      yield call(callbacks.onSuccess, data);
    }
  };
}
