/**
 * When you use the new keyword to create an instance of a function object, 
 * you use the function as a constructor, i.e. constructor invocation
 */

function Car(brand){
    this.brand = brand;
}
Car.prototype.getBrand = function() {
    return this.brand;
}

// Create new object and set this to the newly created object   
var honda = new Car('Honda');
console.log(honda.getBrand()); // Honda

// If new is missed, this is set to global object
var bmw = Car('BMW');
// console.log(bmw.brand); // => TypeError: Cannot read property 'brand' of undefined
// console.log(bmw.getBrand()); // => TypeError: Cannot read property 'getBrand' of undefined

// To make sure that the constructor function is always invoked using constructor invocation, 
// you add a check at the beginning of the function
function Bike(brand) {
    if(!(this instanceof Bike)) {
        throw Error('Must use the new operator to call the function');
    }
    this.brand = brand;
}
var cuckoo = new Bike('Cuckoo'); // OK
console.log(cuckoo.brand);
// var cuckoo = Bike('Cuckoo'); // throw Error
