import { ListNode1 } from "./leetcode/reverse_Linked_List";
import { Node1 } from "./leetcode/flatten_linked_list";
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
let otherNode = new TreeNode(
  3,
  new TreeNode(
    6,
    new TreeNode(9, new TreeNode(12, null, null), new TreeNode(15, null, null)),
    new TreeNode(2, new TreeNode(4, null, null), new TreeNode(5, null, null))
  ),
  new TreeNode(
    6,
    new TreeNode(9, new TreeNode(12, null, null), new TreeNode(15, null, null)),
    new TreeNode(2, new TreeNode(4, null, null), new TreeNode(5, null, null))
  )
);
let nodezzn = new TreeNode(
  3,
  new TreeNode(6, new TreeNode(9, null, null), new TreeNode(2, null, null)),
  new TreeNode(6, new TreeNode(9, null, null), new TreeNode(2, null, null))
);
// ________________________________________________________________________


function values_at_each_level(root: TreeNode | null): number[][] {
  // create queue
  let queue = [root];
  let finalArr = []

  // while the que has length
  while(queue.length){
    let localLength = queue.length
    let localCount = 0;
    let localArr = []
    //check queue contents; add tp queue
    while(localCount < localLength){
      let currentNode = queue.pop();
      if (currentNode) {
        localArr.push(currentNode.val);
        queue.push(currentNode.left!);
        queue.push(currentNode.right!);
      }
      localCount++
    }

    finalArr.push(localArr);
  }

  return finalArr;
}

console.log(values_at_each_level(otherNode));


// 