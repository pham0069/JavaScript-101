/**
 * JS does not provide multidimensional array natively
 * However, you can create a multidimensional array by defining an array of elements, 
 * where each element is also another array. 
 * For this reason, we can say that a JavaScript multidimensional array is an array of arrays.
 */
var activities = [
    ['Work', 9],
    ['Eat', 2],
    ['Commute', 2],
    ['Play Game', 2],
    ['Sleep', 7]
];

// Accessing elements
console.log(activities[0][1]); // 9

// Add row to the end of array
activities.push(['Study',2]);
console.log(activities.join('\n'));

// Add third column
for (var i = 0; i < activities.length; i++) {
    var percentage = ((activities[i][1] / 24) * 100).toFixed();
    activities[i][2] = percentage + '%';
}
console.log(activities.join('\n'));

// Remove  the last row
activities.pop();
console.log(activities.join('\n'));

// Remove the third column
for (var i = 0; i < activities.length; i++) {
    activities.pop(2);
}
console.log(activities.join('\n'));

// Loop the outer array
for (var i = 0; i < activities.length; i++) {
    // Get the size of the inner array
    var innerArrayLength = activities[i].length;
    // Loop the inner array
    for (var j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}