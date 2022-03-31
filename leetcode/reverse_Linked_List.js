"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode1 = void 0;
var ListNode1 = /** @class */ (function () {
    function ListNode1(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode1;
}());
exports.ListNode1 = ListNode1;
function reverseList1(head) {
    var prev = null; // What we checked
    var current = head; // We are checking this
    var tempNext; // To be checked
    while (current) {
        tempNext = current.next; // Store the next node "current" is pointing to.
        current.next = prev; // Make "current" next point to the previous node. (reverse) [1 2 3] --> [2 1 3]
        prev = current; // Save the current node in "prev" for the next loop. prev becomes current after current gets moved back
        current = tempNext; // Set "current" to be current's old next node for the next loop.
    }
    return prev; // Return what we checked
    /*
      let [curr, prev]: [ListNode | null, ListNode | null] = [head, null];
      while (curr) [curr.next, prev, curr] = [prev, curr, curr.next];
      return prev;
     */
}
var node11 = new ListNode1(1);
var node22 = new ListNode1(2);
var node33 = new ListNode1(3);
var node44 = new ListNode1(4);
var node55 = new ListNode1(5);
node11.next = node22;
node22.next = node33;
node33.next = node44;
node44.next = node55;
node55.next = null;
console.log(reverseList1(node11));
