/**
 * By default, JS provides Object() function and an anonymous object
 * that can be referenced by Object.prototype
 * 
 * Object.prototype has many built-in properties such as toString(), valueOf()...
 * It also has a property named constructor that points back to Object() function
 */

console.log(Object); // [Function: Object]
console.log(Object.prototype); // {}, empty object
console.log(Object.prototype.constructor === Object); // true
console.log(Object.prototype.toString()); // [object Object]
console.log(new Object()); // {}, empty object
console.log(Object.prototype.valueOf()); // {}, empty object

/**
 * 
 *              .constructor              
 *       _________________________    
 *  ...<|....                ,,,,|,,,,,,,,,,,                  
 * :         :              'Object prototype'          
 * : Object():              '   toString()   '           
 * :.........:              ',,,,valueOf(),,,'          
 *      |______________________ |>   |>
 *        .prototype                 |
 *                                   | [[Prototype]]
 *               .constructor        |          
 *       _________________________   |    
 *  ....<|....                ,,,|,,,|,,,,,,               
 * :         :               'Foo prototype '          
 * :  Foo()  :               '  whoAmI()    '          
 * :.........:               ',,,,,,,,,,,,,,'      
 *      |_______________________|>    |
 *        .prototype                  |
 *                                    |  
 *                            ________|________
 *              [[Prototype]] |               | [[Prototype]]
 *                 .__proto__ |               |   .__proto__
 *                      -----------       -----------
 *                     |      a    |      |     b    | 
 *                     |    name   |      |    name  |
 *                     | whoAmI()  |      |   say()  | 
 *                      -----------        -----------
 */

/**
 * Foo() function 
 * 1. add name property to the object
 * 2. set the value of name property to the given argument
 * 
 * Behind the sence, JS engine creates new function Foo() and an anoymous object
 * JS adds a property named prototype to Foo() function
 * Property 'prototype' points to the anonymous object
 * Anonymous object has constructor property pointing back to Foo function
 * Foo.prototype is linked to Object.prototype via [[Prototype]], known as prototype linkage
 * 
 * Foo object, Foo.prototype, Object.prototype is called prototype chain
 */

function Foo(name) {
    this.name = name;
}
Foo.prototype.whoAmI = function() {
    return "I am " + this.name;
}

console.log(Foo);
console.log(Foo.prototype);
console.log(Foo.prototype.constructor == Foo); // true

var a = new Foo('a');
/**
 * a does not have constructor property
 * thus JS engine goes up to prototype chain to find it
 * a links to Foo.property via prototype linkage and Foo.prototype has constructor property
 * JS engine thus return Foo
 * Similarly, JS found a.whoAmI() in Foo.property and a.toString() in Object.property
 */
// 
console.log(a.constructor); // Foo
console.log(a.whoAmI()); // a
console.log(a.toString()); // [object Object]

// Add say() method to b object, not Foo.prototype object
var b = new Foo('b');
b.say = function() {
    console.log('Hi from ' + this.whoAmI());
}
console.log(b.say); // Function
console.log(Foo.prototype.say); // undefined

console.log("No shadow", a.whoAmI === b.whoAmI); // true
// Add whoAmI() method to a object, which shadows the definition in Foo property
a.whoAmI = function() {
    return "Hello, my name is " + this.name;
}
console.log("Shadow", a.whoAmI !== b.whoAmI); // true

/**
 * __proto__, pronounced as dunder proto
 * is accessor property of Object.property object
 * It exposes internal prototype linkage ([[Prototype]]) of an object through which it is accessed
 * a.__proto__ exposes [[Prototype]] that points to Foo.prototype object
 * Similarly, b.__proto__ points to same object
 */
console.log(a.__proto__ === Foo.prototype); // true
console.log(a.__proto__ === b.__proto__); // true
// Another way, a.constructor is Foo (found through prototype chain), hence return true
console.log(a.constructor.prototype == Foo.prototype); // true
// Recommended to use Object.getPrototypeOf() rather than accessing __proto__ directly
console.log(a.__proto___ === Object.getPrototypeOf(a)); // true