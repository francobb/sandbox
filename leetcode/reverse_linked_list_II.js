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
// let node11 = new ListNode1(1);
// let node22 = new ListNode1(2);
// let node33 = new ListNode1(3);
// let node44 = new ListNode1(4);
// let node55 = new ListNode1(5);
node11.next = node22;
node22.next = node33;
node33.next = node44;
node44.next = node55;
node55.next = null;
console.log(reverseBetween(node11, 2, 4));
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
