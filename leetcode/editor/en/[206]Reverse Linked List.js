"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNode = void 0;
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
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
function reverseList(head) {
    var prev = null; // What we checked
    var current = head; // We are checking this
    var tempNext; // To be checked
    while (current) {
        tempNext = current.next; // Store the node "current" is pointing to.
        current.next = prev; // Make "current" point to the previous node.
        prev = current; // Save the current node in "prev" for the next loop.
        current = tempNext; // Set "current" to be current's old next node for the next loop.
    }
    return prev; // Return what we checked
}
var _a = __read([
    new ListNode(1),
    new ListNode(2),
    new ListNode(3),
    new ListNode(4),
    new ListNode(5),
], 5), node1 = _a[0], node2 = _a[1], node3 = _a[2], node4 = _a[3], node5 = _a[4];
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;
console.log(reverseList(node1));
//leetcode submit region end(Prohibit modification and deletion)
