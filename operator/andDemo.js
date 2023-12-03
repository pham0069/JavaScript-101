var a = 2
console.log(-a)
a = undefined
console.log(a)
console.log(-a)
if (a) console.log("a not null")
else console.log("a null")
if (-a) console.log("-a not null")
else console.log("-a null")
var b = -a + 2
if (b) console.log("b not null")
else console.log("b null")

// & (and) operator logic on boolean value
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log ("Halo");
// and operator can apply on any value, not only boolean
// If both values are non-null objects, return second value
console.log({id: 1} && {id: 2}); // Object {id: 2}
// If first value is false boolean, return false due to short circuit
// If second value is object, return its value if first value evaluates to true
console.log(true && {id: 10}); // Object {id: 10}
// If either value is null, return null
console.log({id: 1} && null); // null
console.log(null && {id: 1}); // null
console.log(null && false); // null
// If one of the value is NaN, return NaN
console.log(true && NaN); // NaN
// If one of the value is undefined, return undefined
console.log(undefined && 100); // undefined


// and operator is short-circuited
console.log(true && (1/0)); // Infinity  
console.log(false && (1/0)); // false  
console.log(true && null); // null  
console.log(false && null); // false
console.log(true && NaN); // NaN  
console.log(false && NaN); // false  

