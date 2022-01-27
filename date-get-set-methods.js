//==================================== get Methods =================================
// The getTime() Method
// The getTime() method returns the number of milliseconds since January 1, 1970
{
    const d = new Date();
    d.getTime();
}

// The getFullYear() Method
{
    const d = new Date();
    d.getFullYear();
}

// The getMonth() Method
{
    const d = new Date();
    d.getMonth();
}

// The getDate() Method
{
    const d = new Date();
    d.getDate();
}

// The getHours() Method
{
    const d = new Date();
    d.getHours();
}

// The getMinutes() Method
{
    const d = new Date();
    d.getMinutes();
}

// The getSeconds() Method
{
    const d = new Date();
    d.getSeconds();
}

// The getMilliseconds() Method
{
    const d = new Date();
    d.getMilliseconds();
}

// The getDay() Method
{
    const d = new Date();   
    console.log(d.getDay()); //In JavaScript, the first day of the week (0) means "Sunday"
}

//================================== set Methods ==================================
// The setFullYear() Method
// The setFullYear() method sets the year of a date object. In this example to 2020
{
    const d = new Date();
    d.setFullYear(2020);
}
// The setFullYear() method can optionally set month and day
{
    const d = new Date();
    d.setFullYear(2020, 11, 3);
}

// The setMonth() Method
{
    const d = new Date();
    d.setMonth(11);
}

// The setDate() Method
{
    const d = new Date();
    d.setDate(31);
}

// The setHours() Method
{
    const d = new Date();
    d.setHours(22);
}

// The setMinutes() Method
{
    const d = new Date();
    d.setMinutes(30);
}

// The setSeconds() Method
{
    const d = new Date();
    d.setSeconds(30);
}

// Compare Dates
// Dates can easily be compared.

// The following example compares today's date with January 14, 2100

{
    let text = "";
    const today = new Date();
    const someday = new Date();
    someday.setFullYear(2100, 0, 14);
    
    if (someday > today) {
      text = "Today is before January 14, 2100.";
    } else {
      text = "Today is after January 14, 2100.";
    }
    console.log(text);
}