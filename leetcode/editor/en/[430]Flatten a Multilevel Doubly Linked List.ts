//You are given a doubly linked list which in addition to the next and previous
//pointers, it could have a child pointer, which may or may not point to a separat
//e doubly linked list. These child lists may have one or more children of their o
//wn, and so on, to produce a multilevel data structure, as shown in the example b
//elow.
//
// Flatten the list so that all the nodes appear in a single-level, doubly linke
//d list. You are given the head of the first level of the list.
//
//
// Example 1:
//
//
//Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
//Output: [1,2,3,7,8,11,12,9,10,4,5,6]
//Explanation:
//
//The multilevel linked list in the input.sh is as follows:
//
//
//
//After flattening the multilevel linked list it becomes:
//
//
//
//
// Example 2:
//
//
//Input: head = [1,2,null,3]
//Output: [1,3,2]
//Explanation:
//
//The input.sh multilevel linked list is as follows:
//
//  1---2---NULL
//  |
//  3---NULL
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
//
// How multilevel linked list is represented in test case:
//
// We use the multilevel linked list from Example 1 above:
//
//
// 1---2---3---4---5---6--NULL
//         |
//         7---8---9---10--NULL
//             |
//             11--12--NULL
//
// The serialization of each level is as follows:
//
//
//[1,2,3,4,5,6,null]
//[7,8,9,10,null]
//[11,12,null]
//
//
// To serialize all levels together we will add nulls in each level to signify n
//o node connects to the upper node of the previous level. The serialization becom
//es:
//
//
//[1,2,3,4,5,6,null]
//[null,null,7,8,9,10,null]
//[null,11,12,null]
//
//
// Merging the serialization of each level and removing trailing nulls we obtain
//:
//
//
//[1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
//
//
// Constraints:
//
//
// The number of Nodes will not exceed 1000.
// 1 <= Node.val <= 105
//
// Related Topics Linked List Depth-First Search Doubly-Linked List
// 👍 2552 👎 200

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     prev: Node | null
 *     next: Node | null
 *     child: Node | null
 *     constructor(val?: number, prev? : Node, next? : Node, child? : Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */
import {Node} from "./index";

function flatten(head: Node | null): Node | null {
  if (!head) return head;
  let currentNode = head;
  while (currentNode !== null) {
    // if current node doesn't have a child move on
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      // set tail; (the last child)
      let tail = currentNode.child;

      // if there IS a child sibling
      while (tail.next !== null) {
        // set tail to the last child
        tail = tail.next;
      }

      //make the next node after tail
      tail.next = currentNode.next;
      if (tail.next != null) {
        tail.next.prev = tail;
      }

      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }
  return head;
}
//leetcode submit region end(Prohibit modification and deletion)
