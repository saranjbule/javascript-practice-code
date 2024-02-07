/**
 * Async & Await
 * - Async and Await are used to handled promises
 * - Async is a keyword which is used to created async function
 * - Await keyword can only be used inside an async functions and infront of promise
 */

// always return promise
async function asyncFun() {
  return true; // it will automatically wrap return thing into Promise
}

async function asyncFun1() {
  return new Promise((res, rej) => res("done")); // it can return Promise (no wrapping of Promise)
}

console.log(asyncFun()); // Promise
console.log(asyncFun1()); // Promise

const promise = new Promise((resolve, reject) => {
  resolve("Resolved Promise");
});

// old way
function handlePromiseOld() {
  promise.then((res) => console.log(res));
  console.log("in Old");
}

handlePromiseOld();
// Output -
// in old
// Resolved Promise

// new way
async function handlePromiseNew() {
  const result = await promise;
  console.log(result);
  console.log("in new");
}

// function execution is stop till promise is resolved 
// i.e., function execution context is pop out of call stack
// once resolved function continues from where it was left

handlePromiseNew();
// Output -
// Resolved Promise
// in new
