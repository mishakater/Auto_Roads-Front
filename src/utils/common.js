export const renderProp = (prop, props) => {
  if (!prop) {
    return null;
  }

  return typeof prop === 'function' ? prop(props) : prop;
};
