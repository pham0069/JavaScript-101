/**
 * In OO language like C++, Java, class is blueprint for objects,
 * and then creates multiple objects that have the same properties and methods from the class
 * 
 * JS has no concept of classes like OO languages
 * JS defines object as a group of name-value pairs where value could be primitive, object, function
 * 
 */

 // Create object based on native type (Object), then adding properties and methods
var machine = new Object();
// Add property
machine.isOn = false;
// Add method
machine.start = function() {
    this.isOn = true;
    console.log('Machine has been starting');
}

// Create object based on user-defined type
var machine = {
    isOn: false,
    start: function() {
        this.isOn = true;
        console.log('Machine has been starting');
    }
};