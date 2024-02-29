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
