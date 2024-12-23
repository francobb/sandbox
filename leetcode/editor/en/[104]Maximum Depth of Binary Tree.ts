//<p>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p>
//
//<p>A binary tree&#39;s <strong>maximum depth</strong>&nbsp;is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>
//
//<p>&nbsp;</p>
//<p><strong>Example 1:</strong></p>
//<img alt="" src="https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg" style="width: 400px; height: 277px;" />
//<pre>
//<strong>Input:</strong> root = [3,9,20,null,null,15,7]
//<strong>Output:</strong> 3
//</pre>
//
//<p><strong>Example 2:</strong></p>
//
//<pre>
//<strong>Input:</strong> root = [1,null,2]
//<strong>Output:</strong> 2
//</pre>
//
//<p><strong>Example 3:</strong></p>
//
//<pre>
//<strong>Input:</strong> root = []
//<strong>Output:</strong> 0
//</pre>
//
//<p><strong>Example 4:</strong></p>
//
//<pre>
//<strong>Input:</strong> root = [0]
//<strong>Output:</strong> 1
//</pre>
//
//<p>&nbsp;</p>
//<p><strong>Constraints:</strong></p>
//
//<ul>
//	<li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.</li>
//	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
//</ul>
//<div><div>Related Topics</div><div><li>Tree</li><li>Depth-First Search</li><li>Breadth-First Search</li><li>Binary Tree</li></div></div><br><div><li>👍 5191</li><li>👎 109</li></div>

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// @ts-ignore
function maxDepth(root: TreeNode | null): number {
  // @ts-ignore
  function recursiveFunction(node: TreeNode | null, count: number): number {
    if (!node) {
      return count;
    }
    return Math.max(
      recursiveFunction(node.left, count + 1),
      recursiveFunction(node.right, count + 1)
    );
  }

  return recursiveFunction(root, 0);
}
//leetcode submit region end(Prohibit modification and deletion)
