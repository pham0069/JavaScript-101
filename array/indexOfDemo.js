/**
 * Array.indexOf() and lastIndexOf() 
 * use the strict equality comparison algorithm that is similar to the triple-equals operator (===)
 * when comparing the searchElement with the elements in the array
 */
var scores = [10, 20, 30, 10, 40, 20];
console.log(scores.indexOf(10)); // 0
console.log(scores.indexOf(30)); // 2
console.log(scores.indexOf(50)); // -1
console.log(scores.indexOf(20)); // 1

// Return index of search elements with given offset
console.log(scores.indexOf(20, -1)); // 5 (fromIndex = 6+ (-1) = 5)
console.log(scores.indexOf(20, -5)); // 1 (fromIndex = 6+ (-5) = 1)
// ---------------------------------------------------------------------------------------------------------
// Find first index of object occurence 
var john = {name: 'John Doe', age: 30};
var anotherJonh = {name: 'John Doe', age: 30};
var guests = [
    john,
    {name: 'Lily Bush', age: 20},
    {name: 'William Gate', age: 25}
];

// jonh and anotherJohn are considered different objects, despite having same properties
console.log("indexOf anotherJohn", guests.indexOf(anotherJonh)); // -1
console.log("indexOf john", guests.indexOf(john)); // 0
// ---------------------------------------------------------------------------------------------------------
/**
 * Find all the index occurences of needle in the haystack
 * instead of single first or last index only
 * Return empty list if no needle is found
 */
function indicesOf(needle, haystack) {
    var results = [];
    var idx = haystack.indexOf(needle);
    while (idx != -1) {
        results.push(idx);
        idx = haystack.indexOf(needle, idx + 1);
    }
    return results;
}
console.log("indicesOf 10", indicesOf(10, scores)); // [0, 3]
// ---------------------------------------------------------------------------------------------------------
// Find last index of occurence 
console.log("lastIndexOf 10", scores.lastIndexOf(10));// 3
console.log("lastIndexOf 20", scores.lastIndexOf(20));// 5
console.log(scores.lastIndexOf(50));// -1