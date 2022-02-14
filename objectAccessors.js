// JavaScript Accessors (Getters and Setters)

// JavaScript Getter (The get Keyword)
// Create an object:
{
    const person = {
        firstName: "John",
        lastName: "Doe",
        language: "en",
        get lang() {
          return this.language;
        }
      };
      
      // Display data from the object using a getter:
      console.log(person.lang);
}

//   JavaScript Setter (The set Keyword)
{
    const person2 = {
        firstName: "John",
        lastName: "Doe",
        language: "",
        set lang(lang) {
          this.language = lang;
        }
      };
      
      // Set an object property using a setter:
      person2.lang = "en";
      // Display data from the object:
      console.log(person2.language);
}


  /*Why Using Getters and Setters?
It gives simpler syntax
It allows equal syntax for properties and methods
It can secure better data quality
It is useful for doing things behind-the-scenes */

{
    // Object.defineProperty()
    // The Object.defineProperty() method can also be used to add Getters and Setters
    const person = {
        firstName: "John",
        lastName: "Doe",
    };

    Object.defineProperty(person, "age", {
        get : function () {
            return 30;
        }
    });
    Object.defineProperty(person, "language", {
        set : function (lang) {
            this.language = lang;
        }
    });

    console.log(person.age);
    person.lang = "en";
    console.log(person.lang);
}