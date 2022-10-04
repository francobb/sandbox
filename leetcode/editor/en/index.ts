export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  insert(values) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
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
export class SimpleNode {
  data: number;
  children: SimpleNode[] | null
  constructor(data, children?) {
    this.data = data;
    this.children = children;
  }

  add(data) {
    this.children.push(new SimpleNode(data));
  }
}
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
export let simpleNode = new SimpleNode(0, [
    new SimpleNode(1, [new SimpleNode(4)]),
    new SimpleNode(2),
    new SimpleNode(3, [new SimpleNode(5)]),
  ])
export let treeNode = new TreeNode(
  3,
  new TreeNode(
    6,
    new TreeNode(9, null, new TreeNode(5, new TreeNode(8), null)),
    new TreeNode(2, null, null)
  ),
  new TreeNode(1, null, new TreeNode(4, null, null))
);


let l1 = [7, 3, 4].reduce((acc, val) => new ListNode(val, acc as undefined) as any, null)
let l2 = [6, 5, 4].reduce((acc, val) => new ListNode(val, acc as undefined)as any, null)

export const l1a = [9, 9, 9, 9, 9, 9, 9].reduce((acc, val) => new ListNode(val, acc as undefined) as any, null)
export const l1b = [9, 9, 9, 9].reduce((acc, val) => new ListNode(val, acc as undefined) as any, null)

export const l1c = [0].reduce((acc, val) => new ListNode(val, acc as undefined) as any, null)
export const l1d = [0].reduce((acc, val) => new ListNode(val, acc as undefined) as any, null)
