/**
 * Callback Functions
 * - Function are first class citizens in javascript
 *
 * A programming language is said to have First-class functions
 * - if functions in that language are treated just like other variables.
 *
 * Properties of First Class Citizen, functions
 * - function can passed as an arguments to another function
 * - function can be returned from another function
 * - function can be stored into variable
 * - function can be stored into objects
 *
 * - this function are called as callback function
 *
 * - with the help of callback functions we can perform asynchronous operation in javascript
 */

const buttonClicked = () => {
  let count = 0;

  return () => {
    count++;
    console.log("button click", count); // 1 2 3 4 ... with each click
  }; // callback function
};

function bClick() {
  var b = 0;

  function bClickIncre() {
    b++;
    console.log("button click", b); // 1 2 3 4 ... with each click
  }

  return bClickIncre; // callback function
}

const button = document.getElementById("button");
bC = buttonClicked();
button.addEventListener("click", bC);

/**
 * Event Listerners
 * - event listeners are heavy as it forms closures and closure over consume memory i.e., Memory Leaks
 * - good practice is to remove event listeners after its use
 * - as all unused memeory get garbage collected by garbage collector
 */

/**
 * Callback Problems
 * - Problem 1: Callback Hell
 *   - callback inside callback inside callback (nested callback)
 *   - Pyramid of DOOM structure
 *   - code starts growing Horizonatally
 *
 * - Solution: Promise Chaning
 *
 *
 * - Problem 2: Inversion of control
 *   - loose control of our program
 *
 *   - we expect a function to call the callback function for us
 *   - (we have given all the control of a callback to that function)
 *   - (we are blindly trusting that function to call the callback and return result)
 *
 *   - Unexpected result may occurs
 *   - callback function might never get call
 *   - callback function get call twice
 *
 * - Solution: Promise
 *
 * - Results Unreadable, Unpredictiable and Unmaintainable code with callbacks
 */
