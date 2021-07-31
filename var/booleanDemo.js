var inProgress = true;
var done = false;
console.log(typeof done); // boolean

/**
 * JS allows value of other types to be converted into boolean values of true or false
 * Use Boolean function for conversion
 */
console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false
 
console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false
console.log(Boolean(NaN));  // false
 
console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false on empty object
console.log(Boolean(undefined)); // false on undefined