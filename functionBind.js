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
      
      const fullName2 = person.fullName.bind(member);
      console.log(fullName2());
