// Using Class
class Operator1 {
  constructor() {
    let count = 0;

    this.increment = function () {
      count++;
      console.log(count);
    };

    this.decrement = function () {
      count--;
      console.log(count);
    };
  }
}

// using function
function Operator2() {
  let count = 0;

  this.increment = function () {
    count++;
    console.log(count);
  };
 
  this.decrement = function () {
    count--;
    console.log(count);
  };
}

const op1 = new Operator1();
op1.increment();
op1.increment();
op1.decrement();

const op2 = new Operator2();
op2.increment();
op2.increment();
op2.decrement();