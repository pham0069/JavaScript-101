/**
 * Use a function to abstract away the process of creating specific objects
 * Although the factory pattern can create multiple similar objects, 
 * it doesn’t allow you to identify what type of object it creates
 */
function createAnimal(name) {
    var o = new Object();
    o.name = name;
    o.identify = function() {
        console.log("I'm " + o.name);
    }
    return o;
}

var tom = createAnimal('Tom');
var jerry = createAnimal('Jerry');
 
tom.identify(); // I'm Tom
jerry.identify(); // I'm Jerry
