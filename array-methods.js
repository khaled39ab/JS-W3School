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

// The splice() method can be used to add new items to an array
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const splice = fruits.splice(2, 0, "Lemon", "Kiwi");
    // The first parameter (2) defines the position where new elements should be added (spliced in).
    // The second parameter (0) defines how many elements should be removed.
    // The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
    console.log(fruits);
    const splice2 = fruits.splice(0, 1); //Using splice() to Remove Elements
    console.log(fruits);
}

// JavaScript Array slice()
// The slice() method slices out a piece of an array into a new array.
{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(3);
    const citrus2 = fruits.slice(1, 3);
    const citrus3 = fruits.slice(1);
//     console.log(citrus2);
//     console.log(citrus3);
//     console.log(citrus);
}