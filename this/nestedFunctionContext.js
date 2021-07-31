// ---------------------------------------------------------------------------------------------------
/**
 * It is not true that this is the same in an inner function as in the outer function. 
 * The truth is that the context of the inner function depends on how it is invoked,
 * not the context of the outer function. 
 * In calculateTax() method, this is set to the global object, which does not have netPrice and tax properties
 * Thus result returned is undefined
 */

var product = {
    netPrice: 100,
    tax: 0.08,
    getPrice: function() {
        function calculateTax(){
            // this here is set to the global object by default
            return this.netPrice * this.tax; // i.e. returned undefined here
        }
        return this.netPrice + calculateTax();
    }
}   
console.log(product.getPrice()); // NaN

// Resolve by invoking calculateTax() on proper object with call()
var product = {
    netPrice: 100,
    tax: 0.08,
    getPrice: function() {
        function calculateTax(){
            return this.netPrice * this.tax;
        }
        // In this way of invocation, this inside calculateTax() refers to this product
        return this.netPrice + calculateTax.call(this);
    }
}   
console.log(product.getPrice()); // 108