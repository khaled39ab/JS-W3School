// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

// Async Syntax
// The keyword async before a function makes the function return a promise:
{
    //syntax
    async function myFunction() {
        return "Hello";
    }

    //   Is the same as:

    function myFunction2() {
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

    async function myFunction2() {
        return "Hello";
    }
    myFunction().then(
        function (value) { myDisplayer(value); }
    );
}

// Await Syntax
// The keyword await before a function makes the function wait for a promise:

{ let value = await promise; }
{
    async function myDisplay() {
        let myPromise = new Promise(function (resolve, reject) {
            resolve("I love You !!");
        });
        console.log(await myPromise);
    }

    myDisplay();
}