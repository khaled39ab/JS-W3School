// JavaScript Closures

/* JavaScript variables can belong to the local or global scope.
Global variables can be made local (private) with closures. */

// Global Variables
// A function can access all variables defined inside the function, like this:
function myFunction() {
  let a = 4;  //a is a local variable
  return a * a;
}

// But a function can also access variables defined outside the function, like this:
let a = 4;  //a is a global variable
function myFunction2() {
  return a * a;
}



// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
function myFunction3() {
  a = 4;
}