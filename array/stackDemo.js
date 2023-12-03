/**
 * A stack is a DS that holds a list of elements. 
 * A stack works based on the LIFO principle i.e., Last In, First out, 
 * meaning that the most recently added element is the first one to remove.
 * 
 * A stack has two main operations that occur only at the top of the stack: 
 * 1. push: place an element at the top of stack 
 * 2. pop: remove an element from the top of the stack.
 */

// Create a stack
var stack = [];
 
// Push elements to stack
stack.push(1);
console.log(stack); // [1]
stack.push(2);
console.log(stack); // [1,2]
stack.push(3);
console.log(stack); // [1,2,3]
 
// Pop elements from stack
console.log(stack.pop()); //  3
console.log(stack); // [1,2];
console.log(stack.pop()); //  2
console.log(stack); // [1];
console.log(stack.pop()); //  1
console.log(stack); // []; -> empty
console.log(stack.pop()); //  undefined

// Reverse string with stack
function reverse(str) {
    var stack = [];
    // push letter into stack
    for (var i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    // pop letter from the stack
    var reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}
console.log(reverse('JavaScript Stack')); //kcatS tpircSavaJ
