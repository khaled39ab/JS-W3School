// Converting Arrays to Strings
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const string = fruits.toString();
const join = fruits.join(" * ");
console.log(string);

// Popping: items out of an array
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const fruit = fruits.pop(); //The pop() method returns the value that was "popped out"
    console.log(fruit);
}

// Pushing : The push() method adds a new element to an array (at the end):
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let length = fruits.push("Kiwi");
}

// The shift() method removes the first array element and "shifts" all other elements to a lower index
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits.shift();
    console.log(fruit);
    console.log(fruits);
}

// The unshift() method adds a new element to an array (at the beginning), and "unshift" older elements
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.unshift("Lemon");
}

// Changing Elements
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits[0] = "Kiwi";
    console.log(fruits);
    fruits[fruits.length] = "Pineapple";
    console.log(fruits);
}

// Array delete()
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    delete fruits[0];
}

// Merging (Concatenating) Arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

{
    const myChildren = myGirls.concat(myBoys);
    console.log(myChildren);
}
{
    const myChildren = myBoys.concat("Peter");
    console.log(myChildren);
}

{
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];
    const myChildren = arr1.concat(arr2, arr3);
}