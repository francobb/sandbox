//Given the head of a singly linked list, reverse the list, and return the rever
//sed list.
//
//
// Example 1:
//
//
//Input: head = [1,2,3,4,5]
//Output: [5,4,3,2,1]
//
//
// Example 2:
//
//
//Input: head = [1,2]
//Output: [2,1]
//
//
// Example 3:
//
//
//Input: head = []
//Output: []
//
//
//
// Constraints:
//
//
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
//
//
//
// Follow up: A linked list can be reversed either iteratively or recursively. C
//ould you implement both?
// Related Topics Linked List Recursion
// 👍 7847 👎 145
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode = null; // What we checked
  let current: ListNode = head; // We are checking this
  let tempNext: ListNode; // To be checked
  while (current) {
    tempNext = current.next; // Store the node "current" is pointing to.
    current.next = prev; // Make "current" point to the previous node.
    prev = current; // Save the current node in "prev" for the next loop.
    current = tempNext; // Set "current" to be current's old next node for the next loop.
  }
  return prev; // Return what we checked
}
let [node1, node2, node3, node4, node5] = [
  new ListNode(1),
  new ListNode(2),
  new ListNode(3),
  new ListNode(4),
  new ListNode(5),
];
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;
console.log(reverseList(node1));

//leetcode submit region end(Prohibit modification and deletion)
