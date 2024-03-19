const x = [10, 20],
  y = 20;
let z = 11,
  p = 21;

console.log(x, y, z, p);

// pass by assignment => pass by value + pass by reference
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
console.log(x);
// [1, 2]

f1(x);
console.log(x);
// [30, 2]
// [30, 2, 40]

for (let i of [0, "", false, null, undefined, {}, []]) {
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

console.log("A".charCodeAt(0)); // 65
console.log(String.fromCharCode(65)); // A

const arr = [1, 2, 3];
const obj = { 10: "a", 20: "c" };

console.log(arr.includes(2)); // true
console.log(arr.includes(20)); // false

console.log(arr, Array.isArray(arr)); // true
console.log(obj, Array.isArray(obj)); // false

const d = {};
const a = [1, 2, 3];
d[a] = 120;
d[10] = a;

console.log(d);

const d1 = { 10: { 1: 100, 2: 200 } };
d1[20] = { 1: 20, 3: 40 };
console.log(d1);

const d2 = {
  10: "z",
  2: "b",
  30: "a",
};

const e = Object.entries(d2);
console.log(e);
// [[2, 'b'], [10, 'z'], [30, 'a']]

const sortByKeys = (item1, item2) => item1[0] - item2[0];
e.sort(sortByKeys);
console.log(e); // [[2, 'b'], [10, 'z'], [30, 'a']]

const sortByVals = (item1, item2) =>
  item1[1].charCodeAt(0) - item2[1].charCodeAt(0);
e.sort(sortByVals);
console.log(e); // [[30, 'a'], [2, 'b'], [10, 'z']]
