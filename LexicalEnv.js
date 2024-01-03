/**
 * wherever an Execution Context is created a Lexical Enviornment is also created.
 * Lexical Enviornment is Local memory along with the lexical enviornment of parent
 * Lexial Env = local memory + lexical env of parent
 */

function a() {
  b();

  function b() {
    console.log(x); // 10
  }
}

// a(); // ReferenceError: x is not defined
x = 10;
a();
