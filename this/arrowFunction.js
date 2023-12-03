/**
 * In arrow functions (from ES6), JS sets this lexically. 
 * It means that the arrow function does not create its own execution context, 
 * but inherits this from the outer function where the arrow function is defined.
 */

 /**
  * Try this in html file
  *
 let getThis = () => this;
 console.log(getThis() === window); // true
  *
  */


function Car() {
    this.speed = 120;
}
// Inside getSpeed() method, this refers to the global object, not the Car object. 
Car.prototype.getSpeed = () => {
    return this.speed;
}
//Therefore, car.getSpeed() invocation causes error because the global object does not have speed property      
var car = new Car();
car.getSpeed(); // TypeError