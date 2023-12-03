/**
 * A data property contains a single location for a data value
 * A data property has 4 attributes
 * 1. [[Configurable]] - determine whether a property can be removed via delete or redefined
 * 2. [[Enumerable]] - indicate that the property will be returned in for-in loop
 * 3. [[Writable]] - indicate that if value of the property can be changed
 * 4. [[Value]] - contains the actual value of the property
 * It is the location that the value of the property is read from and written to
 * 
 * By default, [[Configurable]] , [[Enumerable]], and [[Writable]] attributes 
 * are set to true for all properties defined directly on an object.
 * The default value of the [[Value]] attribute is undefined.
 * 
 * If you use the Object.defineProperty() method to define a property of the object, 
 * the default values of [[Configurable]], [[Enumerable]], and [[Writable]] are set to false 
 * unless otherwise specified.
 */

var machine = {};
// Define new property directly on object, i.e.
// [[Configurable]] , [[Enumerable]], and [[Writable]] are true by default
machine.isOn = false;
delete machine.isOn; // OK to delete isOn property as configurable
console.log(machine.isOn); // undefined

// Define new property with Object.defineProperty()
// [[Configurable]] , [[Enumerable]], and [[Writable]] are set to false unless otherwise specified
Object.defineProperty(machine, 'isOn', {
    configurable: false,
    value: false
});
 
// delete machine.isOn; // Uncaught TypeError: Cannot delete property 'isOn' of #<Object>


// Enumerate properties of objects
machine = {};
// By default, directly defined properties are enumerable
machine.isOn = false;
machine.name = 'computer';
 // Thus both properties are listed
for (var prop in machine) {
    console.log(prop);
}
// isOn
// name

// Make the name property non-enumerable
Object.defineProperty(machine, 'name', {
    enumerable: false
}); 
for (var prop in machine) {
    console.log(prop);
}
// isOn