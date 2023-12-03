/**
 * Array.sort() 
 * allows you to sort elements of an array in place. 
 * Besides returning the sorted array, sort() also sorted the array that you pass in.
 * By default, sort() uses string Unicode code points to determine the order of the elements.
 */
var animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant'
];
// Sort in ascending order
animals.sort();
console.log(animals);// ["ant", "bee", "cat", "dog", "elephant"]

// Sort in descending order by passing custom comparison function
animals.sort(function (a, b) {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
});
console.log(animals); // ["elephant", "dog", "cat", "bee", "ant"]
// ---------------------------------------------------------------------------------------------------------
// Sort array of strings with non-ASCII characters
var animaux = ['zèbre', 'abeille', 'écureuil', 'chat'];
animaux.sort();
// "zèbre" comes before "écureuil"
console.log(animaux); // ["abeille", "chat", "zèbre", "écureuil"]
// Resolve by using localeCompare()
animaux.sort(function (a, b) {
    return a.localeCompare(b);
});
console.log(animaux); // ["abeille", "chat", "écureuil", "zèbre"]
// ---------------------------------------------------------------------------------------------------------
// Sort array of numbers
var scores = [9, 80, 10, 20, 5, 70];
// By default, numbers are compared char by char when converted to string
scores.sort();
// Not preferred as it does not consider the magnitude of number
console.log(scores); // [ 10, 20, 5, 70, 80, 9 ]
// Resolve by comparing the magnitude of numeric value
scores.sort(function(a, b){
    return a - b;
});
console.log(scores); // [ 5, 9, 10, 20, 70, 80 ]
// ---------------------------------------------------------------------------------------------------------
// Sort array of objects
var employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];
function displayList(employees) {
    employees.forEach(function (e) {
        console.log('name:' + e.name +
            ';salary:' + e.salary +
            ';hireDate:' + e.hireDate);
    });
}

// Sort by salary (numeric)
employees.sort(function (x, y) {
    return x.salary - y.salary;
});
displayList(employees);

// Sort by name (string)
employees.sort(function (x, y) {
    var a = x.name,
        b = y.name;
    // localeCompare ignores case sensitivity by default?
    return a.localeCompare(b);
});
displayList(employees);

// Sort by date
employees.sort(function (x, y) {
    var a = new Date(x.hireDate),
        b = new Date(y.hireDate);
    return a - b;
});
displayList(employees);