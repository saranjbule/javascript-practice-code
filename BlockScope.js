// Block
{
  // Compound Statement -
  // Combining multiple JS statements into a group
}

// let and const are blocked scope
// var has global & function scope

{
  var a = 1;
  let b = 2;
  const c = 3;
  // Inside: a, b, c are accessible
}
// Outside: only a is accessible

// Shadowing
var x = 10;
{
  var x = 100;
  console.log(x); // 100
}
console.log(x); // 100
