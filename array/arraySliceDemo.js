/**
 * Array.prototype.slice([start, stop]) 
 * allows extracting subset elements of an array from start (inclusive) to end(exclusive)
 * and add them to the new array
 * If start is not specified, start is default to 0
 * 
 * Note that
 * 1. slice() only do shallow copy of elements to new array only
 * 2. slice() does not modify original array
 */

var numbers = [1, 2, 3, 4, 5];
var newNumbers = numbers.slice(); // [1, 2, 3, 4, 5]

var colors = ['red','green','blue','yellow','purple'];
var rgb = colors.slice(0,3);
console.log(rgb); // ["red", "green", "blue"]

// ------------------------------------------------------------------------------------------------
// Convert array-like objects into array
function toArray() {
    return Array.prototype.slice.call(arguments);
  }
   
var classification = toArray('A','B','C');
console.log(classification); // ["A", "B", "C"]