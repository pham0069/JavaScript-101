// Define product object with properties
let product = {};
Object.defineProperties(product, {
    name: {
        value: 'iPhone'
    },
    price: {
        value: 799
    },
    tax: {
        value: 0.1
    },
    netPrice: {
        get: function() {
            return this.price * (1 + this.tax);
        }
    }
});
 
console.log('The net price of ' + product.name +
    ' is ' + product.netPrice.toFixed(2) + ' USD');

// Get descriptor of name property for product object
var descriptor = Object.getOwnPropertyDescriptor(product, 'name');
 
console.log(descriptor.configurable); // false
console.log(descriptor.writable); // false
console.log(descriptor.enumerable); // false
console.log(descriptor.value); // iPhone