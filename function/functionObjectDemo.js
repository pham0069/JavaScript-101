/**
 * Each function object has two properties:
 * 1. length: number of named arguments specified in the function declaration
 * 2. prototype: points to the function object.
 */

function swap(x, y) {
    let tmp = x;
    x = y;
    y = tmp;
}
 
console.log(swap.length); // 2
console.log(swap.prototype); // Object{}

/**
 * A function object has three methods: 
 * 1. apply(): call function with given this value and provided args
 * Args must be passed as array-like object
 * 2. call(): similar to apply()
 * Args should be passed individually
 * 3. bind(): create a new function instance whose bound to the object that you pass in later
 */

var cat = {type: 'Cat', sound: 'Meow'};
var dog = {type: 'Dog', sound: 'Woof'};
 
var say = function (greeting) {
    console.log(greeting);
    // access current this
    console.log(this.type + ' says ' + this.sound);
};

// Apply with array-like args ['Hi']
say.apply(cat, ['Hi']);
// Hi
// Cat says Meow
say.apply(dog,['Hi']);
// Hi
// Dog says Woof


// Call with 'Hi'
say.call(cat,'Hi');
// Hi
// Cat says Meow
say.call(dog,'Hi');
// Hi
// Dog says Woof

// cat will say in 5s
var sayLater = say.bind(cat, 'Hello');
setTimeout(sayLater, 5000);
// Hello
// Cat says Meow