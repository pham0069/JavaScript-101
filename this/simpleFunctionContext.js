/**
 * In Java, C++, the this keyword represents an instance of the current object 
 * in the method of the class. 
 * this keyword is only relevant within the method of the class, 
 * meaning that you cannot use it outside of a method.
 * 
 * JS has the this keyword that behaves differently from other programming languages, 
 * which may confuse you at first. 
 * In JS, you can use the this keyword in the global and function contexts. 
 * Moreover, the behavior of the  this keyword changes between strict and non-strict mode.
 */

 // In non-strict mode, this refers to the global object when the function is called
function add(a, b) {
    console.log(this === window); // true
    return a + b; 
}
add(10,20);

// In strict mode, JavaScript set this to undefined
function add(a, b) {
    "use strict"
    console.log(this === undefined); // true
    return a + b; 
}
add(10,20);

// Note that the strict mode also applies to not only function but also the inner functions within the function
function add(a,b){
    "use strict";
    console.log(this === undefined); // true
   
    function logResult(msg){
      console.log(this === undefined); // true
      console.log(msg);
    }
   
    var result = a + b;
    logResult(result);
    return result;
}
add(10,20);