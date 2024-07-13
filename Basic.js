console.log('Hello Saranj');

const a1 = 10,
  b = 20;
console.log(a1, b); // 10 20

/**
 * Shallow Vs Deep Copy
 */

const xx = (y = [1]); // shallow copy
console.log(xx, y); // [1] [1]

xx.push(100);
console.log(xx, y); // [1, 100] [1, 100]

const array = [1, 2, [11, 12]];
const arrayX = [...array]; // copy at first layer
console.log(array == arrayX, array[2] == arrayX[2]); // false true

const arrayY = JSON.parse(JSON.stringify(array)); // data loss deep clone
console.log(array == arrayY, array[2] == arrayY[2]); // false false

JSON.stringify({ key: undefined }); // "{}"
JSON.stringify({ key: Symbol() }); // "{}"
JSON.stringify({ key: function () {} }); // "{}" same applicable to regex, date

const arrayZ = structuredClone(array); // or use loadash _clonedeep()
console.log(array == arrayZ, array[2] == arrayZ[2]); // false false

/**
 * Unpacking
 */

const [x0 = 'x0', x1 = 'x1', x2 = 'x2'] = xx;
console.log(x0, x1, x2); // [1, 100, 'x2']

// const [i0, i1] = 1;
// TypeError: 1 is not iterable

const [i0, i1] = 's';
console.log(i0, i1); // 's', undefined

const [ax, ...bx] = 'ssdfs';
console.log(ax, bx); // 's' ['s', 'd', 'f', 's']

const [az, ...bz] = [1, 2, 3];
console.log(az, bz); // 1 [2, 3]

// ... always return array of items

const [ay, by] = { 1: 'a', 2: 'b', 3: 'c', 4: 'd' };
console.log(ay, by); // TypeError: {(intermediate value)} is not iterable

console.log(2 ** 10); // 1024

console.log(parseInt(null)); // NaN
console.log(parseInt('')); // NaN

console.log(Number(null)); // 0
console.log(Number('')); // 0

/**
 * Binary <-> Number
 */

console.log(parseInt('100', 2)); // 4
console.log(parseInt(100, 2)); // 4

const number = 42;

// Number to binary
const binary = number.toString(2);
console.log(`Number to binary: ${number} -> ${binary}`); // Output: '101010'

// Binary to number
const numberBack = parseInt(binary, 2);
console.log(`Binary to number: ${binary} -> ${numberBack}`); // Output: 42

/**
 * Pass by assignment (Pass by value | Pass by reference)
 */

const x = [10, 20];

// pass by value
function f(arg) {
  arg = [1, 2]; // arg is now local to f which create new local binding with [1, 2]
}

// pass by reference
function f1(arg) {
  arg[0] = 30;
  arg.push(40);
}

f(x);
console.log(x); // [10, 20]

f1(x);
console.log(x); // [30, 20, 40]

/**
 * Falsy Values
 */

for (let i of [0, '', false, null, undefined, {}, []]) {
  console.log(i, Boolean(i));
}

/**
 * 0 false
 * "" false
 * false false
 * null false
 * undefined false
 * {} true
 * [] true
 */

const objLength = Object.keys({}).length;
const arrLength = [].length;

console.log(objLength, Boolean(objLength)); // 0 false
console.log(arrLength, Boolean(arrLength)); // 0 false

/**
 * string <-> char code
 */

console.log('A'.charCodeAt()); // 65 // default take 0 index
console.log(String.fromCharCode(65)); // A

/**
 * Array Methods
 */

const arr = [1, 2, 3];

console.log(arr.includes(2)); // true
console.log(arr.includes(20)); // false

const obj = { 10: 'a', 20: 'c' };

console.log(arr, Array.isArray(arr)); // true
console.log(obj, Array.isArray(obj)); // false

/**
 * Object Manipulation
 */

const d2 = {
  10: 'z',
  2: 'b',
  30: 'a',
};

const e = Object.entries(d2);
console.log(e);
// [[2, 'b'], [10, 'z'], [30, 'a']]

console.log(Object.keys(d2));
// [2, 10, 30]

console.log(Object.values(d2));
// ['b', 'z', 'a']

const d = {};
const a = [1, 2, 3];
d[a] = 120;
d[10] = a;

console.log(d); // {'1,2,3': 120, 10: [1, 2, 3]}

a.push(10);
console.log(d, a); // {'1,2,3': 120, 10: [1, 2, 3, 10]}  [ 1, 2, 3, 10 ]
// for keys in variable `a` reference is not stored but string conversion is stored
// for values in variable `a` reference is stored

console.log(d[a]); // undefined
console.log(d[[1, 2, 3]]); // 120
console.log(d['1,2,3']); // 120

const d1 = { 10: { 1: 100, 2: 200 } };
d1[20] = { 1: 20, 3: 40 };
console.log(d1); // { 10: { 1: 100, 2: 200 }, 20: { 1: 20, 3: 40 }}

d1[d] = 'val';
console.log(d1); // {10: {…}, 20: {…}, [object Object]: 'val'}

const i = 1,
  s = 'a',
  o = [1, 2],
  d3 = { 1: 's' };

const dict = {
  [i]: 'v1',
  [s]: 'v2',
  [o]: 'v3',
  [JSON.stringify(d3)]: 'v4',
};

console.log(dict); // { '1': 'v1', a: 'v2', '1,2': 'v3', '{"1":"s"}': 'v4' }

console.log(dict[1]); // v1 // by default convert to string
console.log(dict['1']); // v1
