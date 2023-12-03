//https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b

/**
 * Whenever a new function is created, JS engine by default adds a prototype property to it
 * 
 * Prototype is an object that has
 * 1. a constructor which points back to our function, by default
 * 2. another property object named __proto__,
 * which points to the prototype object of our constructor function
 * 
 * Prototype is SHARED by all instances created from the same constructor function
 * 
 * Whenever a new instance of constructor function is created, JS 
 * 1. copies all properties and methods of function constructor to this instance
 * 2. adds a __proto__ property to the newly created object,
 * called dunder proto, which points to the prototype object of the constructor function
 */

function Human(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        return firstName + " " + lastName;
    }
 }
var person1 = new Human("Virat", "Kohli");
var person2 = new Human("Sachin", "Tendulkar");
console.log(Human.prototype); // Object with constructor function and __proto___ property
console.log(person1.__proto__);
console.log(Human.prototype === person1.__proto__); // true
console.log(person1.__proto__ === person2.__proto__); // true

/**
 * Adding new property and method to constructor function
 * by adding them to function's prototype. 
 * This effectively adds properties and methods to instances created from constructor function
 * 
 * When we try to access a property of an object, 
 * JS engines first tries to find the property on the object, 
 * if the property is present on the object it outputs its value. 
 * If the property is not present on the object,
 * then it tries to find the property on the prototype object or dunder proto of the object. 
 * If the property is found the value is returned,
 * else JavaScript engine tries to find the property on the dunder proto of the object. 
 * This chain continues until the dunder proto property is null. 
 * In these cases, the output will be undefined
 */
Human.prototype.nickName = "Ashwin";
Human.prototype.age = 26;
/**
 * when person1.nickName is called, JS engine checks if the property exists on the person1 object. 
 * In this case, nickName property was not on the person1’s object. 
 * So, now JavaScript engine checks if the name property exists on the dunder proto property or the prototype of the person1’s object. 
 * In this cases, nickName property was there on the dunder proto property or the prototype of person1’s object. 
 * Hence, the output was returned “Ashwin”.
 * 
 * Since prototype is shared by all instances, person1 and person2 have same nickName and age
 */
console.log(person1.__proto__);
console.log(person1.fullName(), person1.nickName, person1.age);
console.log(person2.fullName(), person2.nickName, person2.age);

/**
 * When person1 modifies property of prototype having primitive value,
 * person1 will create a property on its own object
 * other objects (person2) will not get affected by that
 */
person1.nickName = "Anil";
console.log(person1.__proto__);
console.log(person1.nickName, person2.nickName);

/**
 * When person1 modifies property of prototype having reference value,
 * that will affect Human prototype and all instances, i.e. person2
 */
Human.prototype.friends = ['Anna', 'Brian', 'Celly'];
console.log(person1.friends, person2.friends);
person1.friends.push('David');
console.log(person1.friends, person2.friends);

//------------------------------------------------------------------------------------------------------------
/**
 * It is advised to define
 * 1. all the object-specific properties inside the constructor
 * 2. all shared properties and methods inside the prototype
 */
function Person (firstName, lastName, friends) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.friends = friends;
}
Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}
Person.prototype.addFriend = function(newFriend) {
    this.friends.push(newFriend);
}
person1 = new Person("Irina", "Chenko", ['Anne', 'Keira']);
person2 = new Person("Vladimir", "Kopski", ["Leo"]);
console.log(person1.fullName(), person1.friends);
console.log(person2.fullName(), person2.friends);
person2.addFriend('Diep');
console.log(person1.friends, person2.friends);
