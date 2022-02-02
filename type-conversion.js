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