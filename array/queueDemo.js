/**
 * A queue is an ordered list of elements where an element is inserted at the end of the queue 
 * and is removed from the front of the queue, i.e. LIFO
 * 2 main operations
 * 1. enqueue: insert element at end of queue
 * 2. dequeue: remove element from front of queue
 */

/**
 * Define Queue based on array, push and shift
 */
function Queue() {
    this.elements = [];
}
Queue.prototype.enqueue = function (e) {
    this.elements.push(e);
}
Queue.prototype.dequeue = function () {
    return this.elements.shift();
}
Queue.prototype.peek = function () {
    return !this.isEmpty() ? this.elements[0] : undefined;
};
Queue.prototype.isEmpty = function () {
    return this.elements.length == 0;
}
Queue.prototype.length = function () {
    return this.elements.length;
}

// Queue elements
var q = new Queue();
for (var i = 1; i <= 7; i++) {
    q.enqueue(i);
}
// Get the current item at the front of the queue
console.log(q.peek()); // 1
// Dequeue all elements
while (!q.isEmpty()) {
    console.log(q.dequeue());
}