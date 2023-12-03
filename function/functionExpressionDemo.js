/**
 * Unlike other programming languages, JavaScript functions are objects. 
 * In other words, a function is an instance of the Function type. 
 * Because a function is an object, it has properties and methods like other objects. 
 * Also, the name of a function is just a pointer that points to the function object.
 * 
 */

// Function declaration
function add(a, b) {
    return a + b;
}

/**
 * This syntax is called function expression
 * In this syntax, we declare a variable named add and initialize it to a function
 * This is equivalent to the function declaration above
 */
var add = function(a,b) {
    return a + b;
};
var result = add(10, 20);
console.log(result); // 30

// Assign function object
var sum = add;
add = null;
console.log(sum(100,200)); // 300

// Function declaration is hoisted
greeting(); // Hi
function greeting() { // greeting is hoisted
    console.log('Hi');
}
// Function expression is not hoisted
// sayHi(); // TypeError
var sayHi = function () {
    alert('Hi');
};