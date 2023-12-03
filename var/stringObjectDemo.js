/**
 * String is object wrapper of string primitive type
 * 
 */

var strObject = new String('JavaScript String Type');

// Comparing string primitive and object
var str =  'JavaScript String Type';
console.log(typeof strObject); // "object"
console.log(typeof str); // "string"
console.log(strObject instanceof String); // true
console.log(str instanceof String); // false

// Get primitive string value
console.log(strObject.valueOf());
console.log(strObject.toString());
console.log(strObject.toLocaleString());

// Get string length
console.log(strObject.length); //22

// Access individual character in string with square bracket notation, from ES5
console.log(strObject[0]); // 'J'

// Prior ES5, use charAt()
console.log(strObject.charAt(0)); // 'J'