// The Unary + Operator
{
    let y = "5";      // y is a string
    let x = + y;      // x is a number
}
{
    let y = "John";   // y is a string
    let x = + y;      // x is a number (NaN)
}

// Converting Strings to Numbers
{
    Number("3.14")    // returns 3.14
    Number(" ")       // returns 0
    Number("")        // returns 0
    Number("99 88")   // returns NaN
}

// Converting Numbers to Strings
{
    String(x)         // returns a string from a number variable x
    String(123)       // returns a string from a number literal 123
    String(100 + 23)  // returns a string from a number from an expression
}

// Converting Dates to Numbers
{
    d = new Date();
    Number(d)          // returns 1404568027739

    e = new Date();
    e.getTime()        // returns 1404568027739
}

// Converting Dates to Strings
{
    String(Date())  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
    Date().toString()  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
}

// Converting Booleans to Numbers
{
    Number(false)     // returns 0
    Number(true)      // returns 1
}

// Converting Booleans to Strings
{
    String(false)      // returns "false"
    String(true)       // returns "true"

    false.toString()   // returns "false"
    true.toString()    // returns "true"
}

// Automatic Type Conversion
// When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.
{
    5 + null    // returns 5         because null is converted to 0
    "5" + null  // returns "5null"   because null is converted to "null"
    "5" + 2     // returns "52"      because 2 is converted to "2"
    "5" - 2     // returns 3         because "5" is converted to 5
    "5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
}

// Automatic String Conversion
// JavaScript automatically calls the variable's toString() function when you try to "output" an object or a variable
{
    document.getElementById("demo").innerHTML = myVar;
    // if myVar = {name:"John"}  // toString converts to "[object Object]"
    // if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
    // if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"

    // Numbers and booleans are also converted, but this is not very visible
    // if myVar = 123             // toString converts to "123"
    // if myVar = true            // toString converts to "true"
    // if myVar = false           // toString converts to "false"
}

// Converting Decimal to Binary
{
    function dec2bin(dec){
        return (dec >>> 0).toString(2);
    }
}

// Converting Binary to Decimal
{
    function bin2dec(bin){
        return parseInt(bin, 2).toString(10);
    }
}