import { createWithRequestSagaDecorator } from '../effects/withRequest';

export const createWrapper = () => {
  const errorListeners = [];

  const addErrorListener = (listener) => {
    errorListeners.push(listener);
  };

  const removeErrorListener = (listener) => {
    errorListeners.splice(errorListeners.indexOf(listener), 1);
  };

  return {
    withRequest: createWithRequestSagaDecorator({ errorListeners }),
    addErrorListener,
    removeErrorListener
  };
};
