// Changing case
var greeting = 'Hello';
console.log(greeting.toLowerCase()); // 'hello'
console.log(greeting.toUpperCase()); // 'HELLO';
/**
 * In some languages, the rules for converting string case are very specific, 
 * therefore, it is safer to use the toLocaleLowerCase() and toLocaleUpperCase() methods 
 * especially when you don’t know which language the code will run on
 */
console.log(greeting.toLocaleLowerCase()); // 'hello'
console.log(greeting.toLocaleUpperCase()); // 'HELLO';

// concat() concatenates 1 or more strings to another and returns result string
// The original string remains intact
var firstName = 'John';
var fullName = firstName.concat(' ', 'Doe');
// equivalent to fullName = firstName + ' ' + 'Doe';
console.log(fullName); // "John Doe"
console.log(firstName); // "John"

// substr() extracts a given string, from the specified starting index, with given length
// if length is ignored, extracts from specified starting index to the end of string
var str = "JavaScript String";
 
console.log(str.substr(0, 10)); // "JavaScript"
console.log(str.substr(11,6)); // "String"
console.log(str.substr(11)); // "String"

// substring() extracts a given string, from the specified starting index (inclusive) to the specified ending index (exclusive)
console.log(str.substring(4, 10)); // "Script"

// indexOf() locates the first occurence of given substring
console.log(str.indexOf("a")); // 1
console.log(str.indexOf("va")); // 2
console.log(str.indexOf("vaa")); // -1, not found

// lastIndexOf() locates the last occurence of given substring
console.log(str.lastIndexOf("a")); // 3
console.log(str.indexOf("vaa")); // -1, not found

// trim() removes all leading and trailing white space chars of a string
var rawString = ' Hi  ';
var strippedString = rawString.trim();
console.log(strippedString); // "Hi"

// localeCompare() compares two strings
console.log('A'.localeCompare('B')); // -1
console.log('B'.localeCompare('B')); // 0
console.log('C'.localeCompare('B')); // 1


// match() matches a string with specified regular expresion and gets array of result
var expr = "1 + 2 = 3";
// matching any number in expr string
var matches = expr.match(/\d+/);
// Only return entire match
matches.forEach(function(m) {
    console.log(m);
});

// When global flag ( g) is set, the elements of the result array contain all matches
matches = expr.match(/\d+/g);
matches.forEach(function(m) {
    console.log(m);
});

// search() finds out if a string matches a regular expression
var str = "This is a test of search()";
var pos = str.search(/is/);
console.log(pos); // 2

// replace()
var str = "the baby kicks the ball";
// replace "the" with "a" in all places
var newStr = str.replace(/the/g, "a");
console.log(newStr); // "a baby kicks a ball"
console.log(str); // "the baby kicks the ball"
newStr = str.replace('kicks', 'holds');
console.log(newStr); // "the baby holds the ball"