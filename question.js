const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

startButton.addEventListener('click', startInterval);
stopButton.addEventListener('click', stopInterval);

// component to show current time to user

let interval = null;
function startInterval() {
  interval = setInterval(() => {
    const d = new Date();
    console.log(d.toTimeString());
  }, 1000);
}

function stopInterval() {
  clearInterval(interval);
}

// predict output
// QUE: 1
console.log(1);
function foo() {
  console.log(2);
  setTimeout(() => console.log('3/1'), 1000);
  setTimeout(() => console.log('3/0'), 0);
  console.log(4);
}
console.log(5);
foo();
console.log(6);

// 1 5 2 4 6 3/0 3/1

// QUE: 2
const person = {
  name: 'saranj',
  print: () => {
    console.log(this.name); // undefined
    // arrow function do not have their own this they provide reference of this with surrounding env (window)
    // borrow this from their surrouding env
    // hence window do not have any name property (window.name) into it
  },
  print1: function () {
    console.log(this.name); // saranj // this refer to person object
  },
};

person.print();
person.print1();

// print 1 to 5 after 1sec each

function print() {
  let count = 0;
  const interval = setInterval(() => {
    if (count < 5) {
      console.log(++count);
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

print();

// Everything in javascript is an object

function x(para) {
  const n = 'saranj';
  const age = 24;
  console.log(n, para);
}

x('bule'); // saranj bule
console.log(x); // f
console.log(x.name); // x // build-in method to get the name of function
console.log(x.age); // undefined // age is not accessible outside

console.log(x.length); // 1 | number of parameters (non-argument parameters)

// function have predefined properties - name, length, prototype ...
x.category = 'xx'; // attaching a user defined property (category) to the JavaScript object (i.e., function)
console.log(x.category); // xx

x.name = 'newName'; // can not alter in-build property
console.log(x.name); // x

x.category = 'yy'; // can alter user-defined property
console.log(x.category); // yy

console.log(x.prototype); // constructor object

// The Object.create() method creates a new object using the prototype of the given object.

const p1 = {
  name: 'p1',
  getName: function () {
    console.log(this.name);
  },
};

console.log(p1); // {name: 'p1', getName: f}
console.log(p1.name); // p1
p1.getName(); // p1

// creating object using prototype of p1
const p2 = Object.create(p1);

console.log(p2); // {}
console.log(p2.name); // p1
p2.getName(); // p1

// predict output

function createUser(name) {
  const userObj = Object.create(userFunctionStore);
  userObj.name = name;
  return userObj;
}

const userFunctionStore = {
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

const user1 = createUser('Foo');
console.log(user1); //{name: 'Foo'}
console.log(user1.name); // Foo
user1.greet(); // Hello Foo

// predict op

fun1(); // function declaration
console.log(fun1); // fn (function declaration)
// function declaration have precedence over function expression

/**
 * Hoisting: Function declarations are hoisted, function expressions are not.
 */

/** order doesn't matter */
var fun1 = function () {
  // let & const doesn't work
  console.log('In function expression');
};

function fun1() {
  console.log('In function declaration');
}
/****/

fun1(); // function expression
// function expression overrides function declaration variable in execution context
console.log(fun1); // fn (function expression)

/**
 * Precedence: Function expressions can override
 * function declarations with the same name within a scope.
 */

let variable = 0;

const p = new Promise((resolve, reject) => resolve('hello')).then(console.log); // asynchronous operation

const pp = new Promise((resolve, reject) => resolve(++variable)).then(
  console.log(variable) // synchronous operation
);

console.log(++variable); // 1 2
console.log('Here'); // Here hello

let i = 0; // with var as well, same result

Promise.resolve(++i) // synchronous operation
  .then(console.log); // asynchornous operation, take value from resolved method 1

console.log(++i); // 2
// 2 1

let ii = 0;

Promise.resolve(ii++).then(console.log); // 0

console.log(++ii); // 2
// 2 0

// Define output

setTimeout(() => console.log(1));

Promise.resolve().then(() => console.log(2));

Promise.resolve().then(() => setTimeout(() => console.log(3)));

new Promise(() => console.log(4));

setTimeout(() => console.log(5));

console.log(0);

// 4 0 2 1 5 3

// Define output

setTimeout(() => console.log(1));

Promise.resolve().then(() => console.log(2));

Promise.resolve(console.log(6)).then(() => setTimeout(() => console.log(3)));

new Promise(() => console.log(4));

setTimeout(() => console.log(5));

console.log(0);

// 6 4 0 2 1 5 3

/**
 * Guess Output
 */
// Problem 1
var a = 10; // variable

delete a; // false
console.log(a); // 10

b = 10; // property

delete b; // true
console.log(b); // Reference Error

// Problem 2
let hero = {
  powerLevel: 99,
  getPower() {
    return this.powerLevel; // 99
  },
};

console.log(hero.getPower()); // 99

let getPower = hero.getPower;

console.log(getPower()); // undefined
// this is not bound to hero object, getPower is just a standalone function

var hero2 = { powerLevel: 1, getPower };
hero2.getPower(); // 1

// Arrays [] and objects {} are compared by reference in JavaScript not by their content
const a = { 1: 'a' }; // same applicable for [1]

const b = { 1: 'a' }; // [1]

const c = a;

console.log(a == b); // false
console.log(a === b); // false

console.log(JSON.stringify(a) == JSON.stringify(b)); // true
console.log(JSON.stringify(a) === JSON.stringify(b)); // true

console.log(a == c); // true
console.log(a === c); // true

// Implicity Type Coercion by ==
console.log(1 == true); // true
console.log(1 === true); // false
console.log(0 == false); // true
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log([1, 2] + [3, 4]); // "1, 23, 4"

console.log([1, 2] - [3, 4]); // NaN

/**
 * Object {} - Pairtially Ordered
 * For string keys, it maintains insertion order
 * except for integer-like keys, which are sorted numerically.
 */
const obj = {};

obj['b'] = 'b';
obj['a'] = 'a';
obj['2'] = '2';
obj['1'] = '1';
obj[0] = 0;

console.log(obj);
// { '0': 0, '1': '1', '2': '2', b: 'b', a: 'a' }

/**
 * Map - Ordered | unorderd map
 * Always maintains insertion order for all keys.
 */
const map = new Map();

map.set('b', 'b');
map.set('a', 'a');
map.set('2', '2');
map.set('1', '1');
map.set(0, 0);

console.log(map);
// Map(5) { 'b' => 'b', 'a' => 'a', '2' => '2', '1' => '1', 0 => 0 }

/**
 * Predict Output
 */
// QUE 1

function f() {
  let a = (b = c = 0);
  a++;
  return a;
}

f();

console.log(typeof a); // undefined | a is declared with let (block scoped)
console.log(typeof b); // number | b is not implicitly declared hence attached to global object (Window)

// QUE 2

console.log([] == ''); // true
console.log([] == ![]); // true | type coercion
/**
 * [] → true
 * ![] → false
 * [] → "" → 0
 * false == [] → 0 == 0 → true
 */

console.log([] === ![]); // false | strick equality
// two object are never equal in javascript as JS compare object by reference and not by value

d = {};
d['constructor']; // result is function not undefined

d = Object.create(null);
d['constructor']; // as expected
/**
 * avoiding the prototype chain,
 * so keys like constructor, __proto__, toString, etc., are just regular properties
 * — no inherited behavior
 */
