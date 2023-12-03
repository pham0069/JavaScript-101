// Declare a variable
var foo;

// Assign value to varibale
foo = "Foo";

// Declare and initialize to variable at same time
var bar = "Bar";

// Declare multiple variables in 1 statement
var one = 1, two = 2;

// Can change variable's type of data (as JS var is loosely typed), but not recommended
foo = 100;

// Undefined variable: declared but not assigned value
var king;
console.log(king); // undefined
// Undeclared variable: not declared yet
//console.log(queen); // ReferenceError: queen is not defined

// Variable shadowing
// global variable
var message = "Hello";
function say() {
    // local variable, which shadows global variable message
    // can only be accessible inside this function but not outside
    var message = 'Hi';
    console.log(message); // which message?
}
say();// Hi
console.log(message); // Hello