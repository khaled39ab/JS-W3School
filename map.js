// ========== Create a Map
{
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]);
    console.log(fruits);
}

//Creating map with set()
{
    const fruits = new Map();
    // Set Map Values
    fruits.set("apples", 500);
    fruits.set("bananas", 300);
    fruits.set("oranges", 200);

    console.log(fruits);
    console.log(fruits.get("apples")); //get property
    console.log(fruits.size); // size property

    console.log(fruits.has("apples")); //has() property
    fruits.delete("apples");
    console.log(fruits.has("apples"));
}

{
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]);

    // List all entries with forEach
    fruits.forEach(function (value, key) {
        console.log(key, value);
    });

    // List all entries with entries
    let text = "";
    for (const x of fruits.entries()) {
        console.log(text += x);
        console.log(x);
    }
}