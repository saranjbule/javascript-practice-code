/**
 * Encapsulation
 */
// object
const student = {
  // data/ property
  firstName: "saranj",
  lastName: "bule",

  // method/ behaviour
  getFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

console.log(student.firstName); // saranj
student.getFullName(); // saranj bule

/**
 * Constructor Function
 */
function Circle(r) {
  this.radius = r;

  this.drawCircle = function () {
    console.log(this);
  };
}

const c1 = new Circle(2);
c1.drawCircle(); // Circle {radius: 2, drawCircle: ƒ}

const c2 = new Circle(5);
c2.drawCircle(); // Circle {radius: 5, drawCircle: ƒ}

/**
 * Constructor using class
 */
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

const op1 = new Operator1();
op1.increment(); // 1
op1.increment(); // 2
op1.decrement(); // 1

/**
 * Factory Function
 */
function Circle1(r) {
  return {
    r, // r: r, ES6 feature
    drawCircle: function () {
      console.log(this);
    },
  };
}

const c1_1 = Circle1(2);
c1_1.drawCircle(); // {r: 2, drawCircle: ƒ}

const c2_2 = Circle1(5);
c2_2.drawCircle(); // {r: 5, drawCircle: ƒ}

/**
 * Abstraction
 */

function Employee(name) {
  // private variable
  let category = "xx";

  // public variable
  this.name = name;

  // private method
  const getCategoryInternal = function () {
    console.log(category);
  };

  // public method
  this.getName = function () {
    console.log(this.name);
  };

  // getter/ accessor method
  this.getCategory = function () {
    getCategoryInternal();
  };

  // setter/ mutator method
  this.setCategory = function (val) {
    category = val;
  };
}

const e = new Employee("saranj");
e.getName(); // saranj
console.log(e.category) // undefined
e.getCategoryInternal(); // Uncaught TypeError: e.getCategoryInternal is not a function
e.getCategory(); // xx
e.setCategory('yy');
e.getCategory(); // yy