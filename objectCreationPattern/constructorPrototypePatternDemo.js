/**
 * Combination of the constructor and prototype patterns 
 * is the most common way to define custom types
 */
function Animal(name) {
    this.name = name;
}
 
Animal.prototype.identify = function() {
    console.log("I'm " + this.name);
}
 
var donald = new Animal('Donald');
donald.identify(); // I'm Donald
 
var bob = new Animal('Bob')
bob.identify(); // I'm Bob