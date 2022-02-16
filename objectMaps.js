/*JavaScript Maps
A Map holds key-value pairs where the keys can be any datatype.
A Map remembers the original insertion order of the keys.
A Map has a property that represents the size of the map.*/
{
    //Create map in 2 ways
    // Create a Map
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]);

    // Create a Map
    const fruits2 = new Map();
    // Set Map Values
    fruits.set("apples", 500);
    fruits.set("bananas", 300);
    fruits.set("oranges", 200);
}

{
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]);

    //The set() method can also be used to change existing Map values
    fruits.set("mangoes", 400);

    // The get() method gets the value of a key in a Map
    fruits.get("apples");    // Returns 500

    // The size property returns the number of elements in a Map
    const size = fruits.size;
    console.log(size);

    // The delete() method removes a Map element
    fruits.delete("apples");
    console.log(fruits);

    // The has() method returns true if a key exists in a Map
    const has = fruits.has("mangoes");
    console.log(has);

    // The clear() method removes all the elements from a Map
    fruits.clear();
    console.log(fruits);

    // Maps are Objects
    console.log(typeof fruits);
}

{
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]);

    // The forEach() method invokes a callback for each key/value pair in a Map
    // List all entries
    let text = "";
    fruits.forEach(function (value, key) {
        text += key + ' = ' + value + " . ";
    });
    console.log(text);

    // The keys() method returns an iterator object with the keys in a Map
    // List all keys
    let veggies = "";
    for (const x of fruits.keys()) {
        veggies += x + " ";
    }
    console.log(veggies);

    // The values method returns an iterator object with the values in a Map
    // Sum all values
    let total = 0;
    for (const x of fruits.values()) {
        total += x;
    }
    console.log(total);

    // The entries() method returns an iterator object with the [key,values] in a Map 
    // List all entries
    let text2 = "";
    for (const x of fruits.entries()) {
        text2 += x + " / ";
    }
    console.log(text2);
}

{
    // Objects as Keys

    // Create Objects
    const apples = { name: 'Apples' };
    const bananas = { name: 'Bananas' };
    const oranges = { name: 'Oranges' };

    // Create a Map
    const fruits = new Map();
    // Add new Elements to the Map
    fruits.set(apples, 500);
    fruits.set(bananas, 300);
    fruits.set(oranges, 200);

    fruits.get("apples");  // Returns undefined
    fruits.get(apples);  // Returns 500
}