/**
 * Use Object.create() method to create a new object based on specified prototype object
 * Use Object.getPrototypeOf() method to access object instance dunder prototype
 */
var animal = {
    legs: 4,
    walk: function() {
        console.log('walking on ' + this.legs + ' legs');
    }
}
// Create an empty bird object with the  __proto__ of the animal object
var bird = Object.create(animal);
// Modify properties and methods of bird
bird.legs = 2;
bird.fly = function() {
    console.log('flying');
}

// Alternatively, do all these steps in 1 statement
var bird = Object.create(animal, {
    legs: 2,
    fly: function() {
        console.log('flying');
    }
});

// ES5 provides Object.getPrototypeOf() to access function prototype
console.log(Object.getPrototypeOf(bird) === animal); // true