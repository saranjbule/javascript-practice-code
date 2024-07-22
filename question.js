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
console.log(x.name); // x // build-in method get the name of function
console.log(x.age); // undefined // age is not accessible outside

// function have predefined properties - name, length, prototype ...
x.category = 'xx'; // attaching a user defined property (category) to the JavaScript object (i.e., function)
console.log(x.category); // xx

x.name = 'newName'; // do not alter in-build property
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

// creating object using prototype of p1
const p2 = Object.create(p1);

console.log(p2); // {}
console.log(p2.name); // p1

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
