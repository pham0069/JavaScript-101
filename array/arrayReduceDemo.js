/**
 * Array.reduce(callback [, initialValue]) 
 * reduces an array into a value by calling callback function on every element in array
 * and returns a value that is the accumulated result,
 * and this result is provided as argument to the next call of callback function
 * 
 * Optional to pass initialValue argument to reduce()
 * If initialValue is present, previousValue = initialValue, currentValue = array[0]
 * Otherwise, previousValue = array[0], currentValue = array[1]
 * 
 */
var numbers = [1, 2, 3];
 
// Verbose version to calculate sum of all elements in array
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum); // 6

// Use reduce alternatively
sum = numbers.reduce(function (prev, curr) {
    return prev + curr;
});
console.log(sum); // 6

// --------------------------------------------------------------------------------------------------------------------
// More complicated example
var shoppingCart = [
    {name: 'phone', qty: 1, price: 699},
    {name: 'Screen Protector', qty: 1, price: 9.98},
    {name: 'Memory Card', qty: 2, price: 20.99}
];
// Pass initialValue 0
var total = shoppingCart.reduce(function (prev, curr) {
    return prev + curr.qty * curr.price;
}, 0);
 
console.log(total); // 750.96

/**
 * Array.reduceRight() works same as reduce(), except it starts in opposite direction, from end to start
 */

2
3
4
sum2 = numbers.reduceRight(function (prev, curr) {
    return prev + curr;
});
console.log(sum2); // 6