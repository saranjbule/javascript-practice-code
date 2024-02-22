/***
 * var keyword is function scope
 * let keyword is block scope
 */

// before setTimeout closure function run, i value get updated with 6
// as JS is synchronous single threaded language and it wait for NONE
function f0() {
  for (var i = 0; i < 6; i++) {
    setTimeout(function () {
      console.log(i); // 6 6 6...
    }, i * 1000);
  }

  console.log("hi f0");
}

f0();

// every setTimeoutFun hold unqiue value of i
function f() {

  function setTimeoutFun(i) {
    setTimeout(function () {
      console.log(i); // 0, 1, 2...
    }, i * 1000);
  }

  for (var i = 0; i < 6; i++) {
    setTimeoutFun(i);
  }

  console.log("hi f");
}

f();

// let is block scope which means
// with each callback function of setTimeout new i is associated with it
function f1() {
  for (let i = 0; i < 6; i++) {
    setTimeout(function () {
      console.log(i); // 0, 1, 2...
    }, i * 1000);
  }

  console.log("hi f1");
}

f1();

/**
 * SetTimeout doesn't guarented it will surely run after specific time but
 * it state it will wait for least specificed time
 */

console.log("start");

setTimeout(() => {
  console.log("setTimeout");
}, 4000);

const d = new Date();
let startTime = d.getTime();
const endTime = startTime + 7000;

// blocking the main thread
while (startTime < endTime) {
  const d = new Date();
  startTime = d.getTime();
}

console.log("end");