/***
* var keyword is global and function scope
* let keyword is block scope
*/

// before setTimeout closure function run, i value get updated with 6
// as JS is synchronous single threaded language
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