var rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];
 // Show that comparison function is called multiple times during sort()
rivers.sort(function (a, b) {
    console.log(a, b);
    return a.length - b.length;
});

/**
 * If the compare function has to do more work, it may yield a high overhead and potentially decreases the performance.
 * We cannot reduce the number of times that compare function is executed. 
 * However, we can reduce the work that the comparison has to do. 
 * This technique is called Schwartzian Transform (cached-key sorting algo)
 * 3 steps
 * 1. Extract the actual values into a temporary array using the map() method.
 * 2. Sort the temporary array with the elements that are already evaluated (or transformed).
 * 3. Walk the temporary array to get an array with the right order.
 * 
 * This is to ensure the comparison key is computed once only for efficiency
 */

// Create temporary array holds objects with position and length of element
var lengths = rivers.map(function (e, i) {
    return {index: i, value: e.length };
});
 
// Sort the lengths of river names
lengths.sort(function (a, b) {
    return a.value - b.value;
});
 
// Copy element back to the array
var sortedRivers = lengths.map(function (e) {
    return rivers[e.index];
});
 
console.log(sortedRivers);// ["Nile", "Congo", "Amazon", "Rio-Grande", "Mississippi"]