// JavaScript Function call()


// Method Reuse
// With the call() method, you can write a method that can be used on different objects.

// All Functions are Methods
// In JavaScript all functions are object methods.
// If a function is not a method of a JavaScript object, it is a function of the global object
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  // This will return "John Doe":
  person.fullName();  

/* In the example above, this refers to the person object.
this.firstName means the firstName property of this.
Same as:
this.firstName means the firstName property of person. */


/* What is this?
In JavaScript, the this keyword refers to an object.
Which object depends on how this is being invoked (used or called).
The this keyword refers to different objects depending on how it is used:
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object. */




// The JavaScript call() Method
/* The call() method is a predefined JavaScript method.
It can be used to invoke (call) a method with an owner object as an argument (parameter). */
const personA = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

console.log(personA.fullName.call(person1));
console.log(personA.fullName.call(person2));

// The call() Method with Arguments
// The call() method can accept arguments:
const personB = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + " from " + city + "," + country;
  }
}

const person3 = {
  firstName:"John",
  lastName: "Doe"
}
console.log(personB.fullName.call(person3, "Oslo", "Norway"));



console.log("===============================================================================================");



// JavaScript Function apply()

// The JavaScript apply() Method
// The apply() method is similar to the call() method
{
  const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  
  console.log(person.fullName.apply(person1));
  //same as call();
}

/* The Difference Between call() and apply()
The difference is:
The call() method takes arguments separately.
The apply() method takes arguments as an array. */

{
  const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));
}




console.log("===============================================================================================");




// JavaScript Function bind()

/* Function Borrowing
With the bind() method, an object can borrow a method from another object.
The example below creates 2 objects (person and member). */

{
  const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);
  console.log(fullName);
}