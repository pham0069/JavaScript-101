// use loop
var result = true;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
        result = false;
        break;
    }
}
console.log(result); // true

// every() executes a callback function on every element in array
// return true if callback function returns true for all items
// available from ES5
result = numbers.every(function (e) {
    return e > 0;
});
console.log(result); // true

// some() executes a callback function on every element in array
// return true if callback function returns true for any item
var hasOdd = scores.some(function (e) {
    return Math.abs(e % 2) == 1;
});
console.log(hasOdd); // true
