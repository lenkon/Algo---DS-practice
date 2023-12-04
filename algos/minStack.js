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

  // min() {    
  //   return this.minimum;
  // }

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
  
  pop() {
    // your code here
    if (this.top === null) 
      return;
    
    if (this.top.value < this.minimum) {
      let returnValue = this.minimum;
      this.minimum = 2 * this.minimum - this.top.value;

      let current = this.top;
      this.top = this.top.next_node;      
      return returnValue;      
    }

    let current = this.top;
    this.top = this.top.next_node;
    return current.value;
  }
  
  min() {    
    return this.minimum;
  }

}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min());
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
// => 3

module.exports = Stack
