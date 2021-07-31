/**
 * Besides the primitive number type, JS also provides Number reference type for numeric values
 * 
 */

// Create new Number object
var numberObject = new Number(10);
 
// Comparing number primitive and object
var number = 10;
console.log(typeof numberObject); // "object"
console.log(typeof number); // "number"
console.log(numberObject instanceof Number); // true
console.log(number instanceof Number); // false

// Get primitive value from Number object
console.log(numberObject.valueOf()); // 10

// Get number value as string
console.log(numberObject.toString()); // "10"

// Get number value as string, given radix
/**
 * The radix (or base) is the number of unique digits that represents numbers in a positional numeral system. 
 * For example, decimal number's radix is 10, binary number's radix is 2
 */
console.log(aNumber.toString(2)); // "1010" as 1010 in binary = 10 in decimal

// Implicit and temporary conversion from primitive to Number object
var a = 10;
console.log(a.toString(16)); // "a", this works due to conversion