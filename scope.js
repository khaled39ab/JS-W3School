// JavaScript has 3 types of scope:

// Block scope
// Function scope
// Global scope


// Block Scope
// Variables declared inside a { } block cannot be accessed from outside the block
{
    {
        let x = 2;
    }
    // x can NOT be used here
}

// Local Scope
// Variables declared within a JavaScript function, become LOCAL to the function
{
// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName
}

// Function Scope
// JavaScript has function scope: Each function creates a new scope
{
    function myFunction1() {
        var carName = "Volvo";   // Function Scope
      }
    function myFunction2() {
        let carName = "Volvo";   // Function Scope
    }
    function myFunction3() {
        const carName = "Volvo";   // Function Scope
    }
}

// Global JavaScript Variables
// A variable declared outside a function, becomes GLOBAL
{
    let carName = "Volvo";
    // code here can use carName
    
    function myFunction() {
    // code here can also use carName
    }
}

// Global Scope
// Variables declared Globally (outside any function) have Global Scope.
// Global variables can be accessed from anywhere in a JavaScript program.
// Variables declared with var, let and const are quite similar when declared outside a block
{
    var x = 2;       // Global scope
    let y = 2;       // Global scope
    const z = 2;       // Global scope
}