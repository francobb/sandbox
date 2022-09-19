// export class ListNode1 {
//   val: number;
//   next: ListNode1 | null;
//   constructor(val?: number, next?: ListNode1 | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

import { ListNode } from "./editor/en";

function reverseBetween1(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {

  let currentPosition = 1;
  let currentNode = head;
  let start = head;

  while (currentPosition < left) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPosition++;
  }

  let newList = null;
  let tail = currentNode;

  while (currentPosition >= left && currentPosition <= right) {
    const next = currentNode.next; // save the next node temp
    currentNode.next = newList; // newList stores previous node; reorders next node to be previous
    newList = currentNode;
    currentNode = next; //move on
    currentPosition++; // move on
  }

  start.next = newList;
  tail.next = currentNode;

  if (left > 1) {
    return head;
  } else {
    return newList;
  }
}

let node11 = new ListNode(1);
let node22 = new ListNode(2);
let node33 = new ListNode(3);
let node44 = new ListNode(4);
let node55 = new ListNode(5);

node11.next = node22;
node22.next = node33;
node33.next = node44;
node44.next = node55;
node55.next = null;

console.log(reverseBetween1(node11, 2, 4));

function newFunc (
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {

  let currentPosition=1;
  let currentNode = head;
  let start = head;

  // while loop used to get to position
  while(currentPosition < left) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPosition++
  }

  let newTempList = null;
  let tail = currentNode;

  while(left <= currentPosition && currentPosition <= right) {
    let next = currentNode.next;
    currentNode.next = newTempList;
    newTempList = currentNode;
    currentNode = next;
    currentPosition++
  }

  tail.next = currentNode;
  start.next = newTempList

  if (left > 1) {
    return head;
  } else {
    return newTempList
  }
}

