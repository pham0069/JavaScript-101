/**
 * An array is an ordered list of data. 
 * Difference in arrays between JS and other programming languages such as Java, C/C++, etc.
 * 1. An array can hold data of the different types in each slot 
 * i.e., an array can hold elements with mixed of numbers, strings, objects, etc.
 * 2. The length of an array is dynamically sized and auto-growing.
 * 
 * Note that the maximum number of elements that the JavaScript array can hold is 4,294,967,295 
 * which is sufficient enough for a typical application
 */

 // Create empty array
var scores = new Array();

// Create array with given initial size
scores = new Array(10);

// Create array with initialized content
scores = new Array(9, 10, 8, 7, 6);
var signs = new Array('red');

// It's ok to ignore new operator when using array constructor
var artist = Array();

// Create initialized array using literal notation
var colors = ['red', 'green', 'blue'];
var emptyArray = [];
var nonEmptyArry = [,,]; // [undefined, undefined]

// Accessing JS array elements
var mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'

// Modifying array elements
mountains[2] = 'K2';

// Get array size
console.log(mountains.length); // 3

// Append element by changing array length
mountains.length = 4;
console.log(mountains[3]); // undefined

// Remove the last elements by changing array length
mountains.length = 2;
console.log(mountains[2]); // undefined

// Basic operations on arrays
var seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log(typeof seas); // object
console.log(Array.isArray(seas)); // true
console.log(seas.toString()); // Black Sea,Caribbean Sea,North Sea,Baltic Sea
console.log(seas.valueOf());

// Join array elements using join()
console.log(seas.join('|')); // Black Sea|Caribbean Sea|North Sea|Baltic Sea
// null, undefined are treated as empty string in resulting string
var mixedValues = [1, 2, null, 'A', undefined, 3];
console.log(mixedValues.toString());  // 1,2,,A,,3