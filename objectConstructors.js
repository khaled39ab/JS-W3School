{
    // It is considered good practice to name constructor functions with an upper-case first letter
    function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }

    // Objects of the same type are created by calling the constructor function with the new keyword
    const myFather = new Person("John", "Doe", 50, "blue");
    const myMother = new Person("Sally", "Rally", 48, "green");
    console.log(myFather);

    // Adding a Property to an Object
    myFather.nationality = "English";
    console.log(myFather.nationality);

    // Adding a Method to an Object
    myFather.name = function () {
        return this.firstName + " " + this.lastName;
    };
    console.log(myFather.name());
}