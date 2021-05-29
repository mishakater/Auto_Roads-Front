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

  return avg;
};

const mf = (arr) => arr.reduce((avg, x, i) => avg + (x - avg) / (i + 1), arr[0]);

const mergeMean = (xs) => {
  return xs.reduce((avg, x, i) => {
    return Object.keys(x).reduce((acc, key) => {
      if (typeof x[key] === 'object') {
        return {
          ...acc,
          [key]: mergeMean(xs.map(i => i[key]))
        };
      }

      return {
         ...acc,
        [key]: avg[key] + (x[key] - avg[key]) / (i + 1),
      };
    }, {})
  }, xs[0]);
};


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

console.log(mergeMean(input));
