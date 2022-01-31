{
    const person = { fname: "John", lname: "Doe", age: 25 };

    let text = "";
    for (let x in person) {
        console.log(x); //Print property(fname,lname,age)
        console.log(person[x]); //print value (John, Doe, 25)
        text += person[x] + " ";
    }
    console.log(text);
}
{
    const numbers = [45, 4, 9, 16, 25];

    for (let number in numbers) {
        console.log(numbers[number]);
    }
}

//============================= For of =================================
{
    const cars = ["BMW", "Volvo", "Mini"];

    for (let x of cars) {
        console.log(x);
    }
}

{
    const numbers = [45, 4, 9, 16, 25];

    for (let x of numbers) {
        console.log(x);
    }
}