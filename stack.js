// A stack is a data structure based on the principle Last In First Out (LIFO). 
// stack is container to hold nodes and has two operations — push and pop. 
// The push operation is to add nodes into the stack and 
// pop operation is to delete nodes from the stack and returns the top most node.


// Creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {};
}

// Adds a value onto the end of the stack
Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
}

// Removes and returns the value at the end of the stack
Stack.prototype.pop = function() {
    // Check to see if the stack is empty
    if (this.count === 0) {
        return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}

// Returns the length of the stack
Stack.prototype.size = function() {
    return this.count;
}