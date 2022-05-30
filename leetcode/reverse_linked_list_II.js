"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reverse_Linked_List_1 = require("./reverse_Linked_List");
function reverseBetween1(head, left, right) {
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
        var next = currentNode.next; // save the next node temp
        currentNode.next = newList; // newList stores previous node; reorders next node to be previous
        newList = currentNode;
        currentNode = next; //move on
        currentPosition++; // move on
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
var node11 = new reverse_Linked_List_1.ListNode1(1);
var node22 = new reverse_Linked_List_1.ListNode1(2);
var node33 = new reverse_Linked_List_1.ListNode1(3);
var node44 = new reverse_Linked_List_1.ListNode1(4);
var node55 = new reverse_Linked_List_1.ListNode1(5);
node11.next = node22;
node22.next = node33;
node33.next = node44;
node44.next = node55;
node55.next = null;
console.log(reverseBetween1(node11, 2, 4));
function newFunc(head, left, right) {
    var currentPosition = 1;
    var currentNode = head;
    var start = head;
    // while loop used to get to position
    while (currentPosition < left) {
        start = currentNode;
        currentNode = currentNode.next;
        currentPosition++;
    }
    var newTempList = null;
    var tail = currentNode;
    while (left <= currentPosition && currentPosition <= right) {
        var next = currentNode.next;
        currentNode.next = newTempList;
        newTempList = currentNode;
        currentNode = next;
        currentPosition++;
    }
    tail.next = currentNode;
    start.next = newTempList;
    if (left > 1) {
        return head;
    }
    else {
        return newTempList;
    }
}
