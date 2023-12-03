/**
 * JS allows creating a custom constructor function 
 * that defines the properties and methods of user-defined objects. 
 * By convention, the name of a constructor function in JS starts with an uppercase letter
 * 
 * Unlike the factory pattern, the properties and methods of the animal object 
 * are assigned directly to the this object inside the constructor function
 * 
 * The disadvantage of the constructor pattern is that the same method identify() 
 * is duplicated in each instance.
 */

function Animal(name) {
    this.name = name;
    this.identify = function() {
        console.log("I'm " + this.name);
    };
}

var donald = new Animal('Donald');
console.log(donald.constructor === Animal); // true
console.log(donald instanceof Animal); // true
console.log(donald instanceof Object); // true

var goofy = new Animal('Goofy');
console.log(donald.identify === goofy.identify); // false