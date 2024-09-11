/*
 * Example 1
 */
const getName = function* () {
  yield 'saranj';
};

const nameGen = getName();

console.log(nameGen.next()); // {value: 'saranj', done: false}
console.log(nameGen.next()); // {value: undefined, done: true}
console.log(nameGen.next()); // {value: undefined, done: true}

/*
 * Example 2
 */
const getName2 = function* () {
  while (true) yield 'saranj';
};

const nameGen2 = getName2();

console.log(nameGen2.next()); // {value: 'saranj', done: false}
console.log(nameGen2.next()); // {value: 'saranj', done: false}
console.log(nameGen2.next()); // {value: 'saranj', done: false}

/*
 * Example 3
 */
const getNum = function* () {
  let n = 0;
  while (true) yield n++;
};

const numGen = getNum();

console.log(numGen.next()); // {value: 0, done: false}
console.log(numGen.next()); // {value: 1, done: false}
console.log(numGen.next()); // {value: 2, done: false}

// yield* is used to call generator in recursive order

/*
 * Example 4
 */
const getArr = function* (arr) {
  for (let i of arr) {
    if (typeof i === 'number') yield i;
    else yield* getArr(i);
  }
};

const arrGen = getArr([[10, [20, [30, [5], [3], [6]], [4]], [2]], [1, [3], 4]]);

console.log(arrGen.next()); // {value: 0, done: false}
console.log(arrGen.next()); // {value: 1, done: false}
console.log(arrGen.next()); // {value: 2, done: false}