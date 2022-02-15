/*JavaScript Sets
A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
A Set can hold any value of any data type.*/

/*Set Methods
Method  	Description
new Set()	Creates a new Set
add()	    Adds a new element to the Set
delete()	Removes an element from a Set
has()	    Returns true if a value exists
clear() 	Removes all elements from a Set
forEach()	Invokes a callback for each element
values()	Returns an Iterator with all the values in a Set
keys()  	Same as values()
entries()	Returns an Iterator with the [value,value] pairs from a Set
Property	Description
size    	Returns the number elements in a Set*/

// How to Create a Set

// Passing an Array to new Set()
const letters = new Set(["a","b","c"]);

// Create a new Set and use add() to add values
{
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
}

// Create a new Set and use add() to add variables
{
    const a = "a";
    const b = "b";
    const c = "c";
    
    // Create a Set
    const letters = new Set();
    
    // Add Variables to the Set
    letters.add(a);
    letters.add(b);
    letters.add(c);
}

// The forEach() Method
// The forEach() method invokes a function for each Set element
{
    const letters = new Set(["a","b","c"]);

    // List all entries
    let text = "";
    letters.forEach (function(value) {
      text += value;
    })
}

// The values() Method
// The values() method returns an Iterator object containing all the values in a Set
{
    const myIterator = letters.values(); // Returns [object Set Iterator]

    // List all Values
    let text = "";
    for (const entry of myIterator) {
      text += entry;
    }
}

// The keys() Method
// A Set has no keys.
// keys() returns the same as values().
// This makes Sets compatible with Maps.
{
    letters.keys()   // Returns [object Set Iterator]
}

// The entries() Method
// A Set has no keys.
// entries() returns [value,value] pairs instead of [key,value] pairs.
// This makes Sets compatible with Maps
{
    const myIterator = letters.entries();

    // List all Entries
    let text = "";
    for (const entry of myIterator) {
      text += entry;
    }
}

// Sets are Objects
{
    const letters = new Set(["a","b","c"]);
    
    typeof letters;      // Returns object

    letters instanceof Set;  // Returns true
}