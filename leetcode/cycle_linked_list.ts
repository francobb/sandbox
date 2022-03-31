import { ListNode1 } from "./reverse_Linked_List";

class ListNode4 {
  val: number
  next: any
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// @ts-ignore
const linkedList: ListNode4 = [8,7,6,5,4,3,2,1].reduce((acc, val) => new ListNode4(val, acc), null);

let curr = linkedList, cycleNode;
while(curr.next !== null) {
  if(curr.val === 3) {
    cycleNode = curr;
  }

  curr = curr.next;
}
curr.next = cycleNode;


let n = new ListNode1(3);
let n1 = new ListNode1(2);
let n2 = new ListNode1(0);
let n3 = new ListNode1(-4);

n.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n;
// n3.next = null;

// console.log(detectCycle1(linkedList));

//[3,2,0,-4]

const detectCycle1 = (head: ListNode1 | null): ListNode1 | null => {
  let hairNode = head;
  let tortNode = head;

  while(true){
    hairNode = hairNode.next;
    tortNode = tortNode.next;

    if (hairNode.next === null || hairNode === null){
      return null;
    } else {
      hairNode = hairNode.next
    }

    if (tortNode === hairNode){ // found the meeting point
      break;
    }
  }

  let p1 = head, p2 = tortNode;

  while(p1 !== p2){
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1
};

const detectCycle2 = function(head: ListNode1 | null): ListNode1 | null {
  if (head == null || head.next == null) return null;

  let fast = head;
  let slow = head;
  let entry = head;

  while (fast.next != null && fast.next.next != null) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast == slow) {
          while (slow != entry) {
              slow = slow.next;
              entry = entry.next;
          }
          return entry;
      }
  }

  return null;
};

const detectCycle3 = function(head: ListNode1 | null): ListNode1 | null {

  let [turtle, rabbit] = [head, head];

  let bl = true;
  while(bl){
    rabbit = rabbit.next;
    turtle = turtle.next

    if(rabbit === null || rabbit.next === null){
      bl = false 
    } else {
      rabbit = rabbit.next;
    }

    if(rabbit === turtle){
      break;
    }

  }

  let [pointer1, pointer2] = [head, rabbit];

  while(pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer1
}

console.log(detectCycle3(linkedList));
