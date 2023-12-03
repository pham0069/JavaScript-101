/**
 * Accessor properties have 4 attributes
 * 1. [[Configurable]]
 * 2. [[Enumerable]]
 * 3. [[Get]] - called and returning a value when u read data from accessor property
 * 4. [[Set]] - called when u assign a value to the property
 */
// Define person object with 2 data properties firstName, lastName
// and 1 accessor property fullName
var person = {
    firstName: 'John',
    lastName: 'Doe'
}
 
Object.defineProperty(person, 'fullName', {
    get: function() {
        return this.firstName + ' ' + this.lastName;
    },
    set: function(value) {
        var parts = value.split(' ');
        if (parts.length == 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            throw 'Invalid name format';
        }
    }
});
 
console.log(person.fullName); // John Doe
 
person.fullName = 'John Cho';
 
console.log(person.firstName); // John
console.log(person.lastName); // Cho
console.log(person.fullName); // John Cho