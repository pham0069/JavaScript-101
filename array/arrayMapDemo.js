/**
 * Array.map(callback [, contextObject]) 
 * transforms each array element to another value using passed in function
 * and collect resulting values in another array
 * Optional contextObject is referred as this in mapping function
 */
var circles = [10, 30, 50];

// Verbose version of getting areas for circles
var areas = []; // to store areas of circles
var area = 0;
for (var i = 0; i < circles.length; i++) {
    area = Math.floor(Math.PI * circles[i] * circles[i]);
    areas.push(area);
}
console.log(areas); // [314, 2827, 7853]

// Using map for shorter version, supported from ES5
areas = circles.map(function(r){
    return Math.floor(Math.PI * r * r);
})
console.log(areas); // [314, 2827, 7853]