import axios from 'axios';
import { API_URL } from '../constants';

const makeApiRequest = (config) => axios({
  ...config
});

const ApiService = {
    call: (
      method = 'get',
      endpoint,
      body,
      params,
      headers,
      responseType,
      onUploadProgress,
  disableTimeout = false
) => makeApiRequest({
  method,
  url: API_URL + endpoint,
  data: body,
  params,
  headers,
  responseType,
  onUploadProgress,
  timeout: disableTimeout ? undefined : 10000
})
};

export default ApiService;
