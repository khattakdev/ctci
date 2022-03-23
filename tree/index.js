class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    }
    var currentNode = this.root;
    while (true) {
      if (value == currentNode.value) return undefined;
      if (value < currentNode.value) {
        if (currentNode.left == null) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right == null) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  find(value) {
    if (this.root == null) return null;

    var currentNode = this.root;

    while (true) {
      if (value == currentNode.value) return currentNode;
      if (value < currentNode.value) {
        if (currentNode.left == null) {
          return null;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right == null) {
          return null;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  DFSPreOrder() {
    var data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    var data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    var data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}
