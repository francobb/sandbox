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
export class Node {
  val: number
  prev: Node | null
  next: Node | null
  child: Node | null
  constructor(val?: number, prev? : Node, next? : Node, child? : Node) {
    this.val = (val===undefined ? 0 : val);
    this.prev = (prev===undefined ? null : prev);
    this.next = (next===undefined ? null : next);
    this.child = (child===undefined ? null : child);
  }
}