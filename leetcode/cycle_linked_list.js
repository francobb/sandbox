"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reverse_Linked_List_1 = require("./reverse_Linked_List");
var ListNode4 = /** @class */ (function () {
    function ListNode4(val, next) {
        if (next === void 0) { next = null; }
        this.val = val;
        this.next = next;
    }
    return ListNode4;
}());
// @ts-ignore
var linkedList = [8, 7, 6, 5, 4, 3, 2, 1].reduce(function (acc, val) { return new ListNode4(val, acc); }, null);
var curr = linkedList, cycleNode;
while (curr.next !== null) {
    if (curr.val === 3) {
        cycleNode = curr;
    }
    curr = curr.next;
}
curr.next = cycleNode;
var detectCycle1 = function (head) {
    var hairNode = head;
    var tortNode = head;
    while (true) {
        hairNode = hairNode.next;
        tortNode = tortNode.next;
        if (hairNode.next === null || hairNode === null) {
            return null;
        }
        else {
            hairNode = hairNode.next;
        }
        if (tortNode === hairNode) {
            break;
        }
    }
    var p1 = head, p2 = tortNode;
    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
};
var n = new reverse_Linked_List_1.ListNode1(3);
var n1 = new reverse_Linked_List_1.ListNode1(2);
var n2 = new reverse_Linked_List_1.ListNode1(0);
var n3 = new reverse_Linked_List_1.ListNode1(-4);
n.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = null;
console.log(detectCycle1(linkedList));
//[3,2,0,-4]
// const detectCycle2 = function(head: ListNode | null): ListNode | null {
//   if (head == null || head.next == null) return null;
//
//     let fast = head;
//     let slow = head;
//     let entry = head;
//     while (fast.next != null && fast.next.next != null) {
//         fast = fast.next.next;
//         slow = slow.next;
//         if (fast == slow) {
//             while (slow != entry) {
//                 slow = slow.next;
//                 entry = entry.next;
//             }
//             return entry;
//         }
//     }
//
//     return null;
// };
