/**
 * JavaScript treats function arguments differently from other programming languages
 * You can define a function that accepts three arguments. 
 * However, it does not mean that you can pass in only three arguments in. 
 * Actually, you can pass in three, one or none, and the JavaScript interpreter won’t complain at all.
 * 
 * In fact, JavaScript uses an object named 'arguments' to represent a function argument. 
 * The arguments object behaves like an array though it is not an instance of Array.
 * You can access arguments element with square bracket [] and arguments size with length property
 */

function add() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4, 5)); // 15