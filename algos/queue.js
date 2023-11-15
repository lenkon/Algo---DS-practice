// Start with your code from LinkedList challenge.
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.rear_node = null;
  }
  
  add(number) {
    // your code here
    var node = new Node(number);
    
    if (this.rear_node === null) {
      this.head = this.rear_node = node;
      return;
    }
    this.rear_node.next_node = node;
    this.rear_node = node;
  }
  
  remove() {
    // your code here
    if (this.head === null) 
      return -1;
    
    let current = this.head
    this.head = this.head.next_node;    

    if (this.head === null) {
      this.rear_node = this.head; 
    }
    return current.value;
  }
}

const queue = new Queue()

queue.add(3)
queue.add(5)
console.log(queue.remove())
// => 3

queue.add(2)
queue.add(7)
console.log(queue.remove())
// => 5

console.log(queue.remove())
// => 2

console.log(queue.remove())
// => 7

console.log(queue.remove())
// => -1

module.exports = Queue
