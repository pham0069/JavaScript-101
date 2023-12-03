/**
 * The second version of the addTen() function overwrites the first one. 
 * When we pass one argument to the addTen() function that accepts two arguments, 
 * the value of the second argument is undefined.  
 * This is like when we declare a variable without initializing it. 
 * 
 * The function performs the following calculation:
 * 100 + undefined + 10 = undefined
 * 
 * Internally, a function name is like a pointer that points to a Function object, 
 * therefore, you can rewrite the addTen functions as follows:
 * 
 * 
 var addTen = function(a){
   return a + 10;
}
 
var addTen = function(a,b){
    return a + b + 10;
}
var result = addTen(10);
console.log(result); // undefined
 *
 */
function addTen(a) {
    return a + 10;
}
 
function addTen(a, b) {
    return a + b + 10;
}
var result = addTen(100);
console.log(result); // undefined