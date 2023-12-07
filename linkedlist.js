class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//singly linkedlist
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // add method
  add(data) {
    const newNode = new Node(data);
    if(this.head) {
      let curr = this.head;
      while(curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  // size method
  size() {
    let count = 0;
    let node = this.head;
    while(node) {
      count++;
      node = node.next;
    }

    return count;
  }

  // print linkedlist method
  print() {
    let curr = this.head;
    while(curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

const newLinkedList = new LinkedList(new Node(3))
newLinkedList.add(4)
newLinkedList.add("yes")
newLinkedList.print()

console.log(newLinkedList.size())

