/**
 * Array.forEach(callback [, contextObject]) 
 * iterates over elements in an array and executes a predefined function once per element.
 * 
 * One limitation of forEach() compared to for loop is that you cannot use the break or continue statement to control the loop. 
 * To terminate the loop in forEach(), you must throw an exception inside the callback function.
 */
var ranks = ['A', 'B', 'C'];
ranks.forEach(function (e) {
    console.log(e);
});