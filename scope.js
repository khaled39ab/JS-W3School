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



