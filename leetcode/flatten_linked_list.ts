export class Node1 {
  val: number;
  prev: Node1 | null;
  next: Node1 | null;
  child: Node1 | null;
  constructor(val?: number, prev?: Node1, next?: Node1, child?: Node1) {
    this.val = val === undefined ? 0 : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
    this.child = child === undefined ? null : child;
  }
}

function flatten1(head: Node1 | null): Node1 | null {
  if (!head) return head;
  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      let tail = currentNode.child;
      while (tail.next !== null) {
        tail = tail.next;
      } //find last node in child list
      tail.next = currentNode.next;
      if (tail.next != null) {
        // make previous of currentNode.next to equal last child of current node
        tail.next.prev = tail;
        // currentNode.next.prev = tail
      }
      currentNode.next = currentNode.child; // next is child list
      currentNode.next.prev = currentNode; // child prev is parent now
      currentNode.child = null;
    }
  }
  return head;
}
