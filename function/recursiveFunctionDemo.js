/**
 * A recursive function is a function that calls itself.
 */

// Iterative version
function factorial1(n) {
    var result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    return result;
}

// Recursive version
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// 
/**
 * Beware of recursive function assignment
 * Because inside the function, we referenced to the factorial name 
 * which was set to null at the time of calling the function
 */
var fac = factorial;
factorial = null;
// console.log(fac(5)); // TypeError: factorial is not a function


/**
 * Resolve this by named function expression
 * pf function name is visible inside the function itself and 
 * it remains the same even if you assign the function to another variable
 */
var factorial2 = function pf(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * pf(n - 1);
    }
};

fac = factorial2;
factorial2 = null;
console.log(fac(5)); // 120