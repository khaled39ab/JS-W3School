// JavaScript Function Definitions


// Function Expressions
// A function expression can be stored in a variable:
const x = function (a, b) { return a * b };  //The function above is actually an anonymous function.
let z = x(4, 3); //this is  invoked/ call


// Function Hoisting

// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
// Hoisting applies to variable declarations and to function declarations.
// Because of this, JavaScript functions can be called before they are declared:
myFunction(5); //this will also work
function myFunction(y) {
    return y * y;
}


// Self-Invoking Functions   **IIFE (Immediately Invoked Function Expression) 

// A self-invoking expression is invoked (started) automatically, without being called.
// You have to add parentheses around the function to indicate that it is a function expression:

// function ex(){
//     console.log("hello function");
// }
// // ex();
(function () {
    console.log("Hello function");  // I will invoke myself
})();


// Functions are Objects

// The typeof operator in JavaScript returns "function" for functions.
// But, JavaScript functions can best be described as objects.
// JavaScript functions have both properties and methods.
// The arguments.length property returns the number of arguments received when the function was invoked:
function myFunction(a, b) {
    return arguments.length;
}
// console.log(myFunction());


// Arrow Functions

// Arrow functions allows a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets.

/*difference
Arrow functions do not have their own this. They are not well suited for defining object methods.
Arrow functions are not hoisted. They must be defined before they are used.
Using const is safer than using var, because a function expression is always constant value.*/

// ES5
var xy = function (x, y) {
    return x * y;
}
// ES6
const xyz = (x, y) => x * y;



console.log("---------------------------------------------------------------------");

/* JavaScript Function Parameters */


// Function Parameters and Arguments

/*Function parameters are the names listed in the function definition.
Function arguments are the real values passed to (and received by) the function.*/
function functionName(parameter1, parameter2, parameter3) {
    // code to be executed
}


// Default Parameters
function myFunction(x, y = 2) {
    // function code
}


// The Arguments Object

/*JavaScript functions have a built-in object called the arguments object.
The argument object contains an array of the arguments used when the function was called (invoked).
This way you can simply use a function to find (for instance) the highest value in a list of numbers:*/
const m = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
// Or create a function to sum all input values:
const n = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumAll(n));



// Arguments are Passed by Value

/*The parameters, in a function call, are the function's arguments.
JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
If a function changes an argument's value, it does not change the parameter's original value.
Changes to arguments are not visible (reflected) outside the function.*/

// Objects are Passed by Reference

/*In JavaScript, object references are values.
Because of this, objects will behave like they are passed by reference:
If a function changes an object property, it changes the original value.
Changes to object properties are visible (reflected) outside the function.*/


console.log("---------------------------------------------------------------------");
