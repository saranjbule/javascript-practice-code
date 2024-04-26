/**
 * Function borrowing methods
 *
 * CALL - is used for function borrowing
 * APPLY - is same as call (function borrowing), the only difference is the way of passing the arguments (array of arguments)
 * BIND - is used for binding a method with an object, which can be invoked/ used later
 */

/**
 * Value of this keyword can be tweak by call, apply and bind methods
 */

const person1 = {
  firstName: "saranj",
  lastName: "bule",
  getName: function (hometown = "nowhere") {
    console.log(this.firstName + " " + this.lastName + " " + hometown);
  },
};

person1.getName(); // saranj bule nowhere

const person2 = {
  firstName: "xxx",
  lastName: "yyy",
};

person1.getName.call(person2); // xxx yyy nowhere

person1.getName.call(person2, "sausar"); // xxx yyy sausar

person1.getName.apply(person2, ["somewhere"]); // xxx yyy somewhere

const getNameP2 = person1.getName.bind(person2);

getNameP2(); // xxx yyy nowhere

console.log(getNameP2); // function getName with this keyword pointing to person2

/**
 * Currying using bind method
 */

const multiply = (a, b, c) => a * b * c;

const multiply1 = multiply.bind(this, 1);
const multiply2 = multiply1.bind(this, 2);
const multiply3 = multiply2.bind(this, 3);

console.log(multiply3()); // 6
console.log(multiply2(10)); // 20

const multiplyX = multiply.bind(this, 10, 20, 30); // 6000
console.log(multiplyX());

const multiplyY = multiply.bind(this);
console.log(multiplyY(5, 2, 1)); // 10

/**
 * Pollyfill for bind : Browser fallback for bind method | if browser doesn't support bind method
 */

const user = {
  name: "saranj",
  section: "A",
};

function getDetail(address, grade, grade2) {
  console.log(
    `Name is ${this.name} + 
    Section is ${this.section} +  
    Address ${address} + 
    G1 ${grade} + 
    G2 ${grade2}`
  );
}

const userGetDetail = getDetail.bind(user);
userGetDetail("NGP", "Z", "p");

/**
 * this = function (userGetDetail)
 * obj = object (user)
 * args = array of arguments
 */
function myBind(obj) {
  return (...args) => {
    this.apply(obj, args);
  };
}

Function.prototype.myBind = myBind;

const userGetDetail2 = getDetail.myBind(user);

userGetDetail2("bgl", "A", "q");
userGetDetail2("jmu", "B", "r");
userGetDetail2("kol", "C", "s");
userGetDetail2("punjab", "D", "t");
