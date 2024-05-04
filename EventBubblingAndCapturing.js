/**
 * Event Bubbling and Capturing/Trickling
 *
 * Event Bubbling and Event Capturing are two ways of event propogation in the DOM tree
 *
 * Event capturing also know as event trickling
 */

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener(
  "click",
  function () {
    console.log("Grand Parent");
  },
  false // true capturing
);

parent.addEventListener(
  "click",
  function () {
    console.log("Parent");
  },
  false // false bubbling
);

child.addEventListener(
  "click",
  function () {
    console.log("Child");
  },
  false // true capturing
);

// Grand parent > Child > Parent

`
When child is clicked
as child is a part of parent and parent is part of grandparent
it call all three methods subsequently 

when third parameter of addEventListener method

useCapture	| Optional (default = false).

false - The handler is executed in the bubbling phase.
i.e., console output => Child > Parent > Grand Parent

true - The handler is executed in the capturing phase.
i.e., console output => Grand Parent > Parent > child

Life Cycle of Events Listeners
1. First Capturing Cycle  => all capturing event gets executed
2. then Bubbling Cycle => all bubbling event gets executed
`;

// e.stopPropagation() // to stop propagation of DOM elements
