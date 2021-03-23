import axios from 'axios';

const makeApiRequest = (config) => axios({
  ...config
});

export const ApiService = {
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
  url: endpoint,
  data: body,
  params,
  headers,
  responseType,
  onUploadProgress,
  timeout: disableTimeout ? undefined : 10000
})
};
