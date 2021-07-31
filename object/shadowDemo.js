/**
 * whoAmI() function in object a, JS engine just executes it immediately
 * without looking it up in the prototype chain
 * This is called shadowing
 */
function Foo(name) {
    this.name = name;
}
// Add whoAmI() function to Foo.prototype
Foo.prototype.whoAmI = function() {
    return "I am " + this.name;
}

var a = new Foo('Mickey');

// Add whoAmI() function to object a and see how it behavior changes when a.whoAmI() called
console.log(a.whoAmI()); // I am Mickey
// Shadow Foo.whoAmI
a.whoAmI = function() {
    return "This is " + this.name;
}
console.log(a.whoAmI()); // This is Mickey


// Add toString() function to object a and see how it behavior changes when a.toString() called
console.log(a.toString()); // [object Object]
// Shadow Object.toString
a.toString = function() {
    return "Foo " + this.name;
}
console.log(a.toString()); // Foo Mickey