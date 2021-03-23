export const selector = (reducerKey, path) => store =>
  path.split('.').reduce((store, part) => {
    if (!store) {
      return store;
    }

    return store[part];
  }, store[reducerKey]);
