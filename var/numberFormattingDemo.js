/**
 * When formatting primitive number, it is temporarily converted to Number object
 */
// Formatting numbers with toFixed(), which accepts an argument that indicates how many decimal points should be used
var distance = 19.006
console.log(distance.toFixed(2)); // 19.01
 
distance = 19.004;
console.log(distance.toFixed(2)); // 19.00

// Formatting numbers to e-notation with toExponential
var x = 10, y = 100, z = 1000;
 
console.log(x.toExponential()); // "1e+1"
console.log(y.toExponential()); // "1e+2"
console.log(z.toExponential()); // "1e+3"
 
// Formatting numbers with toPrecision(), which accepts argument that determines the number of significant digits
x = 9.12345;
console.log(x.toPrecision());    // '9.12345'
console.log(x.toPrecision(4));   // '9.123'
console.log(x.toPrecision(3));   // '9.12'
console.log(x.toPrecision(2));   // '9.1'
console.log(x.toPrecision(1));   // '9'

// toPrecision() method returns the string representation of a Number object in exponential notation 
// or fixed point rounded to precision significant digits.
x = 123.5;
console.log(x.toPrecision(2)); // "1.2e+2"