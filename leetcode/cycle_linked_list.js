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
var n = new reverse_Linked_List_1.ListNode1(3);
var n1 = new reverse_Linked_List_1.ListNode1(2);
var n2 = new reverse_Linked_List_1.ListNode1(0);
var n3 = new reverse_Linked_List_1.ListNode1(-4);
n.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n;
// n3.next = null;
// console.log(detectCycle1(linkedList));
//[3,2,0,-4]
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
        if (tortNode === hairNode) { // found the meeting point
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
var detectCycle2 = function (head) {
    if (head == null || head.next == null)
        return null;
    var fast = head;
    var slow = head;
    var entry = head;
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
var detectCycle3 = function (head) {
    var _a = __read([head, head], 2), turtle = _a[0], rabbit = _a[1];
    var bl = true;
    while (bl) {
        rabbit = rabbit.next;
        turtle = turtle.next;
        if (rabbit === null || rabbit.next === null) {
            bl = false;
        }
        else {
            rabbit = rabbit.next;
        }
        if (rabbit === turtle) {
            break;
        }
    }
    var _b = __read([head, rabbit], 2), pointer1 = _b[0], pointer2 = _b[1];
    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    return pointer1;
};
console.log(detectCycle3(linkedList));
