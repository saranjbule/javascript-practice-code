class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
const n6 = new Node(6);
const n7 = new Node(7);

n1.left = n2;
n1.right = n3;
n2.left = n7;
n2.right = n4;
n3.left = n5;
n3.right = n6;

/**
 * Digonal Traversal Tree
 */

function digonalTraversal(root, result = null, index = 0) {
  if (!root) return;

  result ||= [];

  if (result[index] === undefined) {
    result[index] = [root.val];
  } else {
    result[index].push(root.val);
  }

  digonalTraversal(root.left, result, index + 1);
  digonalTraversal(root.right, result, index);

  return result;
}

console.log(digonalTraversal(n1));

/**
 * Boundary Traversal
 */

function isLeaf(root) {
  if (root && root.right === null && root.left === null) {
    return true;
  }

  return false;
}

function leftTraversal(root, result = null) {
  if (!root) return;

  result ||= [];

  if (!isLeaf(root)) result.push(root.val);

  if (root.left) {
    leftTraversal(root.left, result);
  } else {
    leftTraversal(root.right, result);
  }

  return result;
}

function rightTraversal(root, result = null) {
  if (!root) return;

  result ||= [];

  if (!isLeaf(root)) result.push(root.val);

  if (root.right) {
    rightTraversal(root.right, result);
  } else {
    rightTraversal(root.left, result);
  }

  return result;
}

function leafTraversal(root, result = null) {
  if (!root) return;

  result ||= [];

  if (isLeaf(root)) result.push(root.val);

  leafTraversal(root.left, result);
  leafTraversal(root.right, result);

  return result;
}

const leaf = leafTraversal(n1);
const left = leftTraversal(n1);
const right = rightTraversal(n1.right);

console.log([...left, ...leaf, ...right]);
