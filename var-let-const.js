//++++++++++++++++++++++++++++++++++++++
//==============   Let  ================
//++++++++++++++++++++++++++++++++++++++

let x = "John Doe";
let x = 0;  // SyntaxError: 'x' has already been declared

//=================== let IN block scope ===================
{
    let x = 2;
}
  // x can NOT be used outside of block

{
    var x = 2;
}
  // But x can be used outside of block

var x = 10;
// Here x is 10
{
var x = 2;
// Here x is 2
}
// Here x is 2

let x = 10;
// Here x is 10
{
let x = 2;
// Here x is 2
}
// Here x is 10

var x = 2;    // Allowed
let x = 3;    // Not allowed
{
let x = 2;    // Allowed
let x = 3     // Not allowed
}
{
let x = 2;    // Allowed
var x = 3     // Not allowed
}

let x = 2;    // Allowed
{
let x = 3;    // Allowed
}
{
let x = 4;    // Allowed
}

//===============  Let Hoisting  ==================

carName = "Volvo"; 
var carName; //This is OK:

carName = "Saab";
let carName = "Volvo"; //This will error


//++++++++++++++++++++++++++++++++++++++
//============== Const  ================
//++++++++++++++++++++++++++++++++++++++

const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
// console.log(PI);

const PI;
PI = 3.14159265359; //This will give an error
// console.log(PI);

const cars = ["Saab", "Volvo", "BMW"]; // can create a constant array:
cars[0] = "Toyota"; // You can change an element:
cars.push("Audi"); // You can add an element:
cars = ["Toyota", "Volvo", "Audi"]; //But cannot reassign the array

//+++++++++++++++ In Block Scope ++++++++++++++++++++

const x = 10; // Here x is 10
{
const x = 2; // Here x is 2
}
// Here x is 10

var x = 2;     // Allowed
var x = 3;     // Allowed
x = 4;         // Allowed

var x = 2;     // Allowed
const x = 2;   // Not allowed
{
let x = 2;     // Allowed
const x = 2;   // Not allowed
}
{
const x = 2;   // Allowed
const x = 2;   // Not allowed
}

const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed
{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}

const x = 2;       // Allowed
{
  const x = 3;   // Allowed
}
{
  const x = 4;   // Allowed
}

//==============   Const Hoisting   ===============

carName = "Volvo";
var carName; //This is ok

alert (carName);
const carName = "Volvo"; // This is error