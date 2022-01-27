// JavaScript Array forEach()
// The forEach() method calls a function (a callback function) once for each array element
const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
function myFunction(value, index, array) {
    console.log(value, index, array);
}
//function takes 3 arguments/ forEach pass 3 parameter 
// The item value
// The item index
// The array itself

// JavaScript Array map()
{
    const numbers1 = [45, 4, 9, 16, 25];
    const numbers2 = numbers1.map(myFunction2);

    function myFunction2(value, index, array) {
        return value * 2;
    }
    console.log(numbers2);
}

// JavaScript Array filter()
// The filter() method creates a new array with array elements that passes a test
{
    const numbers = [45, 4, 9, 16, 25];
    const over18 = numbers.filter(myFunction);
    
    function myFunction(value, index, array) {
      return value > 18;
    }
    console.log(over18);
}

// JavaScript Array reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value
{
    const numbers = [45, 4, 9, 16, 25];
    let sum = numbers.reduce(myFunction);
    
    function myFunction(total, value, index, array) { //function takes 4 arguments:
      return total + value;
    }
}

// JavaScript Array find()
// The find() method returns the value of the first array element that passes a test function
{
    const numbers = [4, 9, 16, 25, 29];
    let first = numbers.find(myFunction);
    
    function myFunction(value, index, array) {
      return value > 18;
    }
    console.log(first);
}