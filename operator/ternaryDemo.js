// It is a best practice to use the ternary operator when it makes the code easier to read. 
// If the logic contains many if-else statements, you shouldn’t use the ternary operators.
var age = 19;
var canDrive = age > 16 ? 'yes' : 'no';

var speed = 90;
var message = speed >= 120 ? 'Too Fast' : (speed >= 80 ? 'Fast' : 'OK');
console.log(message);