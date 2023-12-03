/**
 * Similar to the unary plus and minus, you can use the increment or decrement operator 
 * on a value of string, Boolean, and object to convert these value into a number with the similar rules
 */
var x = 10;
// Prefix decrement changes value before the statement is evaluated
console.log(--x); // 9
console.log(x); // 9
// Postfix decrement evaluates statement before changing value
console.log(x--); // 9
console.log(x); // 8

x = 10;
var y = 20;
var z = --x + y;
console.log(z); //29