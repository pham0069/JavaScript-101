/**
 * JavaScript Array type provides a very powerful splice() method that allows you to 
 * insert new elements into the middle of an array
 * However, you can use this method to delete and replace existing elements as well
 */

/**
 * Use splice to delete elements in array
 * splice(position, num) changes the original array and returns an array that contains the deleted elements
 * 1. position argument specifies the position of the first item to delete 
 * 2. num argument determines the number of element to delete
 */
var scores = [1, 2, 3, 4, 5];
var deletedScores = scores.splice(0, 3); 
console.log(deletedScores); // [1, 2, 3]
console.log(scores); // [4, 5]

/**
 * Use splice to insert elements to array
 * splice(position, 0, ...newElements) inserts one or multiple new elements from specified position
 * second argument 0 instructs splice() not to delete any elements
 */
var colors = ['red', 'green', 'blue'];
colors.splice(2, 0, 'purple');
console.log(colors); // ["red", "green", "purple", "blue"]

/**
 * Use splice to replace elements in array
 * splice(position, 1, ...newElements) replaces one or multiple new elements from specified position
 * second argument 1 instructs splice() to insert and delete elements at the same time, i.e. replace
 */
var languages = ['C', 'C++', 'Java', 'JavaScript'];
languages.splice(1, 1, 'Python');
console.log(languages); // ["C", "Python", "Java", "JavaScript"]