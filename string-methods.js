// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)


// JavaScript String slice()
let str = "Apple, Banana, Kiwi";
let part1 = str.slice(7, 13);

let str1 = "Apple, Banana, Kiwi";
let part2 = str1.slice(-12, -6);

let part3 = str1.slice(7);

let part4 = str1.slice(-12);

// JavaScript String substring()

// substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.

let str2 = "Apple, Banana, Kiwi";
let part5 = str2.substring(7, 13);

// JavaScript String substr()

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

let str3 = "Apple, Banana, Kiwi";
let part6 = str3.substr(7, 6);

let str4 = "Apple, Banana, Kiwi";
let part7 = str4.substr(7);
console.log(part7);

let str5 = "Apple, Banana, Kiwi";
let part8 = str5.substr(-4);

// Replacing String 

// The replace() method replaces a specified value with another value in a string:

let text1 = "Please visit Microsoft!";
let newText1 = text1.replace("Microsoft", "W3Schools");

let text2 = "Please visit Microsoft and Microsoft!";
let newText2 = text2.replace("Microsoft", "W3Schools"); //By default, the replace() method replaces only the first match:

let text3 = "Please visit Microsoft!";
let newText3 = text3.replace(/MICROSOFT/i, "W3Schools"); //can't replace it

let text4 = "Please visit Microsoft and Microsoft!";
let newText = text4.replace(/Microsoft/g, "W3Schools"); //To replace all matches, use a regular expression

// Converting to Upper and Lower Case
let text = "Hello World!";
let text5 = text.toUpperCase();

let text6 = "Hello World!";       // String
let text7 = text6.toLowerCase();  // text2 is text1 converted to lower

// JavaScript String concat()
let text8 = "Hello";
let text9 = "World";
let text10 = text8.concat(" ", text9);

// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:
let text11 = "      Hello World!      ";
let text12 = text11.trim();

// JavaScript String charAt()

// The charAt() method returns the character at a specified index (position) in a string:
let text13 = "HELLO WORLD";
let char = text13.charAt(0);

// JavaScript String split()

// A string can be converted to an array with the split() method:
let text14 = "I love Allah and his prophet Muhammad (pbuh)"
console.log(text14.split(" "));