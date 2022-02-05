class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }    
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

console.log("My car is " + myCar1.age() + " years old.");
console.log("My car is " + myCar2.age() + " years old.");



//send parameters to Class methods
{
    class Car {
        constructor(name, year) {
          this.name = name;
          this.year = year;
        }
        age(x) {
          return x - this.year;
        }
      }
      
      let date = new Date();
      let year = date.getFullYear();
      
      let myCar = new Car("Ford", 2014);
      
      console.log("My car is " + myCar.age(year) + " years old.");
}