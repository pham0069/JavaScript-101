/**
 * JavaScript also provides you with the global Boolean() function, 
 * with the letter B in uppercase, to cast a value of another type to boolean.
 */

var a = Boolean('Hi');
console.log(a); // true
console.log(typeof(a)); // boolean
var b = new Boolean(false);
console.log(b.toString()); // "false"