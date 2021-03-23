import request from '../sagas/request';
import { createResponseDispatcher } from '../utils';

export const createWithRequestSagaDecorator = ({ errorListeners }) => saga => {
  return function* (action, ...other) {
    return yield saga(
      {
        action,
        dispatchResponse: createResponseDispatcher(action, errorListeners),
        request
      },
      ...other
    );
  };
}
