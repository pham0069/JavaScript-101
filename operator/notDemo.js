// ! (not) operator can be applied to any value
// It is equivalent to convert value into Bolean value and then negates it
console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false

// double negation
var a = true;
console.log(!!a); // true

