//You are given two non-empty linked lists representing two non-negative 
//integers. The digits are stored in reverse order, and each of their nodes contains a 
//single digit. Add the two numbers and return the sum as a linked list. 
//
// You may assume the two numbers do not contain any leading zero, except the 
//number 0 itself. 
//
// 
// Example 1: 
//
// 
//Input: l1 = [2,4,3], l2 = [5,6,4]
//Output: [7,0,8]
//Explanation: 342 + 465 = 807.
// 
//
// Example 2: 
//
// 
//Input: l1 = [0], l2 = [0]
//Output: [0]
// 
//
// Example 3: 
//
// 
//Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//Output: [8,9,9,9,0,0,0,1]
// 
//
// 
// Constraints: 
//
// 
// The number of nodes in each linked list is in the range [1, 100]. 
// 0 <= Node.val <= 9 
// It is guaranteed that the list represents a number that does not have 
//leading zeros. 
// 
// Related Topics Linked List Math Recursion 👍 18453 👎 3767

//leetcode submit region begin(Prohibit modification and deletion)
import { ListNode } from "./index";

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
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let beforeHead = new ListNode(0);
  let head = beforeHead;
  let carryOver = 0;

  while( (l1 || l2)?.val >= 0 || carryOver ) {
    let sum = carryOver; // set current sum to carryOver

    // if (l1?.val) sum += l1.val; // check for val in left
    // if (l2?.val) sum += l2.val; // check for val in right

    sum += (l1?.val || 0) + (l2?.val || 0)

    carryOver = sum >= 10 ? 1 : 0; // do we have carryover from sum
    head.next = new ListNode(sum % 10); // set the total

    l1 = l1?.next;
    l2 = l2?.next;

    head = head.next;
  }

  return beforeHead.next;
}
//leetcode submit region end(Prohibit modification and deletion)
