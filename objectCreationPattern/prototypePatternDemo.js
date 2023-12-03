/**
 * JavaScript engine adds the name property to the  donald object. 
 * As the result, both  donald and Animal.prototype objects has the same name property
 */
function Animal() {
    // properties are added to prototype
}
 
Animal.prototype.name = 'Noname';
Animal.prototype.identify = function() {
    console.log("I'm " + this.name);
}

var donald = new Animal();
// Shadow the name property
donald.name = 'Donald'; 
donald.identify(); // I'm Donald

// Delete donald.name
delete donald.name;
donald.identify(); //I'm Noname