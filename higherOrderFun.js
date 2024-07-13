/**
 * Higher Order Functions exists to assist other functions
 */

/**
 * Functional Programming
 * divided a larger function into smaller functions
 * each function has smaller unit of work to perform
 * which brings -
 * reusability, modularity, readability, composition of functions
 */

const radius = [10, 20, 30, 40, 50];

// callback functions
function areaCircle(r) {
  return Math.floor(Math.PI * r * r);
}

function circumference(r) {
  return Math.floor(2 * Math.PI * r);
}

function diameter(r) {
  return Math.floor(2 * r);
}

// higher order function
function calculate(func) {
  const result = [];
  for (let i = 0; i < radius.length; i++) {
    result.push(func(radius[i]));
  }
  console.log(result);
}

calculate(areaCircle);
calculate(diameter);
calculate(circumference);

// MAP, FILTER and REDUCE are Higher order functions

// MAP - used to transform the whole array
const add2 = radius.map((ele) => ele + 2);
console.log(add2);

// FILTER - used to filter out/ eliminates values from array
const oddVal = radius.filter((ele) => ele % 2);
console.log(oddVal);

// REDUCE - used to take all the values of array and return single value
const sum = radius.reduce((acc, curr) => acc + curr);
console.log(sum);

console.log(radius.reduce((acc, curr) => (acc > curr ? acc : curr)));

const max = radius.reduce((max, curr) => {
  if (curr > max) {
    return curr;
  }
  return max;
});

console.log(max);

/**
 * where
 * a = accumulator
 * b = element at index
 * c = index
 * d = array
 */

// current (20) start from second index (i = 1) and acc (10) is first index element (i = 0)
radius.reduce((a, b, c, d) => {
  console.log(a, b, c, d);
});

// current (10) start from first index (i = 0) and acc is 0
radius.reduce((a, b, c, d) => {
  console.log(a, b, c, d);
}, 0);

/**
 * Map, reduce and filter examples
 */

const user = [
  {
    name: 'xxx',
    age: 24,
    x: false,
  },
  {
    name: 'yyy',
    age: 2,
    x: false,
  },
  {
    name: 'zzz',
    age: 10,
    x: true,
  },
  {
    name: 'ppp',
    age: 21,
    x: false,
  },
  {
    name: 'qqq',
    age: 10,
    x: false,
  },
];

const fullName = user.map((item) => `${item.name}@${item.age}`);
console.log(fullName);

const ageGroup = {};
user.map((item) => {
  const age = item.age;
  if (ageGroup[age]) {
    ageGroup[age] += 1;
  } else {
    ageGroup[age] = 1;
  }
});

console.log(ageGroup);

const ageGroupR = user.reduce((acc, curr) => {
  const age = curr.age;
  if (acc[age]) {
    acc[age] += 1;
  } else {
    acc[age] = 1;
  }
  return acc;
}, {});

console.log(ageGroupR);

// chaining
const personAgeGreater20 = user
  .filter((item) => item.age > 20)
  .map((item) => item.name);

console.log(personAgeGreater20);

const personAgeGreater20R = user.reduce((acc, curr) => {
  if (curr.age > 20) {
    acc.push(curr.name);
  }
  return acc;
}, []);

console.log(personAgeGreater20R);
