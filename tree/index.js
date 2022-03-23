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
}
