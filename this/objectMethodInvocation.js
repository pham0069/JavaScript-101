/**
 * When calling method without specifying its object, 
 * JS sets this to global object in strict mode
 * and undefined in non-strict mode
 */
var car = {
    brand: 'Honda',
    getBrand: function(){
        return this.brand;
    }  
}
// When you call a method of an object, JS sets this to the object that owns the method
// i.e. this inside getBrand() refers to car object  
console.log(car.getBrand()); // Honda

// When you call a method without specifying its object, JS sets this to the global object in strict mode and undefined in the non-strict mode
// i.e. this inside getBrand() refers to global, which does not have brand property
var hondaCar = car.getBrand; //alias function
console.log(hondaCar()); // undefined


// To resolve this, bind function to object before invoking
console.log(hondaCar.bind(car)()); // Honda
// Note that f2 = f1.bind(obj), f2 != f1, f1 is not modified. Thus the following not works
hondaCar.bind(car);
console.log(hondaCar()); // undefined
// Need to reassign hondaCar
var hondaCar = car.getBrand.bind(car);
console.log(hondaCar()); // Honda