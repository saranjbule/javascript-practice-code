/**
 * Callback Functions
 * - Function are first class citizens in javascript
 * - function can passed as an arguments to another function
 * - this function are called as callback function
 * - with the help of callback functions we can perform asynchronous operation in javascript
 */

const buttonClicked = () => {
  let count = 0;

  return () => {
    count++;
    console.log('button click', count); // 1 2 3 4 ... with each click
  };

};

function bClick() {
  var b = 0;

  function bClickIncre() {
    b++;
    console.log('button click', b); // 1 2 3 4 ... with each click
  }

  return bClickIncre;
}

const button = document.getElementById("button");
bC = buttonClicked();
button.addEventListener("click", bC);

/**
 * Event Listerners
 * - event listeners are heavy as it forms closures and closure over consume memory
 * - good practice is to remove event listeners after its use 
 * - as all unused memeory get garbage collected by garbage collector
 */