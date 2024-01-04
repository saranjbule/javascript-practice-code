/**
 * wherever an Execution Context is created a Lexical Enviornment is also created.
 * Lexical env is Local memory along with the lexical env of its parent
 * Lexical Env = local memory + lexical env of parent
 * 
 * function b is lexical inside function a
 * function a is lexical inside global scope 
 * 
 * Chain of Lexical env is Scope Chain
 */

function a() {
  b();

  function b() {
    console.log(x); // 10
  }
}

a(); // undefined
var x = 10; 
a(); // 10
