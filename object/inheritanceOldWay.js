/**
 * inherit() function performs a shallow copy of any object u passed into it
 */
function inherit(parent) {
    function child(){};
    child.prototype = parent;
    return new child();
}

var animal = {
    legs: 4,
    walk: function() {
        console.log('Walking on ' + this.legs + ' legs');
    }
}
 
var bird = inherit(animal);
bird.legs = 2;
bird.fly = function() {
    console.log('Flying');
}
 
bird.walk(); // Walking on 2 legs
bird.fly(); // Flying