/**
 * Constructor function is used to have a class like,
 * i.e. creating a blueprint for the objects to be created

 */
/**
 * bicycle can be declared as new Vehicle before declaration of Vehicle itsself
 * This is called hoisting, in which all the declarations are automatically moved 
 * on top of the current scope
 * This behavior actually lets you use a variable or a function before its declared.
 */
let bicycle = new Vehicle('Thong Nhat', 'mini', 'green');

// new is not necessary
let bicycle2 = Vehicle('Cuckoo', 'city', 'beige');
function Vehicle(make, model, color) {
    this.make = make,
    this.model = model,
    this.color = color,
    this.getName = function () {
        return this.make + " " + this.model;
    }
}

/**
 * Under the hood, JS 
 * 1. makes a copy of Vehicle constructor function for each of our objects
 * 2. copy every property and method to the new instance of Vehicle
 * Copy property is good, copy method is REDUNDANT
 * 
 * Another problem is we cannot add another property to class 
 * car2.year = 2012
 * WITHOUT adding changing constructor function to include the property
 * 
 * To address these issues, use prototype to define methods and shared properties
 * Look at prototypeDemo.js as example
 */
let car = new Vehicle("Toyota", "Corolla", "Black");
let car2 = new Vehicle("Honda", "Civic", "White");

