// JavaScript for...in Loop
// The JavaScript for...in statement loops through the properties of an object.
{
    const person = {
        fname: " John",
        lname: " Doe",
        age: 25
    };

    let txt = "";
    for (let x in person) {
        txt += person[x];
    }
    console.log(txt);

    // Adding New Properties
    person.nationality = "English";
    console.log(person);

    // Deleting Properties
    delete person.age;
    console.log(person);
}

// Nested Objects
// Values in an object can be another object
{
    myObj = {
        name: "John",
        age: 30,
        cars: {
            car1: "Ford",
            car2: "BMW",
            car3: "Fiat"
        }
    }
    console.log(myObj.cars.car2);
}

// Nested Arrays and Objects
// Values in objects can be arrays, and values in arrays can be objects
{
    const myObj = {
        name: "John",
        age: 30,
        cars: [
            { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
            { name: "BMW", models: ["320", "X3", "X5"] },
            { name: "Fiat", models: ["500", "Panda"] }
        ]
    }
    let x = "";
    for (let i in myObj.cars) {
        x += "<h1>" + myObj.cars[i].name + "</h1>";
        for (let j in myObj.cars[i].models) {
            x += myObj.cars[i].models[j];
        }
    }
    console.log(x);
}