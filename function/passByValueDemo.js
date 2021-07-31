/**
 * In JS, all function arguments are always passed by value. 
 * It means that JavaScript copies values of the variables 
 * that you pass to a function into local variables.
 * Any changes that you make to the local variables inside the function 
 * does not affect the arguments that you passed in. 
 * 
 * In other words, the changes to the arguments are not reflected outside the function.
 * 
 * If function arguments are passed by reference, the changes of variables that you pass to the function 
 * will be reflected outside the function. This is impossible in JS
 * 
 */

 // Pass by value of primitive values
 function square(x) {
    x = x * x;
}
var y = 10;
square(y);
// if primitives are passed by reference, y should be changed to 100
console.log(y); // 10, i.e. no change

// Pass by value of references
function turnOn(machine) {
    machine.isOn = true;
}
var computer = {
    isOn: false
};
// computer is reference to an object, which is copied to machine argument
// i.e. computer and machine arg points to same object
// when machine property is changed, computer property change is reflected
turnOn(computer);
console.log(computer.isOn); // true