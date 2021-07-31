/**
 * Closure is 
 * 1. a function 
 * 2. able to remember and access its lexical scope 
 * even when that function is executing outside its lexical scope
 * 
 * JS defines the scope of a variable by the position of the variable in the source code. 
 * In addition, a nested function can have access to the variables declared in its outer scope
 */

/**
 * Normally, a local variable only exists in the duration when the function executes. 
 * It means that when the greeting() function has completed, 
 * the message variable is no longer accessible.
 * 
 * But in this case, when we execute the hi() that refers to sayHi(), 
 * the message variable still exists. This magic is called closure
 */
function greeting() {
    // message is local variable and is not accessible outside greeting()
    var message = 'Hi';
    function sayHi() {
        console.log(message);
    }
    return sayHi();
}
var hi = greeting();
hi(); // Hi, i.e. still can access message
// ------------------------------------------------------------------------------------------------
// Another closure example
function greeting(message) {
    return function(name){
         return message + ' ' + name;
    }
 }
 var sayHi = greeting('Hi');
 var sayHello = greeting('Hello');
  
 console.log(sayHi('John')); // Hi John
 console.log(sayHello('John')); // Hello John