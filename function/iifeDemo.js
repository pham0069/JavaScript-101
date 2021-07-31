/**
 * IIFE (immediately-invoked function expression)
 * creates a scope by declaring a function and immediately execute it
 */

for (var i = 0; i < 10; i++) {
    // iife
    (function (index) {
        console.log(i);
    })(i);
}