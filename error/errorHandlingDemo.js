/**
 * If an error occurs, JavaScript terminates the code execution 
 * and jumps to the code that handles the error in the catch portion.
 * In the catch portion, you can access an error object that contains at least 
 * the name of the error and message that explains what went wrong.
 * The finally clause is an optional clause of the try-catch statement. 
 * The code that you place in the finally portion always executes regardless of the error condition.
 */
try{
    foo();
} catch(error) {
    console.log(error.name + ":" + error.message); // ReferenceError, foo is not defined
}
console.log("Still alive thanks to exception caught");

function foo(){
    try {
        return 1;
    } catch(error) {
        return 2;
    }
}

console.log(foo()); // 1, as no error in try{}

function foo(){
    try {
        return 1;
    } catch(error) {
        return 2;
    } finally {
        return 3;
    }
}
console.log(foo()); // 3, i.e. finally{} causes return statement in try{} to be ignored

// As finally always executed, it's good to put cleanup code there