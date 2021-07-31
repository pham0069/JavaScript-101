/**
 * String is sequence of zero or more characters
 * A literal string begins and ends with either single quote(‘) or double quotes (“)
 * 
 */

var greeting = 'Hi';
var foo = "It's a valid string";
var bar = 'I\'m also a string';

/**
 * JS strings are immutable
 * You cannot modify a string once it is created
 * Behind the scene, JS engine creates a new string that holds the new content 'JavaScript String' 
 * and destroys two other original strings 'JavaScript' and ' String'.
 */
var foo = 'JavaScript';
foo = foo + ' String';