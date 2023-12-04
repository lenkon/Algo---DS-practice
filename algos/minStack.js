class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class Stack {
  constructor() {
    this.top = null; 
    this.minimum = null;   
  }

  push(number) {
    // your code here
    if (this.top === null) {
      let node = new Node(number);
      this.minimum = number;

      if (!(node === null)) {
        node.next_node = this.top;
        this.top = node;
      }
    }
    else if (number > this.minimum) {
      let node = new Node(number);
      if (!(node === null)) {
        node.next_node = this.top;
        this.top = node;
      }
    }
    else { 
      let newValue = 2 * number - this.minimum;
      let node = new Node(newValue);
      if (!(node === null)) {
        node.next_node = this.top;
        this.top = node;
      }
      this.minimum = number;
    }
    return;
  }
    
}


module.exports = Stack
