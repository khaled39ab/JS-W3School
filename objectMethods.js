const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    salary : 15000,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName());
  console.log(person.firstName);

  //Adding a new Method to an Object
  person.bill = function (amount) {
    this.salary = this.salary - amount;
    return this.salary;
  };

  console.log(person.bill(1500));