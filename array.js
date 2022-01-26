// Creating an Array
const cars = ["Saab", "Volvo", "BMW"];

{
    const cars = [
        "Saab",
        "Volvo",
        "BMW"
    ];
}
{
    const cars = [];
    cars[0] = "Saab";
    cars[1] = "Volvo";
    cars[2] = "BMW";
}

// Accessing Array Elements
{
    const cars = ["Saab", "Volvo", "BMW"];
    let car = cars[0];
}

// Changing an Array Element
{
    const cars = ["Saab", "Volvo", "BMW"];
    cars[0] = "Opel";
}

// Looping Array Elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    // console.log(fruit);
}
fruits.forEach (fruit)

function fruit(value){
    console.log(value);
}

// Adding Array Elements
{
    const fruits = ["Banana", "Orange", "Apple"];
    fruits.push("Lemon");
    console.log(fruits);
}