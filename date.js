// Creating Date Objects
// Date objects are created with the new Date() constructor.

// There are 4 ways to create a new date object:
// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)
const d = new Date();
console.log(d);

// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
{
    const d = new Date(2018, 11, 24, 10, 33, 30, 0); //creates a new date object with a specified date and time
    console.log(d); //JavaScript counts months from 0 to 11:  January = 0   December = 11.
}

// Previous Century
// One and two digit years will be interpreted as 19xx
{
    const d = new Date(99, 11, 24);
    console.log(d);
}

// JavaScript Stores Dates as Milliseconds
// JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated)
// Zero time is January 01, 1970 00:00:00 UTC
{
    const d = new Date(1643264020933);
    console.log(d);
}

// Displaying Dates
// JavaScript will (by default) output dates in full text string format
{
    const d = new Date();  
    console.log(d.toString());
}

// Date Input - Parsing Dates
// Date.parse() returns the number of milliseconds between the date and January 1, 1970
let msec = Date.parse("March 21, 2012");
console.log(msec);

// You can then use the number of milliseconds to convert it to a date object:
{
    let msec = Date.parse("March 21, 2012");
    const d = new Date(msec);
    console.log(d);
}