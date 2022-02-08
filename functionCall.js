const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

// This will return "John Doe":
console.log(person.fullName.call(person2));

{
    const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        salary: 15000,
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };
    const person2 = {
        firstName: "Mary",
        lastName: "Doe",
        salary: 20000,
        cost: function (rent, pocketMoney) {
            this.salary = this.salary - rent - pocketMoney;
            return this.salary;
        }
    }

    const rest = person2.cost.call(person, 5000, 2500);
    console.log(rest);
    console.log(person2.salary);
    console.log(person2.cost(5000, 1000));

}

{
    const person = {
        fullName: function (city, country) {
            return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
    }

    const person1 = {
        firstName: "John",
        lastName: "Doe"
    }

    const details = person.fullName.call(person1, "Oslo", "Norway");
    console.log(details);
}