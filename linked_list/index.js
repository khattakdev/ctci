class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    var currentNode = this.head;
    var newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  shift() {
    if (!this.head) return undefined;
    var currentNode = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.tail == 0) {
      this.tail = null;
    }
    return currentNode;
  }
}
// 5 -> 2 -> 7

var list = new LinkedList();
list.push(5);
list.push(2);
list.push(88);
list.push(45);

console.log(list.pop());
list.pop();
list.pop();
list.pop();
console.log(list);
