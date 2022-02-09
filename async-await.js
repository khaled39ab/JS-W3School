// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

{
    //syntax
    async function myFunction() {
        return "Hello";
    }

    //   Is the same as:

    function myFunction() {
        return Promise.resolve("Hello");
    }
}

{
    async function myFunction() {
        return "Hello";
    }
    myFunction().then(
        function (value) { myDisplayer(value); },
        function (error) { myDisplayer(error); }
    );

    // simpler, since you expect a normal value (a normal response, not an error):
    
    async function myFunction() {
        return "Hello";
      }
      myFunction().then(
        function(value) {myDisplayer(value);}
      );
}