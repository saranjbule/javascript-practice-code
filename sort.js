const d2 = {
  10: 'z',
  2: 'b',
  30: 'a',
};

const e = Object.entries(d2);
console.log(e); // [[2, 'b'], [10, 'z'], [30, 'a']]

const sortByKeys = (item1, item2) => item1[0] - item2[0];
e.sort(sortByKeys);
console.log(e); // [[2, 'b'], [10, 'z'], [30, 'a']]

const sortByVals = (item1, item2) =>
  item1[1].charCodeAt() - item2[1].charCodeAt();
e.sort(sortByVals);
console.log(e); // [[30, 'a'], [2, 'b'], [10, 'z']]

const arr = [
  'a',
  5,
  'A',
  12,
  'p',
  101,
  'Q',
  'z',
  'Z',
  10,
  'C',
  1,
  3,
  2,
  'L',
  5,
];

const result = arr.sort((a1, a2) => {
  const t1 = typeof a1;
  const t2 = typeof a2;

  if (t1 === 'number' && t2 === 'number') {
    return a1 - a2;
  }

  if (t1 === 'string' && t2 === 'string') {
    return a1.charCodeAt(0) - a2.charCodeAt(0);
  }

  if (t1 === 'number') {
    return -1;
  }

  return 1;
});

console.log(result); // [ 1,   2,   3,   5,   5,   10, 12,  101, 'A', 'C', 'L', 'Q', 'Z', 'a', 'p', 'z']
