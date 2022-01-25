// JavaScript Search Methods
// String indexOf()
let str = "Please locate where 'locate' occurs!";
let str2 = str.indexOf("locate");
console.log(str2);
{
    let str = "Please locate where 'locate' occurs!";
    str.indexOf("locate", 15);
}

// String lastIndexOf()
let str3 = "Please locate where 'locate' occurs!";
let str4 = str.lastIndexOf("locate");
console.log(str4);

{
    let str = "Please locate where 'locate' occurs!";
    str.lastIndexOf("locate", 15);
}

{
    let str = "Please locate where 'locate' occurs!";
    let str2 = str.lastIndexOf("John"); //return -1 for no match
}

// String startsWith()
{
    let text = "Hello world, welcome to the universe.";
    let txt = text.startsWith("Hello"); //returns true if a string begins with a specified value, otherwise false

}
{
    let text = "Hello world, welcome to the universe.";
    text.startsWith("world")    // Returns false

    let text1 = "Hello world, welcome to the universe.";  
    text1.startsWith("world", 5)    // Returns false

    let text2 = "Hello world, welcome to the universe.";   
    text2.startsWith("world", 6)    // Returns true
}

// String endsWith()
{
    let text = "John Doe";
    text.endsWith("Doe"); //returns true if a string ends with a specified value, otherwise false
}
{
    let text = "Hello world, welcome to the universe.";
    text.endsWith("world", 11); //Check in the 11 first characters of a string ends with "world"
}

//String match()
{
    let text = "The rain in SPAIN stays mainly in the plain";
    let txt = text.match(/ain/g); //returns the matches, as an Array object.
    console.log(txt);
}
{
    let text = "The rain in SPAIN stays mainly in the plain";
    let txt = text.match(/ain/gi); //Perform a global, case-insensitive search for "ain"
    console.log(txt);
}

// String includes()
{
    let text = "Hello world, welcome to the universe.";
    let txt = text.includes("world"); //returns true if a string contains a specified value, otherwise false
}
{
    let text = "Hello world, welcome to the universe.";
    let txt = text.includes("world", 12); //starting the search at position 12 and return false
}