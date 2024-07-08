class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  print() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result + "null");
  }
}

const list = new LinkedList();

list.add(34);
list.print();

list.add(34);
list.add(34);
list.add(34);
list.add(34);
list.add(34);
list.add(34);
list.add(34);
list.add(34);
list.print();
