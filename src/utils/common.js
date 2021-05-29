export const renderProp = (prop, props) => {
  if (!prop) {
    return null;
  }

  return typeof prop === 'function' ? prop(props) : prop;
};

export const meanMerge = (items) => {
  return items.map(i => Object.keys(i).map(key => [key, items[key]]));
}

const input = [
  {
    a: 4,
    b: {
      c: 5
    }
  },
  {
    a: 2,
    b: {
      c: 10
    }
  }
];

const output = {
  a: 3,
  b: {
    c: 7.5,
  }
};

const mean = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  let avg = arr[left];
  left += 1;

  while (left <= right) {
    const curr = left + 1
    avg += (arr[left] - avg) / curr;
    left += 1
  }


  return avg

};
