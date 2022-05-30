"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node1 = void 0;
var Node1 = /** @class */ (function () {
    function Node1(val, prev, next, child) {
        this.val = val === undefined ? 0 : val;
        this.prev = prev === undefined ? null : prev;
        this.next = next === undefined ? null : next;
        this.child = child === undefined ? null : child;
    }
    return Node1;
}());
exports.Node1 = Node1;
function flatten1(head) {
    if (!head)
        return head;
    var currentNode = head;
    while (currentNode !== null) {
        if (currentNode.child === null) {
            currentNode = currentNode.next;
        }
        else {
            var tail = currentNode.child;
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
