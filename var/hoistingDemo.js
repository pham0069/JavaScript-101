/**
 * Hoisting is a mechanism that JavaScript engine moves all the variable declarations 
 * to the top of their scope, either function or global scope.
 * 
 * If there were no hoisting, you would get a ReferenceError 
 * because you referenced to a variable that was not defined
 * 
 * JavaScript engine moves only the declaration of the variables to the top. 
 * However, it keeps the initial assignment of the variable remains intact
 */

 /**
 * This is equivalent to 
 * 
var foo;
console.log(foo); // undefined
 *
 */
console.log(foo); // undefined
var foo;

/**
 * This is equivalent to 
 * 
var baz;
console.log(baz); // undefined
baz = 'baz';
 *
 */
console.log(baz);
var baz = 'baz';

