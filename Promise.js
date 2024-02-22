/**
 * Promise
 * - Promise are used to handle Async operations in Javascript
 * - The Promise object represents the eventual completion (or failure) of an asynchronous operation
 *
 * - Promise object consists of Promise State and Promise Result
 *
 * - Promise State = Shows the state of a promise,
 * - initially it show pending state then change it to fullfilled or rejected state
 *   - Pending | Fullfilled | Rejected
 *
 * - Promise Result = Used to store data returned by promise,
 * - initially it is undefined
 *
 * - Promise Object are immutable
 */

/** 
 * Example
 * 
const cart = ["shirt", "pant", "chair", "bag", "shoes"];

// passing callback function to another function

API.createOrder(cart, function (orderId) {
  API.proceedToPayment(orderId, function (paymentId) {
    API.orderSummary(paymentId, function () {
      //...
    });
  });
});

// attaching callback function to promise object
// a callback function is attach to promise object with .then() (method/ function)
// successful callback method = .then()
// failure callback method = .catch()

const promiseObj = createOrder(cart);

promiseObj
  .then(function (orderId) {
    return proceedToPayment(orderId); // inorder to flow data below the chain add return
  })
  .then(function (paymentId) {
    return orderSummary(paymentId);
  });
  .catch(() => {
    console.log('Handles all errors of .then() above it')
  })
  .then(() => {
    console.log('get executed no matter what')
  });

// with promise we have control of the program
// promise gives guarantee that once the data is available in promise object
// then only once call the callback function
*/

const API = "https://api.github.com/users/saranjbule";

// by default fetch returns promise

/**
 * Consuming Promise ***
 */
const result = fetch(API).then((data) => {
  console.log(data);
});

console.log(result); // show promise in pending state as JS waits for None

/**
 * Producing Promise ***
 */
function tryPromise(data = null) {
  const promise = new Promise((resolve, reject) => {
    if (data) {
      setTimeout(() => {
        resolve(data);
      }, 5000);
    } else {
      reject("Promise Rejected");
    }
  });
  return promise;
}

const p = tryPromise("XX")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

console.log(p);

const p1 = tryPromise()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

console.log(p1);
