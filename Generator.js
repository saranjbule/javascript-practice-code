// Generator produce a sequence of values over time without storing them in memory all at once

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
 * Example 3 | Infinite Sequences
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

const arrGen = getArr([
  [10, [20, [30, [5], [3], [6]], [4]], [2]],
  [1, [3], 4],
]);

console.log(arrGen.next()); // {value: 0, done: false}
console.log(arrGen.next()); // {value: 1, done: false}
console.log(arrGen.next()); // {value: 2, done: false}

/**
 * Example 5 | Async Programming
 * In JavaScript, async functions can be used with generators to write non-blocking code,
 * particularly useful when dealing with APIs or I/O-bound tasks.
 */

async function* fetchData() {
  const urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
  ];

  for (const url of urls) {
    const response = await fetch(url);
    yield response.json();
  }
}

const gen = fetchData();
gen.next().then((data) => console.log(data.value));

/**
 * Examples of Generators
 * 
 * 1 -  Lazy Evaluation | values are only computed when needed, rather than all at once.
 *     Imagine having a dropdown which have (10000) n number of options we cannot load all the options at once
 *     so we load 100 (t) options on each scroll. (t < n always)
 *
 * 2 - Handling Large Data Sets
 *     When working with large data sets that can't fit in memory (like reading large files or querying databases),
 *     generators help by producing one item at a time, avoiding loading the entire data into memory.
 * 
 * 3 - Web Scraping with Pagination
       When scraping websites with pagination, generators allow you to handle one page of 
       results at a time instead of pulling all the data at once.
 *
 */
