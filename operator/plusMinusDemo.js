// Unary operator works on one value
var a = 10;
a = +a; // 10
a = -a; // -10

// Implicit conversion of string to numeric value, before applying operation
var s = '10';
console.log(+s); // 10
var f = false,
    t = true;
// Implicit conversion of boolean to numeric value, before applying operation
console.log(+f); // 0
console.log(+t); // 1

/**
 * When you apply the unary plus or minus on an object that has the valueOf() method, 
 * this method is called to return the converted value
 * In case the returned value is NaN, the toString() method is called to get the converted value
 */ 
var product = {
    valueOf: function () {
        return 60;
    }
};
console.log(+product); // 60  
product = {
    valueOf: function () {
        return '100';
    }
};
console.log(+product); // 100 
product = {
    valueOf: function () {
        return 'hello';
    }
};
console.log(+product); // NaN 