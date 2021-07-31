/**
 * This feature is called hoisting. 
 * Internally, there are 2 phases in the JavaScript engine when it executes the code:
 * 1. Compilation: moves all the function declarations (and also variable declarations) to the top of its current context. 
 * We say that function declarations are hoisted.
 * 2. Execution: just executes the code.
 * 
 * This piece of code would be reassembled as
 * 
 * 
function showMe(){
    console.log('A hoisting example');
}
 
showMe(); // A hoisting example
 *
 *
 */
showMe(); // A hoisting example
 
function showMe(){
    console.log('A hoisting example');
}