function Operator() {
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

const op = new Operator();
op.increment();
op.increment();
op.decrement();