/**
 * Non-strict mode
 * 
 * When we call the greet(), JS engine looks for the variable named 
 * greeting inside the scope of the function. 
 * As the result, it could not find any variable declared with that name 
 * so it goes up to the next immediate scope (which is the global scope in this case)
 * and asks whether or not the greeting variable has been declared.
 * 
 * JS engine couldn’t find any of global variable named message 
 * so it creates a new variable with that name and adds it to the global scope
 */ 
function greet() {
    // var keyword is not used
    greeting = 'Morning!'; // what?
    console.log(greeting);
}
greet(); // Morning!
console.log(greeting); // Morning!