/**
 * A durable object is an object that does not have public property 
 * and its methods don’t reference to the this object. 
 * The durable objects are often used in secure environments 
 * where accessing this and new are not allowed.
 */

function secureAnimal(name) {
    var o = new Object();
    o.identify = function() {
        console.log(name); //  no this
    }
    return o;
}
 
var alien = secureAnimal('?#@');
alien.identify(); // ?#@