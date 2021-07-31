// Comparing numbers
var a = 10, 
    b = 20; 
console.log(a >= b);  // false
console.log(a == 10); // true

// Comparing strings
var name1 = 'alice',
    name2 = 'bob';    
console.log(name1 == name2); // false
console.log(name1 == 'alice'); // true

var f1 = 'apple',
    f2 = 'Banana';
console.log(f1 < f2); // false, since 'a' = 97 > 'B' = 66
console.log(f1.toLowerCase() < f2.toLowerCase()); // true

// Comparing number with value of another type
// Implicit conversion of non-numeric value to number for comparison
console.log(10 < '20'); // true, since '20' is converted to 20 > 10
console.log(10 == '10'); // true

// Comparing object with non-object
/**
 * Use valueOf() method to get the value for comparison
 * If the object doesn’t have the valueOf() method, 
 * JS then calls the toString() method and uses the returned value for comparison
 * If valueOf() doesn't return numeric value, JS converts it to number
 * If value cannot be converted, returns NaN
 */
// 
var apple = {
    valueOf: function() {
        return 10;
    }
};
   
var orange = {
    toString: function() {
        return '20';
    }
};
console.log(apple > 10); // false
console.log(orange == 20); // true
console.log(apple > orange); // false

// Comparing Boolean with another value
/**
 * If an operand is a Boolean, JS converts it to a number and compares the converted value with the other operand; 
 * true will convert to 1 and false will convert to 0
 */
console.log(true > 0); // true
console.log(false < 1); // true
console.log(true > false); // true
console.log(false > true); // false
console.log(true >= true); // true
console.log(true <= true); // true
console.log(false <= false); // true
console.log(false >= false); // true

// Comparing null and undefined
console.log(null == undefined); // true

// Comparing NaN with another
console.log(NaN == 1); // false
console.log(NaN == NaN); // false
console.log(NaN != 1); // true
console.log(NaN != NaN); // true

// === (strict equal)
// !== (strict not equal)
/**
 * The strict equal and strict not equal behave like the equal and not equal operator 
 * except that they don’t convert operand before comparison
 */
console.log("10" == 10); // true
console.log("10" === 10); // false