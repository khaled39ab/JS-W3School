// Some common solutions to display JavaScript objects are:

// Displaying the Object Properties by name
{
    const person = {
        name: "John",
        age: 30,
        city: "New York"
    };
    const info = person.name + ", " + person.age + ", " + person.city;
    console.log(info);
}

// Displaying the Object Properties in a Loop
{
    const person = {
        name: "John",
        age: 30,
        city: "New York"
    };

    let txt = "";
    for (let x in person) {
        txt += person[x] + " "; //You must use person[x] in the loop. person.x will not work (Because x is a variable).
    };
    console.log(txt);
}

// Displaying the Object using Object.values()
// Any JavaScript object can be converted to an array using Object.values()
{
    const person = {
        name: "John",
        age: 30,
        city: "New York"
    };

    const myArray = Object.values(person);
    console.log(myArray);
}

// Displaying the Object using JSON.stringify()
{
    const person = {
        name: "John",
        age: 30,
        city: "New York", //JSON.stringify converts dates into strings
        today: new Date(),        
        friend: ["John", "Peter", "Sally", "Jane"]
    };

    let myString = JSON.stringify(person);
    console.log(myString);

}
{
    //JSON.stringify will not stringify functions
    const person = {
        name: "John",
        city: "New York",
        info : function (){ 
            return this.name + " is from" + this.city;
        },
    };
    
    // This can be "fixed" if you convert the functions into strings before stringifying
    person.info = person.info.toString();
    let myString = JSON.stringify(person);
    console.log(myString);
}