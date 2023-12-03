/**
 * In JS, functions are the first-class citizen. 
 * In other words, functions are objects, which are instances of the Function type.
 * The Function type has two methods: call() and apply() 
 * that allow you to pass the context as the first argument to these functions
 */
function getBrand(prefix){
    console.log(prefix + this.brand);
}
   
var honda = {brand: 'Honda'};
var audi = {brand: 'Audi'};
// Invoke getBrand() function with call()
// First argument is the object to call function, second argument onwards are args to pass to function   
getBrand.call(honda, "It's a "); // "It's a Honda"
getBrand.call(audi, "It's an ");// "It's a Audi"

// Invoke getBrand() function with apply(). Needs to pass function args in array-like object
getBrand.apply(honda, ["It's a "]);
getBrand.apply(audi, ["It's an "]);