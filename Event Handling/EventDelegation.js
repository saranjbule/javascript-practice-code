/**
 * Event Delegation
 *
 * Just because Event bubbling exists event delegation also exists
 *
 * Problem Statement -
 * Generally in a website when we need to add multipe event listeners or
 * when event listeners need to added dynamically
 * so instead of adding event's listeners on multiple child component
 * we can add it directly on the single parent component
 * because of events bubbling up so all child component events get's
 * propogates to the parent component
 */

const childMapping = {
  child1: () => console.log("Child 1"),
  child2: () => alert("i am second child"),
  child3: () => {
    throw "from 3 child";
  },
};

const grandparent = document.querySelector("#grandparent");
const grandparentClickEvent = (e) => {
  const ID = e.target.id;
  console.log(ID);
  if (Object.keys(childMapping).includes(ID)) {
    childMapping[ID]();
  }
};

grandparent.addEventListener("click", grandparentClickEvent);

const parent = document.querySelector("#parent");

parent.addEventListener("keyup", (e) => {
  const tag = e.target.tagName;
  const upperCaseFlag = e.target.dataset.uppercase;

  if (tag === "INPUT" && upperCaseFlag !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

/**
 * Advantages
 * - save lot of memory | increase the performance
 * - less lines of code
 * - ease in DOM manipulation
 *
 * Disadvantages
 * - all events are not bubbled up (blur, focus, resizing of the window)
 * - if used stop propogation in any of the child then
 * - we might break our code as event no longer gets bubble up
 */
