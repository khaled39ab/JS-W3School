// The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
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

    const details = person.fullName.apply(person1, ["Oslo", "Norway"]);
    console.log(details);
}

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
    const person3 = {
        firstName: "Hero",
        lastName: "Amin",
        salary: 12500
    }

    const rest = person2.cost.apply(person, [5000, 2500]);
    console.log(person.fullName.apply(person2) + "'s rest amount " + rest);

    const rest2 = person2.cost.apply(person3, [2000, 1500])
    console.log(rest2);
    
    console.log(person2.salary);
    console.log(person2.cost(5000, 1000));

}