// The sort() method sorts an array alphabetically
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    console.log(fruits);
}

// The reverse() method reverses the elements in an array
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    fruits.reverse();
    console.log(fruits);
}

//Numeric value sorting
{
    const points = [40, 100, 1, 5, 25, 10];
    points.sort();
    console.log(points);
    
    // By default, the sort() function sorts values as strings.
    // This works well for strings ("Apple" comes before "Banana").   
    // However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".    
    // Because of this, the sort() method will produce incorrect result when sorting numbers.    
    // You can fix this by providing a compare function:
    const points2 = [40, 100, 1, 5, 25, 10];
    points2.sort(function(a, b){return a - b});
    console.log(points2);
}
