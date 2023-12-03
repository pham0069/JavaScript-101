/**
 * If the variable stores a primitive value, when you manipulate its value, 
 * you are working on the actual value stored in the variable. 
 * In other words, the variable that stores a primitive value is accessed by value.
 */

 var a = 10;
 var b = a;
 console.log(a, b); // 10, 10
 b = 20;
 console.log(a, b); // 10, 20, i.e. a remains intact after b changes value

 /**
  * Unlike the primitive value, when you manipulate an object, 
  * you are working on the reference to that object, rather than the actual object. 
  * In short, a variable that stores an object is accessed by reference
  * 
  * When you assign a reference value from one variable to another, 
  * the value stored in the variable is also copied into the location of the new variable. 
  * The difference is that the values stored in both variables now are 
  * the address of the actual object stored in the heap. 
  * As a result, both variables are pointing to the same object
  */
 var x = {name: 'John'};
 var y = x;
 console.log(x, y); // { name: 'John' } { name: 'John' }
 // Modification on y affects x as they point to same address
 y.name = 'David';
 console.log(x, y); // { name: 'David' } { name: 'David' }