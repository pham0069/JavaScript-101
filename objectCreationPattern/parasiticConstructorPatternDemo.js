/**
 * Create a constructor function that creates an object and returns that object.
 * By default, the new operator returns the object returned by the constructor function. 
 * If the constructor function does not return an object, the new operator creates that object instead.
 */
function Animal(name) {
    var o = new Object();
    o.name = name;
    o.identify = function() {
        console.log("I'm " + o.name);
    }
    return o;
}

var dog = new Animal('Bingo');