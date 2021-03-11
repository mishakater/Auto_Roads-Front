export const identity = i => i;

export const compose = (...functions) => {
  if (!functions.length) {
    return identity;
  }

  if (functions.length === 1) {
    return functions[0];
  }

  return functions.reduce((a, b) => (...args) => a(b(...args)));
};

export const pipe = (...functions) => {
  if (!functions.length) {
    return identity;
  }

  if (functions.length === 1) {
    return functions[0];
  }

  return functions.reduce((a, b) => (...args) => b(a(...args)));
};

export const call = (...args) => (f) => f?.(...args);

export const sequence = (...functions) => (...args) => functions.map(call(...args));

export const by = (...args) => {
  const argsClone = [...args];
  const value = argsClone.pop();
  const selector = argsClone.pop();

  return ({ [selector || 'id']: found }) => value === found;
};

export const display = (data, render) => render(data);
