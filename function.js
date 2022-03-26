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
console.log(myFunction(5, 6));


// Arrow Functions

// Arrow functions allows a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets.

// ES5
var xy = function (x, y) {
    return x * y;
}
// ES6
const xy = (x, y) => x * y;