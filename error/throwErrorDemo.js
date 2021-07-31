/**
 * Whenever JS reaches the throw operator, it stops the execute of code immediately.
 * To continue the code execution, you need to use the try-catch statement to catch the value that was thrown
 */

try {
    throw 123;
} catch(error) {
    console.log(error); // 123
}
console.log('continue!'); // "continue!"

// In practice, you should use one of the error types as mentioned earlier as an error to throw
function add(a,b){
    if(typeof a !== 'number') {
        throw TypeError('The first argument must be a number');
    }
   
    if(typeof b !== 'number'){
        throw TypeError('The second argument must be a number');
    }
    return a + b;
}
   
try {
    add('string',1);
} catch (error) {
    console.log(error.message); // TypeError: The first argument must be a number
}


