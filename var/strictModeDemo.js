/**
 * Strict mode
 * 
 * To avoid creating a global variable accidentally inside the function 
 * because of omitting the var keyword, you use the strict mode 
 * by adding the "use strict"; at the beginning of a JavaScript file (or a function)
 * 
 * You should always use the strict mode in your JavaScript code to 
 * 1. eliminate some JavaScript silent errors 
 * 2. make your code run faste 
 */
"use strict";
 
function greet() {
    greeting = 'Morning!'; // ReferenceError
    console.log(greeting);
}
greet();
console.log(greeting);