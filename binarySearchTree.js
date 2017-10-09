function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

BST.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (order === 'pre-order') iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === 'post-order') iteratorFunc(this.value);
};

BST.prototype.breadthSearchTraversal = function(iteratorFunc) {
  //this is root node of BST
  var queue = [this]; //FIFO
  while (queue.length) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
};

BST.prototype.getMinVal = function() {
  if (this.left) return this.left.getMinVal();
  else return this.value;
};

BST.prototype.getMaxVal = function() {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
};

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst.right.left.left);
console.log(bst.left.right.left);
console.log(bst.right.right);

console.log(bst.contains(50));
console.log(bst.contains(59));
console.log(bst.contains(11));
console.log(bst.contains(52));

bst.depthFirstTraversal(log, 'in-order');
bst.depthFirstTraversal(log, 'pre-order');
bst.depthFirstTraversal(log, 'post-order');
bst.breadthSearchTraversal(log2);

console.log('MIN: ', bst.getMinVal());
console.log('MAX: ', bst.getMaxVal());

function log(value) {
  console.log(value);
}

function log2(node) {
  console.log(node.value);
}

// delete: Linear — O(n), or O(log n) in average case
// insert: Linear — O(n), or O(log n) in average case
// contains: Linear — O(n), or O(log n) in average case
// depthFirstLog: Linear — O(n), or O(log n) in average case

// Design an algorithm to find a path from one node in a binary tree to another.
// Given a binary tree, check whether it’s a binary search tree or not.
// Find the minimum depth of binary search tree
// Given a binary search tree and a value k, please find a node in the binary search tree whose value is closest to k.
