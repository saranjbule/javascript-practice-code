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

const arrayY = JSON.parse(JSON.stringify(array)); // lossy deep clone
console.log(array == arrayY, array[2] == arrayY[2]); // false false

// data loss
JSON.stringify({ key: undefined }); // "{}"
JSON.stringify({ key: Symbol() }); // "{}"
JSON.stringify({ key: function () {} }); // "{}" same applicable to regex, date

const arrayZ = structuredClone(array); // or use loadash _clonedeep()
console.log(array == arrayZ, array[2] == arrayZ[2]); // false false

/**
 * Unpacking / Destructuring
 */
xx = [1, 100];
const [x0 = 'x0', x1 = 'x1', x2 = 'x2'] = xx;
// x0 = 'x0' is default value
console.log(x0, x1, x2); // [1, 100, 'x2']

// const [i0, i1] = 1;
// TypeError: 1 is not iterable

const [i0, i1] = 's';
console.log(i0, i1); // 's', undefined

// rest(...) operator always return array of items

const [ax, ...bx] = 'ssdfs';
console.log(ax, bx); // 's' ['s', 'd', 'f', 's']

const [az, ...bz] = [1, 2, 3];
console.log(az, bz); // 1 [2, 3]

// const [ay, by] = { 1: 'a', 2: 'b', 3: 'c', 4: 'd' };
// console.log(ay, by); // TypeError: {(intermediate value)} is not iterable

const { xxx, yyy, ...rest } = { xxx: 'a', yyy: 'b', 3: 'c', 4: 'd' };
console.log(xxx, yyy, rest); // a b {3: 'c', 4: 'd'}

console.log(2 ** 10); // 1024

console.log(parseInt(null)); // NaN
console.log(parseInt('')); // NaN

console.log(Number(null)); // 0
console.log(Number('')); // 0

/**
 * Conversion
 */
// Decimal -> hexadecimal, octal, binary
const hex = (100).toString(16); // "64"
const oct = (100).toString(8); // "144"
const bin = (100).toString(2); // "1100100"

// hex, oct, binary -> decimal
const dec0 = parseInt('64', 16); // 100
parseInt(64, 16); // 100
const dec1 = parseInt('144', 8); // 100
parseInt(144, 8); // 100
const dec2 = parseInt('1100100', 2); // 100
parseInt(1100100, 2);

const x = [10, 20];

function f(arg) {
  // arg declared is empty so by default var, var has function scope
  arg = [1, 2]; // var arg is now local to f which create new local binding with [1, 2]
  arg.push(40);
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
  console.log(i, Boolean(i), typeof i);
}

/**
 * 0 false number
 * "" false string
 * false false boolean
 * null false object
 * undefined false undefined
 * {} true object
 * [] true object
 */

const objLength = Object.keys({}).length;
const arrLength = [].length;
const arrLength2 = Object.keys([]).length;

console.log(objLength, Boolean(objLength)); // 0 false
console.log(arrLength, Boolean(arrLength)); // 0 false
console.log(arrLength2, Boolean(arrLength2)); // 0 false

console.log(Object.keys([10, 20])); // ['0', '1']

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
// for keys in object string conversion is stored (not reference)
// for values in object reference is stored

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

console.log(dict[1]); // v1 // keys in object by default get converted to string
console.log(dict['1']); // v1
