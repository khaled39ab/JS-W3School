//Error syntax
{
    try {
        addlert("Welcome guest!");
    }
    catch (err) {
        // console.log(err);
    }
}

//The throw Statement
{
    let x = 12;
    try {
      if(x == "") throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5) throw "too low";
      if(x > 10) throw "too high";
    }
    catch(err) {
      console.log(err);
    }
}

{
// Error Name Values
// Six different values can be returned by the error name property

// EvalError	An error has occurred in the eval() function
// RangeError	A number "out of range" has occurred
// ReferenceError	An illegal reference has occurred
// SyntaxError	A syntax error has occurred
// TypeError	A type error has occurred
// URIError	An error in encodeURI() has occurred
}

// Reference Error
// A ReferenceError is thrown if you use (reference) a variable that has not been declared
{
    let x = 5;
    try {
      x = y + 1;   // y cannot be used (referenced)
    }
    catch(err) {
      console.log(err);
    }
}

// Syntax Error
// A SyntaxError is thrown if you try to evaluate code with a syntax error
{
    try {
        eval("alert('Hello)");   // Missing ' will produce an error
      }
      catch(err) {
        console.log(err);
      }
}
