/*In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.*/

/*JavaScript Primitives
A primitive value is a value that has no properties or methods.
A primitive data type is data that has a primitive value.

JavaScript defines 5 types of primitive data types:
string
number
boolean
null
undefined
Primitive values are immutable (they are hardcoded and therefore cannot be changed).

if x = 3.14, you can change the value of x. But you cannot change the value of 3.14.*/

// Creating a JavaScript Object
// With JavaScript, you can define and create your own objects.

// There are different ways to create new objects:

// Create a single object, using an object literal.EX.
{ const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }; }

// Create a single object, with the keyword new. Ex.
{
    const person = new Object(); // But there is no need to use new Object().
    person.firstName = "John";
    person.lastName = "Doe";
    person.age = 50;
    person.eyeColor = "blue";
}

// Define an object constructor, and then create objects of the constructed type.

// Create an object using Object.create().


/*JavaScript Objects are Mutable
Objects are mutable: They are addressed by reference, not by value.*/
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50, eyeColor: "blue"
}

const x = person;
x.age = 10;      // Will change both x.age and person.age
console.log(person.age);