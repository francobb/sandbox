//Given the head of a singly linked list and two integers left and right where l
//eft <= right, reverse the nodes of the list from position left to position right
//, and return the reversed list.
//
//
// Example 1:
//
//
//Input: head = [1,2,3,4,5], left = 2, right = 4
//Output: [1,4,3,2,5]
//
//
// Example 2:
//
//
//Input: head = [5], left = 1, right = 1
//Output: [5]
//
//
//
// Constraints:
//
//
// The number of nodes in the list is n.
// 1 <= n <= 500
// -500 <= Node.val <= 500
// 1 <= left <= right <= n
//
//
//
//Follow up: Could you do it in one pass? Related Topics Linked List
// 👍 4405 👎 223
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
// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
function reverseBetween(head, left, right) {
    var currentPosition = 1;
    var currentNode = head;
    var start = head;
    while (currentPosition < left) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPosition++;
    }
    var newList = null;
    var tail = currentNode;
    while (currentPosition >= left && currentPosition <= right) {
        var next = currentNode.next;
        currentNode.next = newList;
        newList = currentNode;
        currentNode = next;
        currentPosition++;
    }
    start.next = newList;
    tail.next = currentNode;
    if (left > 1) {
        return head;
    }
    else {
        return newList;
    }
}
//leetcode submit region end(Prohibit modification and deletion)
