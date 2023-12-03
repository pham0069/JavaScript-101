/**
 * JS has 6 primitive data types
 * 1. null
 * 2. undefined
 * 3. boolean
 * 4. number
 * 5. string
 * 6. symbol - available from ES6 only
 * 
 * and 1 complex data type called object
 */

// JS is dynamic language or loosely typed, thus, var does not associate with any type
var foo = 120; // foo is a number
foo = false;   // foo is a boolean now
foo = "Foo";   // foo is a string now

// When a variable is declared but not initialized, it is assigned the value of undefined
var bar;
console.log(bar); // undefined
console.log(typeof bar); // undefined
console.log(typeof handsome); // also undefined for undeclared variable

// null is empty object pointer
var obj = null;
console.log(typeof obj); // object
// It is a good practice to assign a variable that later holds an object to null 
// so that you can check whether the object is null or not
if (obj != null) {
    // call method of the object
 }

 // null is equal to undefined
 console.log(null === undefined); // true