import { ApiService } from '../../../services';
import { call } from 'redux-saga/effects';

export function* request({
  method = 'get',
  endpoint,
  headers,
  params,
  body,
  onUploadProgress,
  responseType,
  disableTimeout
}) {
  try {
    const { data, error } = yield call(
      ApiService.call,
      method,
      endpoint,
      body,
      params,
      headers,
      responseType,
      onUploadProgress,
      disableTimeout
    );

    if (error) {
      // @TODO: Instantiate error
      return { error: { error, data } };
    }

    return { data };
  } catch (error) {
    // @TODO: Instantiate possible Network error
    return { error };
  }
}
